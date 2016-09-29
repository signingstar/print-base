import React from "react"
import Match from 'react-router/Match'
import Link from "react-router/Link"
import Miss from 'react-router/Miss'

import PersonalInfo from "../containers/personal_info"
import Address from "../components/address"
import EditAddress from "../containers/edit_address"
import PasswordChange from "../containers/password_change"

const AccountDetails = ({pathname}) => {
  return (
    <div className='nav-content'>
      <div className='left-panel'>
        <ul>
          <li><Link to={pathname} activeOnlyWhenExact activeClassName="selected">Personal Information</Link></li>
          <li><Link to={`${pathname}/address`} activeClassName="selected">Address</Link></li>
          <li><Link to={`${pathname}/password-change`} activeClassName="selected">Change Password</Link></li>
        </ul>
      </div>
      <div className='right-panel'>
        <Match pattern={pathname} exactly component={PersonalInfo} />
        <Match exactly pattern={`${pathname}/address`} component={Address} />
        <Match pattern={`${pathname}/address/edit`} component={EditAddress} />
        <Match pattern={`${pathname}/password-change`} component={PasswordChange} />
        <Miss component={()=> <div>Not Found inner</div>} />
      </div>
    </div>
  )
}

export default AccountDetails
