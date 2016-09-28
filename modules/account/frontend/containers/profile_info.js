import React from "react"
import { connect } from "react-redux"

import ProfileInfoComponent from "../components/profile_info"
import { updateProfileInfo, updateProfile } from "../actions"

class ProfileInfo extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.state = {}
  }

  componentWillMount() {
    this.setState(JSON.parse(JSON.stringify(this.props.data)))
  }

  handleChange(e) {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  render() {
    const { onUpdate } = this.props
    return <ProfileInfoComponent data={this.state} onChange={this.handleChange} onSubmit={()=> onUpdate(this.state)}/>
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    data: store.profileState.data
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdate: (data) => updateProfile(data, () => dispatch(updateProfileInfo(data)))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(ProfileInfo)
