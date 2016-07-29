import * as $ from "jquery";
import * as _ from "underscore";

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
    shouldBeFixed = scrollTop > offsetTop;
    if (shouldBeFixed && !isFixed) {
      $tabHeader.addClass('fixed');
      $('.fixed').css('width', width);
      return isFixed = true;
    } else if (!shouldBeFixed && isFixed) {
      $tabHeader.removeClass('fixed');
      return isFixed = false;
    }
  };

  let throttled = _.throttle(stickyFunction, 10);
  $(window).on("scroll", throttled);
};
