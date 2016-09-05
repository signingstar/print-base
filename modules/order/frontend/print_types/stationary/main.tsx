import * as React from "react";
import { connect } from "react-redux";

import OrderPresenter from "../../presenter";
import PrintSize from "../../filters/size";
import PrintMaterial from "../../filters/material";
import PrintData from "./print_combination";
import CoatingBox from "../../filters/coat";
import PrintQuantity from "../../filters/quantity";
import DesignFilesBox from "../../containers/design_files";

import Confirmation from "../../containers/confirmation";
import DefaultCategory from "../../components/default_category";

import { TYPE_CATEGORY, TYPE_SIZE, TYPE_SURFACE, TYPE_COAT, TYPE_QUANTITY } from "../../actions";

interface Labels {
  type?: string;
  size?: string;
  quantity?: string;
  material?: string;
  coat?: string;
}

class Stationary extends React.Component<any, any> {
  presenter: any;

  constructor() {
    super();
    this.init();
  }

  init() {
    this.presenter = new OrderPresenter(PrintData);
  }

  getLabelForFields({ type, size, material, coat, quantity }: Labels) {
    let typeLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_CATEGORY, type);
    let sizeLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_SIZE, size);
    let materialLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_SURFACE, material);
    let coatLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_COAT, coat);
    let quantityLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_QUANTITY, quantity);

    return {
      type: typeLabel,
      size: sizeLabel,
      material: materialLabel,
      coat: coatLabel,
      quantity: quantityLabel
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
          <PrintSize sizeList={sizeList} type={type} />
          <PrintMaterial materialList={materialList} type={type} />
          <CoatingBox coatList={coatList} type={type} />
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

const mapStateToProps = (orderApp: any, ownProps: any) => {
  return {
    type: orderApp.typeState.type,
    size: orderApp.selectionState.size,
    material: orderApp.selectionState.material,
    coat: orderApp.selectionState.coat,
    pathname: ownProps.location.pathname
  }
}


export default connect(
  mapStateToProps
)(Stationary);
