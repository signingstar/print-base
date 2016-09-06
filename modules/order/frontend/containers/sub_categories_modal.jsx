import React from "react";
import { connect} from "react-redux";

import SubCategoriesModalComponent from "../components/sub_categories_modal";

class SubCategoriesModal extends React.Component {
  constructor() {
    super();

    this.state = {
      isShowingModal: false
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({isShowingModal: true});
  }

  handleClose() {
    this.setState({isShowingModal: false});
  }

  render() {
    const label = 'See Preview';
    const modalHeader = 'Selected to upload';

    return (
      <SubCategoriesModalComponent
        onClick={this.handleClick}
        onClose={this.handleClose}
        isShowing={this.state.isShowingModal}
        label={label}
        modalHeader={modalHeader}
        type={this.props.type} />
    )
  }
}

const mapStateToProps = (orderApp, ownProps) => {
  return {
    type: ownProps.type
  }
}


export default connect(
  mapStateToProps
) (SubCategoriesModal);
