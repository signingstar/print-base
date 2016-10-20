import React from "react"
import { connect } from "react-redux"
import DOMPurify from "dompurify"

import Component from "../components/personal_info"
import { setError, setSuccess, clearAllErrors, updateProfileInfo, updateProfile } from "../actions"

class PersonalInfo extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {}
  }

  componentWillMount() {
    const {profileData} = this.props

    if(profileData) {
      this.setState(JSON.parse(JSON.stringify(profileData)))
    }
  }

  componentWillReceiveProps(nextProps) {
    const {profileData} = nextProps

    if(profileData) {
      this.setState(JSON.parse(JSON.stringify(profileData)))
    }
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  handleChange(e) {
    const {name, value} = e.target
    this.setState({[name]: DOMPurify.sanitize(value)})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onUpdate(this.state)
  }

  render() {
    const { onUpdate, message } = this.props

    return (
      <Component
        data={this.state}
        message={message}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    profileData: store.profileState.data,
    message: store.error.message || {}
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (data) => {
      dispatch(updateProfileInfo(data))
      updateProfile(data, ({err}) => {
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
)(PersonalInfo)
