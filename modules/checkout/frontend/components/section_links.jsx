import React from "react"
import { Link, IndexLink } from "react-router"

const SectionLinks = () => {
  return (
    <div>
      <nav className='account-nav' role='navigation'>
        <ul className='menu-options'>
          <li id='my-profile' className='nav-item' >
            <IndexLink className='top-nav-link' activeClassName='selected' to='/account' role='menuitem'> My Profile </IndexLink>
          </li>
          <li id='my-orders' className='nav-item' >
            <Link className='top-nav-link' activeClassName='selected' to='/account/orders' role='menuitem'> My Orders </Link>
          </li>
          <li id='my-subscriptions' className='nav-item' >
            <Link className='top-nav-link' activeClassName='selected' to='/account/subscriptions' role='menuitem'> My Subscriptions </Link>
          </li>
          <li id='saved-items' className='nav-item' >
            <Link className='top-nav-link' activeClassName='selected' to='/account/saved-items' role='menuitem'> My Saved Items </Link>
          </li>
        </ul>
      </nav>
      <div className='separator' />
    </div>
  )
}

export default SectionLinks
