import * as $ from "jquery";

const addReferrer = () => {
  let selectors = '#user-signin a, #user-signup a, #user-signout a';
  let currentHref = location.href;

  currentHref = currentHref.replace(/[?&]ref_url=([^&]*)?/, '');

  let referrer = 'ref_url=' + encodeURIComponent(currentHref);

  $(selectors).each(function() {
    let urlAppender = /\?/.test(this.href) ? '&' : '?';
    let refUrlString = urlAppender + referrer;
    this.href += refUrlString;
  });
}

export default addReferrer;
