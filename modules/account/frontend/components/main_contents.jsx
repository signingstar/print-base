import React from "react"
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'
import Router from 'react-router/BrowserRouter'

import Navigation from "./navigation"
import Profile from "../containers/profile"
import Orders from "../containers/orders"

const Root = () => (
  <section>

    <Navigation />
    <Match pattern="/account/profile" component={Profile} />
    <Match exactly pattern="/account/orders" component={Orders} />
    <Miss component={()=> <div>Not Found</div>} />
  </section>
)

class Login extends React.Component {
  componentWillMount() {
    console.log(`location`)
    window.location = '/login'
  }

  render() {
    console.log(`location:${this.props.location}`)
    return <h3>Redirecting to Login Page</h3>
  }
}
export default Root
