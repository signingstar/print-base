import * as React from "react";

const SectionHeader = ({active, onClick}: {active: string, onClick: (e: string) => void}) => {
  return (
    <div>
      <nav className='account-nav' role='navigation'>
        <ul className='menu-options'>
          <li id='my-profile' className={'nav-item' + (active === 'profile' ? ' selected' : '')}  onClick={() => onClick('profile')}>
            <a className='top-nav-link' href='#' role= 'menuitem'> My Profile </a>
          </li>
          <li id='my-orders' className={'nav-item' + (active === 'orders' ? ' selected' : '')} onClick={() => onClick('orders')}>
            <a className='top-nav-link' href='#' role= 'menuitem'> My Orders </a>
          </li>
          <li id='my-subscriptions' className={'nav-item' + (active === 'subscriptions' ? ' selected' : '')} onClick={() => onClick('subscriptions')}>
            <a className='top-nav-link' href='#' role= 'menuitem'> My Subscriptions </a>
          </li>
          <li id='saved-items' className={'nav-item' + (active === 'savedItems' ? ' selected' : '')} onClick={() => onClick('savedItems')}>
            <a className='top-nav-link' href='#' role= 'menuitem'> My Saved Items </a>
          </li>
        </ul>
      </nav>
      <div className='separator' />
    </div>
  );
}

export default SectionHeader;
