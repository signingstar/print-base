import * as $ from "jquery";
import * as _ from "underscore";

let shortcutMap = {'visiting-cards-nav': '#visiting-cards', 'stationary-nav': '#stationary', 'brouchers-nav': '#brouchers'};
let elemSelected = false;

export class NavigateSections {
  private elemSelected: boolean;

  constructor(private stickyClass:string, private stickyElement:string, private navSectionMap:any ) {
    this.elemSelected = false;
  }
}

export function fixTabHeader() {
  let $tabHeader = $("#service-item");
  let width:number = $tabHeader.width();
  let offsetTop:number = $tabHeader.offset().top;
  let isFixed:boolean = false;
  let stickyFunction = function() {
    let scrollTop:number, shouldBeFixed:boolean;
    if (!isFixed) {
      offsetTop = $tabHeader.offset().top;
    }
    scrollTop = $(window).scrollTop();
    shouldBeFixed = scrollTop > offsetTop - 20;
    if (shouldBeFixed && !isFixed) {
      $tabHeader.addClass('sticky');
      $('.sticky').css('width', width);
      return isFixed = true;
    } else if (!shouldBeFixed && isFixed) {
      $tabHeader.removeClass('sticky');
      return isFixed = false;
    }
  };

  let throttled = _.throttle(stickyFunction, 10);
  $(window).on("scroll", throttled);
};

export function processShortcutSelection (el:any, ev:any) {
  let $el = $(el)
  let targetSection = '#' + $el.attr('id').slice(0,-4);
  elemSelected = true;

  navigateTargetSection(targetSection, function() {
    elemSelected = false;
  });

  $('.left-panel li').removeClass("selected");
  $el.addClass("selected");

  ev.preventDefault();
};

let _getTopPosition = function(target:any) {
  let $target = $(target);
  if($target.length) {
    return $target.offset().top - 10;
  }
};

let navigateTargetSection = function(target:any, callback:any) {
  let initial = $(window).scrollTop();
  let final = _getTopPosition(target);

  let difference = Math.abs(final - initial);
  let duration = difference / 10 + 100;
  let increment = Math.ceil(difference * 15 / duration);
  let current = initial;

  let stepAnimator = function() {
    if(Math.abs(current - final) < increment)
      current = final;
    else if(current < final)
      current = current + increment;
    else
      current = current - increment;

    window.scrollTo(0, current);

    if(current !== final) {
      final = _getTopPosition(target) || final
      setTimeout(stepAnimator, 15);
    }
    else
      callback();
  };

  stepAnimator();
};
let _offsetHeight = function() {
    let stickyElements = $(".sticky");
    let height = 0;
    if(stickyElements.length > 0) {
      height = stickyElements[0].getBoundingClientRect().bottom;
    }
    return height;
  };

let _isSectionInViewport = function(el:any) {
  var offset:number, rect:ClientRect, ref:HTMLElement;
  rect = (ref = el[0]) != null ? ref.getBoundingClientRect() : void 0;
  if(!rect) {
    return false;
  }
  offset = _offsetHeight();
  return rect.bottom >= offset && rect.top < offset + 100;
};

export function updateShortcutSelection() {
  let navSelected = false;
  for(let shortcutId in shortcutMap) {
    let contentId = shortcutMap[shortcutId];
    let $el = $(contentId);
    if(!elemSelected && $el.length == 1 && _isSectionInViewport($el)) {
      $('.left-panel li').removeClass("selected");
      $('.' + shortcutId).addClass("selected");
      navSelected = true;
      break;
    }
  }

  if(!navSelected) {
    $('.left-panel li').removeClass("selected");
  }
};
