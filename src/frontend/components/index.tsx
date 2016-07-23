import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component<{}, {}> {
  render () {
    return <h2>First text from kickoff</h2>;
  }
}

ReactDOM.render(<App />, document.getElementsByClassName('main-content')[0]);
