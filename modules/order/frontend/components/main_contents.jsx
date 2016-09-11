import React from "react";
import { connect } from "react-redux";
import { keys } from "underscore";

class MainContents extends React.Component {
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
  let sessionStore = typeof sessionStorage === 'undefined'? undefined : sessionStorage;

  if(sessionStore && keys(orderApp.selectionState).length > 2) {
    console.log(`orderApp2:${sessionStore.getItem('orderApp')}`);
    sessionStore.setItem('orderApp', JSON.stringify(orderApp));
    console.log(`orderApp3:${sessionStore.getItem('orderApp')}`);
  }
  return {
    children: ownProps.children
  }
}

export default connect(mapStateToProps)(MainContents);
