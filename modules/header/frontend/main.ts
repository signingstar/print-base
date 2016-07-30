import * as $ from "jquery";

export class Header {
  $rootElem:JQuery;
  $topNav:JQuery;
  $subNav:JQuery;
  rowCount:number;

  constructor() {
    this.$rootElem = $('.header header');
    this.$topNav = this.$rootElem.find('#top-nav');
    this.$subNav = this.$topNav.find('nav .submenu-options');
  }

  attachNavEvent() {
    this.$subNav.on('click', function(){
      let id = $(this).attr('id');
      if(window.location.pathname.indexOf('/services') === -1) {
        window.location.href = `/services/${id}`;
      }
    });
  }

  identifyNavEvent() {
    let $selectedNav = this.$subNav.find('.selected');
    if($selectedNav.length > 0) {
      let elemIndex = $selectedNav.attr('id').slice(-1);
      $(`.left-panel nav li:nth-child(${elemIndex})`).trigger('click');
    }
  }
}

$(function() {
  console.log('document ready');
  let header = new Header();
  header.identifyNavEvent();
  header.attachNavEvent();
});

window.onload = function() {
  console.log('window loaded');
}
