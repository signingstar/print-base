import * as $ from "jquery";
import * as _ from "underscore";

export class NavigateSections {
  private elemSelected:boolean;

  constructor(private $stickyElement:JQuery, private navSectionMap:any, private scrollDelay:number = 10,  private topOffset:number = 50) {
    this.elemSelected = false;
  }

  stickyLeftNavigation() {
    let width = this.$stickyElement.width();
    let offsetTop = this.$stickyElement.offset().top;
    let isFixed = false;

    let stickyFunction = () => {
      let scrollTop:number, shouldBeFixed:boolean;

      if (!isFixed) {
        offsetTop = this.$stickyElement.offset().top;
      }

      scrollTop = $(window).scrollTop();
      shouldBeFixed = scrollTop > offsetTop - this.topOffset;

      if (shouldBeFixed && !isFixed) {
        this.$stickyElement.trigger("stickElement", {width: width});
        isFixed = true;
      } else if (!shouldBeFixed && isFixed) {
        this.$stickyElement.trigger("unstickElement");
        isFixed = false;
      }
    };

    let throttled = _.throttle(stickyFunction, this.scrollDelay);
    $(window).on("scroll", throttled);
  }

  processNavSelection = ($el:JQuery, ev:Event) => {
    this.elemSelected = true;

    let targetSection:JQuery = $('#' + $el.attr('id').slice(0,-4));

    if(targetSection.length === 0) {
      return;
    }

    this.navigateTargetSection(targetSection, () => {
      this.elemSelected = false;
      this.$stickyElement.find('li').removeClass('selected');
      $el.addClass('selected');
    });

    ev.preventDefault();
  }

  navigateTargetSection($target:JQuery, callback:any) {
    let final = $target.offset().top - this.topOffset;
    this.navigateTargetPosition(final, callback);
  }

  navigateTargetPosition(final:number, callback?: any) {
    let initial = $(window).scrollTop();
    let difference = Math.abs(final - initial);
    let duration = difference / 10 + 100;
    let tickInterval = 15;
    let increment = Math.ceil(difference * tickInterval / duration);
    let current = initial;

    let stepAnimator = () => {
      if(Math.abs(current - final) < increment) {
        current = final;
      } else if(current < final) {
        current = current + increment;
      } else {
        current = current - increment;
      }

      window.scrollTo(0, current);

      if(current !== final) {
        setTimeout(() => stepAnimator.call(this), tickInterval);
      } else if(callback) {
        callback();
      }
    };

    stepAnimator.call(this);
  }

  updateNavSelection = () => {
    let navSelected = false;
    let sectionInViewport = false;

    for(let navId in this.navSectionMap) {
      let contentId = this.navSectionMap[navId];
      let $el = $(contentId);
      sectionInViewport = this.isSectionInViewport($el)

      if(!this.elemSelected && $el.length == 1 && sectionInViewport) {
        this.$stickyElement.find('li').removeClass('selected');
        this.$stickyElement.find('.' + navId).addClass('selected');
        navSelected = true;
        break;
      }
    }

    if(!sectionInViewport) {
      this.$stickyElement.find('li').removeClass('selected');
    }
  }

  private offsetHeight() {
    let height = 0;

    if(this.$stickyElement.hasClass('sticky')) {
      height = this.$stickyElement[0].getBoundingClientRect().bottom;
    }

    return height;
  }

  private isSectionInViewport($el:JQuery) {
    let rect = $el[0].getBoundingClientRect();
    let offset = this.offsetHeight();

    return rect.bottom >= offset && rect.top < offset + 100;
  }

  activate() {
    this.stickyLeftNavigation();

    let _that = this;
    this.$stickyElement.find('li').on("click", function(ev:Event) {
      _that.processNavSelection($(this), ev);
    });

    let throttleUpdateNavSelection = _.throttle(this.updateNavSelection, this.scrollDelay);
    $(window).on("resize scroll", throttleUpdateNavSelection);
  }
}
