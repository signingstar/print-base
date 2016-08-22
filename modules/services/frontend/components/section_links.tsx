import * as React from "react";
import { Link, IndexLink } from "react-router";

const SectionLinks = () => {
  return (
    <div className="left-panel">
      <nav id="service-item" role='navigation'>
        <ul>
          <li id="visiting-cards-nav" className="visiting-cards-nav">
            <Link to="/services/visiting-card" activeClassName='selected'>Visiting Cards</Link>
          </li>
          <li id="stationary-nav" className="stationary-nav">
            <Link to="/services/stationary" activeClassName='selected'>Stationary Items</Link>
          </li>
          <li id="invitation-card-nav" className="brouchers-nav">
            <Link to="/services/invitation-card" activeClassName='selected'>Invitation Cards</Link>
          </li>
        </ul>
      </nav>
      <nav id="move-to-top">
        <div title="Move To Top" className="up-arrow">
          <div className="arrow-text">Top</div>
        </div>
      </nav>
    </div>
  );
}

export default SectionLinks;
