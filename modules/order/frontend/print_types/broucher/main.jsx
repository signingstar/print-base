import React from "react";
import { connect } from "react-redux";

import OrderPresenter from "../../presenter";
import PrintData from "./print_combination";
import { CATEGORY, PAPER_QUALITY, SURFACE, COAT, QUANTITY, FOLD, setCategory } from "../../actions/index";
import Component from "./component";

class Broucher extends React.Component {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.presenter = new OrderPresenter(PrintData);
  }

  getCategories(location) {
    const orderPath = /^\/order[\/]?([a-z]+)[a-z0-9\-]*$/;
    location.pathname.match(orderPath);

    let category = RegExp.$1;

    return { category };
  }

  componentDidMount() {
    let { location, setCategories } = this.props;
    let {category, subCategory} = this.getCategories(location);

    setCategories(category);
  }

  getLabelForFields({ category, size, material, coat, quantity, paper_quality, fold }) {
    let typeLabel = this.presenter.fetchLabelForCategoryAndId(CATEGORY, category);
    let foldLabel = this.presenter.fetchLabelForCategoryAndId(FOLD, fold);
    let coatLabel = this.presenter.fetchLabelForCategoryAndId(COAT, coat);
    let quantityLabel = this.presenter.fetchLabelForCategoryAndId(QUANTITY, quantity);
    let paperQualityLabel = this.presenter.fetchLabelForCategoryAndId(PAPER_QUALITY, paper_quality);

    let labelMap = new Map();
    labelMap.set(FOLD, {label: 'Print Fold', value: foldLabel});
    labelMap.set(PAPER_QUALITY, {label: 'Paper Quality', value: paperQualityLabel});
    labelMap.set(COAT, {label: 'Coating', value: coatLabel});
    labelMap.set(QUANTITY, {label: 'Quantity', value: quantityLabel});

    let isComplete = foldLabel && coatLabel && quantityLabel && paperQualityLabel;

    return {
      category: typeLabel,
      fieldsMap: labelMap,
      isComplete
    }
  }

  render() {
    let { location, paper_quality, fold, coat, quantity, pathname, setType } = this.props;
    let category = this.category || this.getCategories(location).category;

    let coatList = this.presenter.printableDataWithFilter(COAT);
    let foldList = this.presenter.printableDataWithFilter(FOLD);
    let quantityList = this.presenter.printableDataWithFilter(QUANTITY);
    let paperQualityList = this.presenter.printableDataWithFilter(PAPER_QUALITY);

    let fieldsLabel = this.getLabelForFields({ category, paper_quality, coat, fold, quantity });

    return <Component
      foldList={foldList}
      coatList={coatList}
      paperQualityList={paperQualityList}
      quantityList={quantityList}
      fieldsLabel={fieldsLabel} />
  }
}

const mapStateToProps = (orderApp, ownProps) => {
  let { paper_quality, coat, fold, quantity } = orderApp.selectionState;

  return {
    pathname: ownProps.location.pathname,
    paper_quality,
    coat,
    fold,
    quantity
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setCategories: (category) => {
      dispatch(setCategory(category));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Broucher);
