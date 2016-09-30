import React from "react"
import {connect} from "react-redux"

import Passwords from "../components/password_change"
import { setError, setSuccess, updateAccountPassword, clearAllErrors } from "../actions"

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
    const { onChange } = this.props
    onChange(this.state, () => this.setState(this.initialState))
  }

  componentWillUnmount() {
    const { clearErrors } = this.props
    clearErrors()
  }

  render() {
    const { message } = this.props
    return (
      <Passwords
        onChange={this.handleChange}
        data={this.state}
        onSubmit={this.updatePassword}
        message={message}
      />
    )
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    message: store.error.message || {}
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (data, resetFields) => {
      dispatch(clearAllErrors())
      updateAccountPassword(data, ({err}) => {
        resetFields()
        if(err) {
          dispatch(setError(err))
        } else {
          dispatch(setSuccess())
        }
      })
    },
    clearErrors: () => dispatch(clearAllErrors())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordChange)
