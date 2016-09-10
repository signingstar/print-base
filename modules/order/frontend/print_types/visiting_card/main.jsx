import React from "react";
import { connect } from "react-redux";

import OrderPresenter from "../../presenter";
import PrintData from "./print_combination";
import PaperQuality from "../../filters/paper_quality";
import PrintMaterial from "../../filters/material";
import CoatingBox from "../../filters/coat";
import PrintQuantity from "../../filters/quantity";
import DesignFilesBox from "../../containers/design_files";
import Confirmation from "../../../confirmation/containers/main";
import DefaultCategory from "../../components/default_category";

import { CATEGORY, PAPER_QUALITY, SURFACE, COAT, QUANTITY } from "../../actions/index";

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
    let typeLabel = this.presenter.fetchLabelForCategoryAndId(CATEGORY, type);
    let coatLabel = this.presenter.fetchLabelForCategoryAndId(COAT, coat);
    let quantityLabel = this.presenter.fetchLabelForCategoryAndId(QUANTITY, quantity);
    let paperQualityLabel = this.presenter.fetchLabelForCategoryAndId(PAPER_QUALITY, paper_quality);

    let labelMap = new Map();
    labelMap.set('coat', {label: 'Coating', value: coatLabel});
    labelMap.set('paper_quality', {label: 'Paper Quality', value: paperQualityLabel});
    labelMap.set('quantity', {label: 'Quantity', value: quantityLabel});

    let isComplete = typeLabel && coatLabel && quantityLabel && paperQualityLabel;

    return {
      type: typeLabel,
      fieldsMap: labelMap,
      isComplete
    }
  }

  render() {
    let { type, size, paper_quality, coat, quantity, pathname } = this.props;

    pathname.match(/^\/order\/([a-z\-]+)$/);
    pathname = RegExp.$1;

    type = type || pathname;

    let coatList = this.presenter.printableDataWithFilter(COAT, {type});
    let quantityList = this.presenter.printableDataWithFilter(QUANTITY, {type});
    let paperQualityList = this.presenter.printableDataWithFilter(PAPER_QUALITY, {type});

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
    type: orderApp.categoryState.type,
    coat,
    paper_quality,
    quantity,
    pathname: ownProps.location.pathname
  }
}

export default connect(
  mapStateToProps
)(VisitingCard);
