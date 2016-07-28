import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component<{}, {}> {
  render () {
    return <h2>Place an Order</h2>;
  }
}

ReactDOM.render(<App />, document.getElementById('order-header'));
