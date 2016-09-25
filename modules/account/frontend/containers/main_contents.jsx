import React from "react"
import { connect } from "react-redux"
import { ajax } from "jquery"

import MainContents from "../components/main_contents"
import { updateAllStates } from "../actions"

class MainContentsContainer extends React.Component {
  componentDidMount() {
    let { onDetailsLoad, location } = this.props
    let url = '/account/details'
    let { pathname } = location

    ajax({
      url,
      cache: false,
      data: {pathname},
      dataType: 'json',
      success: (data: any) => onDetailsLoad(data) ,
      error: function(xhr, status, err) {
        console.error(url, status, err.toString())
      }.bind(this)
    })
  }

  render() {
    let {state, routes} = this.props

    return <MainContents routes={routes} />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state,
    location: ownProps.location
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDetailsLoad: (details) => {
      dispatch(updateAllStates(details))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContentsContainer)
