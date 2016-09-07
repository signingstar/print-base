import React from "react";
import { connect } from "react-redux";

import OrderPresenter from "../../presenter";
import PaperQuality from "../../filters/paper_quality";
import PrintMaterial from "../../filters/material";
import PrintData from "./print_combination";
import CoatingBox from "../../filters/coat";
import PrintQuantity from "../../filters/quantity";
import Fold from "../../filters/fold";
import DesignFilesBox from "../../containers/design_files";

import Confirmation from "../../../confirmation/containers/confirmation";
import DefaultCategory from "../../components/default_category";

import { TYPE_CATEGORY, TYPE_PAPER_QUALITY, TYPE_SURFACE, TYPE_COAT, TYPE_QUANTITY, TYPE_FOLD } from "../../actions";

class Broucher extends React.Component {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.presenter = new OrderPresenter(PrintData);
  }

  getLabelForFields({ type, size, material, coat, quantity, paper_quality, fold }) {
    let typeLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_CATEGORY, type);
    let foldLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_FOLD, fold);
    let coatLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_COAT, coat);
    let quantityLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_QUANTITY, quantity);
    let paperQualityLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_PAPER_QUALITY, paper_quality);

    return {
      type: typeLabel,
      coat: coatLabel,
      fold: foldLabel,
      quantity: quantityLabel,
      paper_quality: paperQualityLabel
    }
  }

  render() {
    let { type, paper_quality, fold, coat, quantity, pathname } = this.props;

    pathname.match(/^\/order\/broucher\-([0-9a-z\-]+)$/);
    pathname = RegExp.$1;

    type = type || pathname;

    let coatList = this.presenter.printableDataWithFilter(TYPE_COAT, {type});
    let foldList = this.presenter.printableDataWithFilter(TYPE_FOLD, {type});
    let quantityList = this.presenter.printableDataWithFilter(TYPE_QUANTITY, {type});
    let paperQualityList = this.presenter.printableDataWithFilter(TYPE_PAPER_QUALITY, {type});

    let fieldsLabel = this.getLabelForFields({ type, paper_quality, coat, fold, quantity });

    return (
      <div className='main-section-body'>
        <div className='left-panel'>
          <DefaultCategory type={fieldsLabel.type} />
          <CoatingBox coatList={coatList} />
          <Fold foldList={foldList} />
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
  let {paper_quality, coat, fold, quantity} = orderApp.selectionState;
  return {
    type: orderApp.typeState.type,
    paper_quality,
    coat,
    fold,
    quantity,
    pathname: ownProps.location.pathname
  }
}

export default connect(
  mapStateToProps
)(Broucher);
