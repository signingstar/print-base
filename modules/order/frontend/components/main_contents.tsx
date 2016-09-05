import * as React from "react";
import { connect } from "react-redux";

import { setPreload } from "../actions";

class MainContents extends React.Component<any, {}> {
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

const mapStateToProps = (orderApp: any, ownProps: any) => {
  return {
    children: ownProps.children,
    orderType: orderApp.typeState
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
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
