import * as $ from "jquery";
import { NavigateSections } from "../../floater/frontend/parallex";

class OurServices {
  shortcutMap: any;
  $mainStickyElement: JQuery;
  $moveToTopElement: JQuery;

  constructor(...stickyElements: string[]) {
    this.shortcutMap = {'visiting-cards-nav': '#visiting-cards', 'stationary-nav': '#stationary', 'brouchers-nav': '#brouchers'};
    this.$mainStickyElement = $(stickyElements[0]);
    this.$moveToTopElement = $(stickyElements[1]);
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
      stickyNavigation.navigateTargetPosition(0);
    });
  }

  activate() {
    let stickyNavigation = new NavigateSections(this.$mainStickyElement, this.shortcutMap);
    stickyNavigation.activate();

    this.processStickyEvents();
    this.addPostStickEvents(stickyNavigation);
  }
}

let ourServices = new OurServices('#service-item', 'nav#move-to-top');
ourServices.activate();
