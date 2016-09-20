import React from "react"
import { Link, IndexLink } from "react-router"

const SectionLinks = () => {
  return (
    <div className="left-panel">
      <nav id="marketing-item" role='navigation'>
        <ul>
          <li id="visiting-cards-nav" className="visiting-cards-nav">
            <Link to="/marketing/banner" activeClassName='selected'>Banners</Link>
          </li>
          <li id="stationary-nav" className="stationary-nav">
            <Link to="/marketing/flyer" activeClassName='selected'>Flyers</Link>
          </li>
          <li id="invitation-card-nav" className="brouchers-nav">
            <Link to="/marketing/broucher" activeClassName='selected'>Brouchers</Link>
          </li>
        </ul>
      </nav>
      <nav id="move-to-top">
        <div title="Move To Top" className="up-arrow">
          <div className="arrow-text">Top</div>
        </div>
      </nav>
    </div>
  )
}

export default SectionLinks
