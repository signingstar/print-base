import * as $ from 'jquery';
import {each} from 'underscore';
import {addReferrer} from './session_navigation';

export class MainHeader {
  $rootElem:JQuery;
  $topNavList:JQuery;
  $promotionalHeader: JQuery;

  constructor() {
    this.$rootElem = $('.c-header');
    this.$promotionalHeader = this.$rootElem.find(".promotional-header");
    this.$topNavList = this.$rootElem.find('.top-nav .menu-options li');
  }

  attachSubNavEvent ($subNavItems:JQuery, $topNavLink:JQuery) {
    let _this = this;
    each($subNavItems, function(item) {
      let linkUrl = $topNavLink.attr('href');
      let $item = $(item);
      $item.on('click', function($ev){
        $ev.preventDefault();
        let id = $item.attr('id');
        let urlPathName = window.location.pathname;
        if(urlPathName.indexOf(linkUrl) === -1) {
          window.location.href = `${linkUrl}/${id}`;
        } else {
          _this.triggerSubNavSelection($item);
        }
      });
    });
  }

  processSubNavSelection($subNav:JQuery) {
    let $selectedElem = $subNav.find('.selected');
    if($selectedElem.length) {
      this.triggerSubNavSelection($selectedElem);
    }
  }

  triggerSubNavSelection($el:JQuery) {
      let elemIndex = $el.attr('id').slice(-1);
      $(`.left-panel nav li:nth-child(${elemIndex})`).trigger('click');
  }

 slidePromotionalHeader() {
   let $closeIcon = this.$promotionalHeader.find('.close-icon');
   if($closeIcon.length) {
     $closeIcon.on("click", () => {
       this.$promotionalHeader.slideUp();
     });
   }
  }

  attachSubNavEvenToEntireList() {
    each(this.$topNavList, (listItem) => {
      let $listItem = $(listItem);
      let $subNav = $listItem.find('.sub-nav');

      if($subNav.length) {
        this.processSubNavSelection($subNav);

        let $navAnchorElem = $listItem.find('.top-nav-link');
        let $subListItem = $subNav.find('a');
        this.attachSubNavEvent($subListItem, $navAnchorElem);
      }
    });
  }

}

$(function() {
  console.log('document ready');
  let header = new MainHeader();

  if($('header .top-nav').length) {
    header.attachSubNavEvenToEntireList();
  }

  addReferrer();

  if($('header .promotional-header').length) {
    header.slidePromotionalHeader();
  }
});

window.onload = function() {
  console.log('window loaded');
}
