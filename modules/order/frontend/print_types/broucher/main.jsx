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

import Confirmation from "../../../confirmation/containers/main";
import DefaultCategory from "../../components/default_category";
import { setCategory } from "../../actions/index";

import { CATEGORY, PAPER_QUALITY, SURFACE, COAT, QUANTITY, FOLD } from "../../actions/index";

class Broucher extends React.Component {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.presenter = new OrderPresenter(PrintData);
  }

  getLabelForFields({ category, size, material, coat, quantity, paper_quality, fold }) {
    let typeLabel = this.presenter.fetchLabelForCategoryAndId(CATEGORY, category);
    let foldLabel = this.presenter.fetchLabelForCategoryAndId(FOLD, fold);
    let coatLabel = this.presenter.fetchLabelForCategoryAndId(COAT, coat);
    let quantityLabel = this.presenter.fetchLabelForCategoryAndId(QUANTITY, quantity);
    let paperQualityLabel = this.presenter.fetchLabelForCategoryAndId(PAPER_QUALITY, paper_quality);

    let labelMap = new Map();
    labelMap.set('coat', {label: 'Coating', value: coatLabel});
    labelMap.set('fold', {label: 'Print Fold', value: foldLabel});
    labelMap.set('paper_quality', {label: 'Paper Quality', value: paperQualityLabel});
    labelMap.set('quantity', {label: 'Quantity', value: quantityLabel});

    let isComplete = foldLabel && coatLabel && quantityLabel && paperQualityLabel;

    return {
      category: typeLabel,
      fieldsMap: labelMap,
      isComplete
    }
  }

  componentWillMount() {
  }

  render() {
    let { category, subCategory, paper_quality, fold, coat, quantity, pathname, setType } = this.props;

    let coatList = this.presenter.printableDataWithFilter(COAT, {subCategory});
    let foldList = this.presenter.printableDataWithFilter(FOLD, {subCategory});
    let quantityList = this.presenter.printableDataWithFilter(QUANTITY, {subCategory});
    let paperQualityList = this.presenter.printableDataWithFilter(PAPER_QUALITY, {subCategory});

    let fieldsLabel = this.getLabelForFields({ subCategory, paper_quality, coat, fold, quantity });

    return (
      <div className='main-section-body'>
        <div className='left-panel'>
          <DefaultCategory type={fieldsLabel.subCategory} />
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
    category: orderApp.categoryState.category,
    subCategory: orderApp.categoryState.subCategory,
    paper_quality,
    coat,
    fold,
    quantity,
    pathname: ownProps.location.pathname
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setFold: (fold) => {
      dispatch(setFold(fold));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Broucher);
