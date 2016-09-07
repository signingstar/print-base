import $ from "jquery";
import addReferrer from "./session_navigation";

export class MainHeader {
  constructor() {
    this.$rootElem = $('.c-header');
    this.$promotionalHeader = this.$rootElem.find('.promotional-header');
    this.$menuOptions = $('.menu-options');
  }

 slidePromotionalHeader() {
   let $closeIcon = this.$promotionalHeader.find('.close-icon');

   if($closeIcon.length) {
     $closeIcon.on('click', () => {
       this.$promotionalHeader.slideUp();
     });
   }
  }

  attachHoverEventOnMenuItems() {
    let timer;
    let delay = 100;
    let contentMouseOut = false;

    this.$menuOptions.find('a[aria-haspopup="true"]').on({
      'mouseenter focusin': (e) =>  {
        let $target = $(e.target);
        let actualDelay = contentMouseOut ? 0 : delay;
        contentMouseOut = false;
        timer = setTimeout(()=> {
          $target.addClass('focused');
          $target.parent().find('.inner-menu .sub-nav').show();
        }, actualDelay);
      },
      'mouseleave focusout': (e) => {
        clearTimeout(timer);
        let $target = $(e.target);
        $target.removeClass('focused');
        $target.parent().find('.inner-menu .sub-nav').hide();
      }
    });

    this.$menuOptions.find('nav .inner-menu-content').on({
      'mouseenter': (e) =>  {
        $(e.target).parents('li').find('.top-nav-link').addClass('focused');
        $(e.target).parents('.sub-nav').show();
      },
      'mouseleave': (e) => {
        $(e.target).parents('li').find('.top-nav-link').removeClass('focused');
        $(e.target).parents('.sub-nav').hide();
        contentMouseOut = true;
      }
    });
  }
}

let header = new MainHeader();

addReferrer();
header.attachHoverEventOnMenuItems();
if($('header .promotional-header').length) {
  header.slidePromotionalHeader();
}
