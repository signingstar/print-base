import React from "react"
import { Link, NavLink } from "react-router-dom"

const SectionLinks = () => {
  return (
    <div className="left-panel">
      <nav id="service-item" role='navigation'>
        <ul>
          <li id="visiting-cards-nav" className="visiting-cards-nav">
            <NavLink to="/services/visiting-card" activeClassName='selected'>Visiting Cards</NavLink>
          </li>
          <li id="stationary-nav" className="stationary-nav">
            <NavLink to="/services/stationary" activeClassName='selected'>Stationary Items</NavLink>
          </li>
          <li id="invitation-card-nav" className="brouchers-nav">
            <NavLink to="/services/invitation-card" activeClassName='selected'>Invitation Cards</NavLink>
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
