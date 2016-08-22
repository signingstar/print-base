import * as $ from "jquery";
import { throttle, find } from "underscore";

export class NavigateSections {
  private elemSelected: boolean;

  constructor(private $stickyElement: JQuery, private navSectionMap: any, private scrollDelay: number = 10,  private topOffset: number = 50) {
    this.elemSelected = false;
  }

  stickyLeftNavigation() {
    let width = this.$stickyElement.width();
    let offsetTop = this.$stickyElement.offset().top;
    let isFixed = false;

    let stickyFunction = () => {
      let scrollTop: number, shouldBeFixed: boolean;

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

    let throttled = throttle(stickyFunction, this.scrollDelay);
    $(window).on("scroll", throttled);
  }

  processNavSelection = ($el: JQuery, ev: Event, pushState: boolean) => {
    if(ev) {
      ev.preventDefault();
    }

    this.elemSelected = true;

    this.displayTargetSection($el, pushState, () => {
      this.elemSelected = false;
      this.$stickyElement.find('li').removeClass('selected');
      $el.addClass('selected');
    });
  }

  displayTargetSection($el: JQuery, pushState: boolean, callback: () => void) {
    const targetSectionName = this.navSectionMap[$el.attr('id')];
    const $targetSection = $(targetSectionName);

    if($targetSection.length === 0) {
      return;
    }

    $('.sub-section').addClass('hide');
    $targetSection.removeClass('hide').addClass('show');

    if(pushState) {
      this.pushToHistory($el.attr('data-link'));
    }

    callback();
  }

  pushToHistory(linkedCategory: string) {
    const {hostname, pathname, search} = location;
    const pushUrl = pathname + `?category=${linkedCategory}`;
    history.pushState({category: linkedCategory, url: pushUrl}, 'title1', pushUrl);
  }

  popFromHistory(e: any) {
    let {state} = e;

    if(state != null ) {
      let category = state.category;
      let $el = this.$stickyElement.find(`li[data-link=${category}]`);

      if($el.length === 0) {
        let url = state.url;
        location = url;
      } else {
        this.processNavSelection($el, undefined, false);
      }
    }
  }

  navigateTargetSection($target: JQuery, callback: () => void) {
    let final = $target.offset().top - this.topOffset;
    this.navigateTargetPosition(final, callback);
  }

  navigateTargetPosition(final: number, callback: () => void) {
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


  setDefaultSelected(visibleElement: string) {
    let navId: string;

    find(this.navSectionMap, (value, key)=> {
      if(value === `#${visibleElement}`) { navId = `#${key}`};
    });

    this.$stickyElement.find(navId).addClass('selected');
  }

  activate(visibleElement: string) {
    // this.setDefaultSelected(visibleElement);
    this.stickyLeftNavigation();

    // let _that = this;
    // this.$stickyElement.find('li').on("click", function(ev: Event) {
    //   _that.processNavSelection($(this), ev, true);
    // });

    // let throttleUpdateNavSelection = throttle(this.updateNavSelection, this.scrollDelay);
    // $(window).on("resize scroll", throttleUpdateNavSelection);

    // history.pushState({url: location.href}, '', location.href);

    // window.onpopstate = (e) => {
    //   this.popFromHistory(e);
    // };
  }
}
