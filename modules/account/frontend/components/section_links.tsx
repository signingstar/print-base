import * as React from "react";
import { Link } from "react-router";

const SectionLinks = ({children, active}: {children: any, active: string}) => {
  return (
    <div>
      <nav className='account-nav' role='navigation'>
        <ul className='menu-options'>
          <li id='my-profile' className={'nav-item' + (active === 'profile' ? ' selected' : '')} >
            <Link className='top-nav-link' to='/account/profile' role= 'menuitem'> My Profile </Link>
          </li>
          <li id='my-orders' className={'nav-item' + (active === 'orders' ? ' selected' : '')} >
            <Link className='top-nav-link' to='/account/orders' role= 'menuitem'> My Orders </Link>
          </li>
          <li id='my-subscriptions' className={'nav-item' + (active === 'subscriptions' ? ' selected' : '')} >
            <Link className='top-nav-link' to='/account/subscriptions' role= 'menuitem'> My Subscriptions </Link>
          </li>
          <li id='saved-items' className={'nav-item' + (active === 'savedItems' ? ' selected' : '')} >
            <Link className='top-nav-link' to='/account/saved-items' role= 'menuitem'> My Saved Items </Link>
          </li>
        </ul>
      </nav>
      <div className='separator' />
      {children}
    </div>
  );
}

export default SectionLinks;
