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

    this.updateState = this.updateState.bind(this)
  }

  updateState(e:any) {
    this.props.onClick({id:e.target.id});
  }

  render() {
    return (
      <button id={this.props.id} className={'select-elem' + (this.props.selected ? ' selected' : '')} onClick={this.updateState}>
        {this.props.label}
      </button>
    );
  }
}
