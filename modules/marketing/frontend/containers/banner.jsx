import React from "react";
import { connect } from "react-redux";

import BannnerComponent from "../components/banner";

const mapStateToProps = () => {
  let mainHeading = 'Banner Printing';
  let innerHeading = ['Multi-purpose banner', 'Digital banner', 'Mobile banner'];
  let images = ['/assets/panel1.jpg', '/assets/panel2.jpg', '/assets/panel3.jpg'];
  let innerContent = [
    {
      line1: 'Some billboards are not used only for advertising, but can be multi-purpose. ',
      line2: 'So, an advertising sign can integrate its main purpose with telecommunications antenna and/or public lighting support. Usually the structure has a steel pole with a coupling flange on the above-fitted advertising billboard structure that can contain telecommunications antennas. The lighting power wiring and any antennas are placed inside the structure.'
    },
    {
      line1: 'A digital billboard is a billboard that is created from computer programs and software. ',
      line2: 'Digital billboards can be designed to display running text, display several different displays from the same company, and even provide several companies a certain time slot during the day. The constantly changing texts ensure maximum impact and wide exposure to target audiences.'
    },
    {
      line1: 'Outdoor Advertising, such as a mobile billboard, is effective because it is difficult to ignore',
      line2: 'Unlike a typical billboard, mobile billboards are able to go directly to their target audience. They can be placed wherever there is heavy foot traffic due to an event - including convention centers, train stations, airports and sports arenas.'
    }
  ];
  let deeplinks = ['/order?mode=services&item=brouchers', '/order?mode=services&amp;item=brouchers', '/order?mode=services&amp;item=brouchers'];

  return {
    mainHeading, innerHeading, images, innerContent, deeplinks
  }
}

const Banner = connect(
  mapStateToProps
)(BannnerComponent);

export default Banner;
