import React from "react";
import { connect } from "react-redux";

import { setPreload } from "../actions";

class MainContents extends React.Component {
  componentDidMount() {
    let {orderType, onSetPreload} = this.props;

    if(orderType.type) {
      this.props.onSetPreload('type');
    }
  }

  render () {
    return (
      <section>
        <div className='main-section-content'>
          {this.props.children}
        </div>
      </section>
    )
  }
}

const mapStateToProps = (orderApp, ownProps) => {
  return {
    children: ownProps.children,
    orderType: orderApp.typeState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSetPreload: (category: string) => {
      dispatch(setPreload(category))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContents);
