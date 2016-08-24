import * as React from "react";
import { connect } from "react-redux";

import SectionHeader from "./section_header";
import SectionBody from "./section_body";

import { setPreload } from "../actions";

class MainContents extends React.Component<any, {}> {
  componentDidMount() {
    let {onSetPreload} = this.props;
    this.props.onSetPreload('type');
  }

  render () {
    return (
      <section>
        <div className='main-section-content'>
          <SectionBody children={this.props.children}/>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (orderApp: any, ownProps: any) => {
  return {
    children: ownProps.children
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
