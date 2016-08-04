import * as React from "react";

interface PrintTypeProps {
  selected: boolean;
  id: string;
  label: string;
  onClick: (e: any)=>void;
}

export class OptionButton extends React.Component<PrintTypeProps, any> {
  data: {};

  constructor() {
    super();

    this.state = {
      selected: false
    }
  }

  updateState(e:any) {
    this.setState({selected : !this.state.selected});
    this.props.onClick({id:e.target.id});
  }

  componentWillReceiveProps(nextProps: PrintTypeProps) {
    this.setState({selected: nextProps.selected});
  }

  render() {
    return (
      <button id={this.props.id} className={'select-elem' + (this.state.selected ? ' selected' : '')} onClick={this.updateState.bind(this)}>
        {this.props.label}
      </button>
    );
  }
}
