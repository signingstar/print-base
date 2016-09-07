import React from "react";
import { connect } from "react-redux";

import OrderPresenter from "../../presenter";
import PrintSize from "../../filters/size";
import PrintMaterial from "../../filters/material";
import PrintData from "./print_combination";
import CoatingBox from "../../filters/coat";
import PrintQuantity from "../../filters/quantity";
import DesignFilesBox from "../../containers/design_files";

import Confirmation from "../../../confirmation/containers/main";
import DefaultCategory from "../../components/default_category";

import { TYPE_CATEGORY, TYPE_SIZE, TYPE_SURFACE, TYPE_COAT, TYPE_QUANTITY } from "../../actions";

class Stationary extends React.Component {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.presenter = new OrderPresenter(PrintData);
  }

  getLabelForFields({ type, size, material, coat, quantity }) {
    let typeLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_CATEGORY, type);
    let sizeLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_SIZE, size);
    let materialLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_SURFACE, material);
    let coatLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_COAT, coat);
    let quantityLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_QUANTITY, quantity);

    let labelMap = new Map();
    labelMap.set('size', {label: 'Print Size', value: sizeLabel});
    labelMap.set('material', {label: 'Paper Material', value: materialLabel});
    labelMap.set('coat', {label: 'Coating', value: coatLabel});
    labelMap.set('quantity', {label: 'Quantity', value: quantityLabel});

    let isComplete = sizeLabel && coatLabel && materialLabel && quantityLabel;

    return {
      type: typeLabel,
      map: labelMap,
      isComplete
    }
  }

  render() {
    let { type, size, material, coat, quantity, pathname } = this.props;

    pathname.match(/^\/order\/stationary\-([a-z]+)$/);
    pathname = RegExp.$1;

    type = type || pathname;

    let sizeList = this.presenter.printableDataWithFilter(TYPE_SIZE, {type});
    let materialList = this.presenter.printableDataWithFilter(TYPE_SURFACE, {type, size});
    let coatList = this.presenter.printableDataWithFilter(TYPE_COAT, {type, size, material});
    let quantityList = this.presenter.printableDataWithFilter(TYPE_QUANTITY, {type, size, material});

    let fieldsLabel = this.getLabelForFields({ type, size, material, coat, quantity });

    return (
      <div className='main-section-body'>
        <div className='left-panel'>
          <DefaultCategory type={fieldsLabel.type} />
          <PrintSize sizeList={sizeList} />
          <PrintMaterial materialList={materialList} />
          <CoatingBox coatList={coatList} />
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
  return {
    type: orderApp.typeState.type,
    size: orderApp.selectionState.size,
    material: orderApp.selectionState.material,
    coat: orderApp.selectionState.coat,
    quantity: orderApp.selectionState.quantity,
    pathname: ownProps.location.pathname
  }
}


export default connect(
  mapStateToProps
)(Stationary);