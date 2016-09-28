import React from "react"
import {connect} from "react-redux"

import Passwords from "../components/password_change"
import { updateAccountPassword } from "../actions"

class PasswordChange extends React.Component {
  constructor() {
    super()

    this.initialState = {
      password: '',
      confirm_password: ''
    }

    this.state = this.initialState

    this.handleChange = this.handleChange.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({[name]: value})
  }

  updatePassword() {
    updateAccountPassword(this.state, () => this.setState(this.initialState))
  }

  render() {
    return <Passwords onChange={this.handleChange} data={this.state} onSubmit={this.updatePassword} />
  }
}

export default PasswordChange
