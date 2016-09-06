import $ from "jquery";
import { NavigateSections } from "../../../floater/frontend/parallex";

class ServicesAndProducts {
  $mainStickyElement;
  $moveToTopElement;
  $contentElement;

  constructor(shortcutMap, ...stickyElements) {
    this.shortcutMap = shortcutMap;
    this.$mainStickyElement = $(stickyElements[0]);
    this.$moveToTopElement = $(stickyElements[1]);
    this.$contentElement = $('.right-panel');
  }

  processStickyEvents() {
    this.$mainStickyElement.on('stickElement', (ev, data) => {
      this.$mainStickyElement.addClass('sticky');
      this.$mainStickyElement.css('width', data.width);
      this.showOtherStickyElements();
    });

    this.$mainStickyElement.on('unstickElement', () => {
      this.$mainStickyElement.removeClass('sticky');
      this.hideOtherStickyElements();
    });
  }

  showOtherStickyElements() {
    this.$moveToTopElement.find('.up-arrow').show();
  }

  hideOtherStickyElements() {
    this.$moveToTopElement.find('.up-arrow').hide();
  }

  addPostStickEvents(stickyNavigation: NavigateSections) {
    this.$moveToTopElement.on('click', '.up-arrow', function() {
      stickyNavigation.navigateTargetPosition(0, ()=>{});
    });
  }

  activate() {
    let stickyNavigation = new NavigateSections(this.$mainStickyElement, this.shortcutMap);
    let visibleElementId = this.$contentElement.find('.sub-section.show').attr('id');
    stickyNavigation.activate(visibleElementId);

    this.processStickyEvents();
    this.addPostStickEvents(stickyNavigation);
  }
}

export default ServicesAndProducts;
