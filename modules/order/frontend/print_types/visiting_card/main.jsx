import React from "react";
import { connect } from "react-redux";

import OrderPresenter from "../../presenter";
import PaperQuality from "../../filters/paper_quality";
import PrintMaterial from "../../filters/material";
import PrintData from "./print_combination";
import CoatingBox from "../../filters/coat";
import PrintQuantity from "../../filters/quantity";
import DesignFilesBox from "../../containers/design_files";

import Confirmation from "../../../confirmation/containers/main";
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
    let paperQualityLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_PAPER_QUALITY, paper_quality);

    return {
      type: typeLabel,
      coat: coatLabel,
      quantity: quantityLabel,
      paper_quality: paperQualityLabel
    }
  }

  render() {
    let { type, size, paper_quality, coat, quantity, pathname } = this.props;

    pathname.match(/^\/order\/([a-z\-]+)$/);
    pathname = RegExp.$1;

    type = type || pathname;

    let coatList = this.presenter.printableDataWithFilter(TYPE_COAT, {type});
    let quantityList = this.presenter.printableDataWithFilter(TYPE_QUANTITY, {type});
    let paperQualityList = this.presenter.printableDataWithFilter(TYPE_PAPER_QUALITY, {type});

    let fieldsLabel = this.getLabelForFields({ type, paper_quality, coat, quantity });

    return (
      <div className='main-section-body'>
        <div className='left-panel'>
          <DefaultCategory type={fieldsLabel.type} />
          <CoatingBox coatList={coatList} />
          <PaperQuality paperQualityList={paperQualityList} />
          <PrintQuantity quantityList={quantityList} />
          <DesignFilesBox />
        </div>
        <div className='right-panel'>
          <Confirmation fieldsLabel={fieldsLabel} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (orderApp, ownProps) => {
  let { coat, paper_quality, quantity } = orderApp.selectionState;
  return {
    type: orderApp.typeState.type,
    coat,
    paper_quality,
    quantity,
    pathname: ownProps.location.pathname
  }
}

export default connect(
  mapStateToProps
)(VisitingCard);
