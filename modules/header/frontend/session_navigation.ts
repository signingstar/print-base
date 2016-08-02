import * as $ from "jquery";

export function addReferrer() {
  let selectors = '#user-signin, #user-signup, #user-signout';
  let currentHref = location.href;

  currentHref = currentHref.replace(/[?&]ref_url=([^&]*)?/, '');

  let referrer = 'ref_url=' + encodeURIComponent(currentHref);

  $(selectors).each(function() {
    let urlAppender = /\?/.test(this.href) ? '&' : '?';
    let refUrlString = urlAppender + referrer;
    this.href += refUrlString;
  });
}
