import * as React from "react";
import { Link } from "react-router";

const SectionLinks = () => {
  return (
    <div>
      <nav className='account-nav' role='navigation'>
        <ul className='menu-options'>
          <li id='my-profile' className='nav-item' >
            <Link className='top-nav-link' activeClassName='selected' to='/account/profile' role='menuitem'> My Profile </Link>
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
  );
}

export default SectionLinks;