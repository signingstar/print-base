import React from "react";
import { connect } from "react-redux";

import OrderPresenter from "../../presenter";
import PaperQuality from "../../filters/paper_quality";
import PrintMaterial from "../../filters/material";
import PrintData from "./print_combination";
import CoatingBox from "../../filters/coat";
import PrintQuantity from "../../filters/quantity";
import DesignFilesBox from "../../containers/design_files";

import Confirmation from "../../containers/confirmation";
import DefaultCategory from "../../components/default_category";

import { TYPE_CATEGORY, TYPE_PAPER_QUALITY, TYPE_SURFACE, TYPE_COAT, TYPE_QUANTITY } from "../../actions";

class VisitingCard extends React.Component {
  presenter;

  constructor() {
    super();
    this.init();
  }

  init() {
    this.presenter = new OrderPresenter(PrintData);
  }

  getLabelForFields({ type, size, material, coat, quantity, paper_quality }: Labels) {
    let typeLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_CATEGORY, type);
    let coatLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_COAT, coat);
    let quantityLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_QUANTITY, quantity);

    return {
      type: typeLabel,
      coat: coatLabel,
      quantity: quantityLabel
    }
  }

  render() {
    let { type, size, paper_quality, coat, quantity, pathname } = this.props;

    pathname.match(/^\/order\/([a-z\-]+)$/);
    pathname = RegExp.$1;

    type = type || pathname;

    console.log(`type:${type}`);

    let coatList = this.presenter.printableDataWithFilter(TYPE_COAT, {type});
    let quantityList = this.presenter.printableDataWithFilter(TYPE_QUANTITY, {type});
    let paperQualityList = this.presenter.printableDataWithFilter(TYPE_PAPER_QUALITY, {type});

    let fieldsLabel = this.getLabelForFields({ type, paper_quality, coat, quantity });

    return (
      <div className='main-section-body'>
        <div className='left-panel'>
          <DefaultCategory type={fieldsLabel.type} />
          <CoatingBox coatList={coatList} type={type} />
          <PaperQuality paperQualityList={paperQualityList} type={type} />
          <PrintQuantity quantityList={quantityList} type={type} />
          <DesignFilesBox type={type} />
        </div>
        <div className='right-panel'>
          <Confirmation fieldsLabel={fieldsLabel} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (orderApp, ownProps) => {
  return {
    type: orderApp.typeState.type,
    paper_quality: orderApp.selectionState.paper_quality,
    coat: orderApp.selectionState.coat,
    pathname: ownProps.location.pathname
  }
}

export default connect(
  mapStateToProps
)(VisitingCard);
