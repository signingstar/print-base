import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import PersonalInfo from "../containers/personal_info"
import Address from "../components/address"
import EditAddress from "../containers/edit_address"
import PasswordChange from "../containers/password_change"

const AccountDetails = ({pathname}) => {
  return (
    <Router>
      <Switch>
        <div className='nav-content'>
          <div className='left-panel'>
            <ul>
              <li><Link to={pathname} activeOnlyWhenExact activeClassName="selected">Personal Information</Link></li>
              <li><Link to={`${pathname}/address`} activeClassName="selected">Address</Link></li>
              <li><Link to={`${pathname}/password-change`} activeClassName="selected">Change Password</Link></li>
            </ul>
          </div>
          <div className='right-panel'>
            <Route path={pathname} exact component={PersonalInfo} />
            <Route exact path={`${pathname}/address`} component={Address} />
            <Route path={`${pathname}/address/edit`} component={EditAddress} />
            <Route path={`${pathname}/password-change`} component={PasswordChange} />
            <Route component={()=> <div>Not Found inner</div>} />
          </div>
        </div>
      </Switch>
    </Router>
  )
}

export default AccountDetails
