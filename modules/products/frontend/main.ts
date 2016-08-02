import * as $ from "jquery";
import { NavigateSections } from "../../floater/frontend/parallex";

class OurServices {
  shortcutMap: any;
  $mainStickyElement: JQuery;

  constructor(...stickyElements: JQuery[]) {
    this.shortcutMap = {'printed-tshirts-nav': '#printed-tshirts', 'printed-mugs-nav': '#printed-mugs', 'posters-nav': '#posters'};
    this.$mainStickyElement = stickyElements[0];
  }

  processStickEvents() {
    this.$mainStickyElement.on('stickElement', (ev, data) => {
      this.$mainStickyElement.addClass('sticky');
      this.$mainStickyElement.css('width', data.width);
    });
    this.$mainStickyElement.on('unstickElement', () => {
      this.$mainStickyElement.removeClass('sticky');
    });
  }

  activate() {
    let stickyNavigation = new NavigateSections(this.$mainStickyElement, this.shortcutMap);
    stickyNavigation.activate();

    this.processStickEvents();
  }
}

let ourServices = new OurServices($('#service-item'));
ourServices.activate();
