import {slidePromotionalHeader} from '../../promotion_header/frontend/main';

import * as $ from "jquery";
// require ("./js/promotion_header");

function slideShow() {
  var regex = /^url\([0-9\:a-z\.\'\"\/]+\/assets\/slide_image([0-9]?)\.jpg[\'\"]\)$/;
  setInterval(function() {
    let imageUrl = $('.slide-image').css('background-image');
    regex.test(imageUrl);
    let count:number = +RegExp.$1;
    count = (count + 1) %3 + 1;
    imageUrl = `url('/assets/slide_image${count}.jpg')`;
    $('.slide-image').css('background-image', imageUrl);
  }, 3000);
}

slidePromotionalHeader();
slideShow();
