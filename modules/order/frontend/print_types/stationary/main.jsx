import React from "react";
import { connect } from "react-redux";

import OrderPresenter from "../../presenter";
import PrintData from "./print_combination";

import { CATEGORY, SIZE, SURFACE, COAT, QUANTITY } from "../../actions/index";

class Stationary extends React.Component {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.presenter = new OrderPresenter(PrintData);
  }

  getLabelForFields({ category, size, material, coat, quantity }) {
    let typeLabel = this.presenter.fetchLabelForCategoryAndId(CATEGORY, category);
    let sizeLabel = this.presenter.fetchLabelForCategoryAndId(SIZE, size);
    let materialLabel = this.presenter.fetchLabelForCategoryAndId(SURFACE, material);
    let coatLabel = this.presenter.fetchLabelForCategoryAndId(COAT, coat);
    let quantityLabel = this.presenter.fetchLabelForCategoryAndId(QUANTITY, quantity);

    let labelMap = new Map();
    labelMap.set('size', {label: 'Print Size', value: sizeLabel});
    labelMap.set('material', {label: 'Paper Material', value: materialLabel});
    labelMap.set('coat', {label: 'Coating', value: coatLabel});
    labelMap.set('quantity', {label: 'Quantity', value: quantityLabel});

    let isComplete = sizeLabel && coatLabel && materialLabel && quantityLabel;

    return {
      category: typeLabel,
      fieldsMap: labelMap,
      isComplete
    }
  }

  getFilterList({ category, size, material, coat, quantity }) {
    console.log(`category:${category}`);
    let sizeList = this.presenter.printableDataWithFilter(SIZE, {category});
    console.log(`sizeList:${JSON.stringify(sizeList)}`);
    let materialList = this.presenter.printableDataWithFilter(SURFACE, {category, size});
    let coatList = this.presenter.printableDataWithFilter(COAT, {category, size, material});
    let quantityList = this.presenter.printableDataWithFilter(QUANTITY, {category, size, material});

    return {sizeList, materialList, coatList, quantityList};
  }

  render() {
    return (
      <h1>Override me</h1>
    );
  }
}

export default Stationary;
