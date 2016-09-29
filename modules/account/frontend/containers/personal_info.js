import React from "react"
import { connect } from "react-redux"

import Component from "../components/personal_info"
import { updateProfileInfo, updateProfile } from "../actions"

class PersonalInfo extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
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

  handleChange(e) {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  render() {
    const { onUpdate } = this.props
    return <Component data={this.state} onChange={this.handleChange} onSubmit={()=> onUpdate(this.state)}/>
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    profileData: store.profileState.data
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdate: (data) => updateProfile(data, () => dispatch(updateProfileInfo(data)))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInfo)
