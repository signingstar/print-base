import React from "react"
import {connect} from "react-redux"

import SavedItems from "../components/saved_items"

class SavedItemsContainer extends React.Component {
  constructor() {
    super()
  }

  render() {
    let { state } = this.props

    return <SavedItems state={state} />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.savedItemsState
  }
}

export default connect(
  mapStateToProps
)(SavedItemsContainer)
