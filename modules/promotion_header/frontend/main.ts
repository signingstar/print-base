import * as $ from "jquery";

export function slidePromotionalHeader() {
  $(".promotion-header .close-icon").on("click", () => {
    $(".promotion-header").slideUp();
  });
}
