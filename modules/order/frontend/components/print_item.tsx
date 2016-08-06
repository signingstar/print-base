import * as React from "react";
import * as ReactDOM from "react-dom";

import { PrintItemState, PrintItemProps } from "./data_format";

export class PrintItem extends React.Component<PrintItemProps, PrintItemState> {
  constructor() {
    super();
    this.state = {
      selectedItem: undefined
    };
  }

  update(e: any) {
    this.setState({
      selectedItem: e.id,
    });
    e.selected=true;
    this.props.onChange(this.props.id, e.id);
  }

  componentWillMount() {
    this.setState({selectedItem: this.props.selectedItem});
  }

  shouldComponentUpdate(nextProps:any, nextState:any) {
    return nextState.selectedItem !== this.state.selectedItem || nextProps.states.type !== this.props.states.type;
  }

  componentWillReceiveProps(nextProps: any) {
    this.setState({selectedItem: nextProps.selectedItem});
  }
}
