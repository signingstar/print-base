import React from "react"
import Link from "react-router/Link"

const SectionLinks = () => {
  return (
      <div className='nav-header'>
        <nav className='account-nav' role='navigation'>
          <ul className='menu-options'>
            <li className='nav-item' >
              <Link className='top-nav-link' activeClassName='selected' to='/account/profile' role='menuitem'>My Account</Link>
            </li>
            <li className='nav-item' >
              <Link className='top-nav-link' activeClassName='selected' to='/account/orders' role='menuitem'>My Orders</Link>
            </li>
          </ul>
        </nav>
        <div className='separator' />
      </div>
  )
}

export default SectionLinks
