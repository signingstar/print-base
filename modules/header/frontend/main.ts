import * as $ from "jquery";
import addReferrer from "./session_navigation";

export class MainHeader {
  $rootElem: JQuery;
  $topNavList: JQuery;
  $promotionalHeader: JQuery;

  constructor() {
    this.$rootElem = $('.c-header');
    this.$promotionalHeader = this.$rootElem.find('.promotional-header');
  }

 slidePromotionalHeader() {
   let $closeIcon = this.$promotionalHeader.find('.close-icon');

   if($closeIcon.length) {
     $closeIcon.on('click', () => {
       this.$promotionalHeader.slideUp();
     });
   }
  }
}

let header = new MainHeader();

addReferrer();

if($('header .promotional-header').length) {
  header.slidePromotionalHeader();
}
