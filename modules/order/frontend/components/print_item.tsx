import * as React from "react";
import * as ReactDOM from "react-dom";

import { StateObject, PrintItemProps } from "./data_format";

export class PrintItem extends React.Component<PrintItemProps, {}> {
  states: StateObject;

  constructor() {
    super();
  }

  update(e: any) {
    this.props.onChange(this.props.id, e.id);
  }

  componentWillMount() {
    this.states = this.props.states;
  }

  componentWillReceiveProps(nextProps: any) {
    this.states = nextProps.states;
  }
}
