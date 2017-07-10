import React from "react"
import Link from "react-router-dom/Link"

const TopNavigation = () => {
  return (
      <div className='nav-header'>
        <nav className='account-nav' role='navigation'>
          <ul className='menu-options'>
            <li className='nav-item' >
              <Link className='top-nav-link' activeClassName='selected' to='/account' role='menuitem'>My Account</Link>
            </li>
            <li className='nav-item' >
              <Link className='top-nav-link' activeClassName='selected' to='/myorders' role='menuitem'>My Orders</Link>
            </li>
          </ul>
        </nav>
        <div className='separator' />
      </div>
  )
}

export default TopNavigation
