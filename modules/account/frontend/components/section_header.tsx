import * as React from "react";

const SectionHeader = () => {
  return (
    <nav className='account-nav' role='navigation'>
      <ul className='menu-options'>
        <li id='my-profile' className='nav-item'>
          <a className='top-nav-link' href='#' role= 'menuitem'> My Profile </a>
        </li>
        <li id='my-orders' className='nav-item'>
          <a className='top-nav-link' href='#' role= 'menuitem'> My Orders </a>
        </li>
        <li id='my-subscriptions' className='nav-item'>
          <a className='top-nav-link' href='#' role= 'menuitem'> My Subscriptions </a>
        </li>
        <li id='items' className='nav-item'>
          <a className='top-nav-link' href='#' role= 'menuitem'> My Saved Items </a>
        </li>
      </ul>
    </nav>
  );
}

export default SectionHeader;
