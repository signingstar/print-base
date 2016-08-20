import * as React from "react";
import { connect } from "react-redux";
import { ajax } from "jquery";

import MainContents from "../components/main_contents";
import { updateAllStates } from "../actions";

class MainContentsContainer extends React.Component<any, any> {
  componentDidMount() {
    let { onDetailsLoad, location } = this.props;
    let url = '/account/details';
    let { pathname } = location;

    ajax({
      url,
      cache: false,
      data: {pathname},
      dataType: 'json',
      success: (data: any) => onDetailsLoad(data) ,
      error: function(xhr:XMLHttpRequest, status: string, err: Error) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  }

  render() {
    let {state, children} = this.props;

    return <MainContents children={children} />
  }
}

const mapStateToProps = (state: any) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    onDetailsLoad: (details: any) => {
      dispatch(updateAllStates(details))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContentsContainer);
