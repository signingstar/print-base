import * as React from "react";
import * as ReactDOM from "react-dom";
import { find } from "underscore";
import { DataFormat, PrintItemState, PrintItemProps } from "./data_format";

export class PrintItem extends React.Component<PrintItemProps, PrintItemState> {
  data: DataFormat[];
  constructor() {
    super();
    this.state = {
      selectedItem: ''
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

  getItemLabel(id: string) {
    let label = '';

    find(this.data, function(item) {
      if(item.id === id) {
        return label = item.value;
      }
    });
    return label;
  }
}
