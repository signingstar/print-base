import React from "react";
import { connect } from "react-redux";

import Stationary from "./main";
import PrintSize from "../../filters/size";
import PrintMaterial from "../../filters/material";
import CoatingBox from "../../filters/coat";
import PrintQuantity from "../../filters/quantity";
import DesignFilesBox from "../../containers/design_files";

import Confirmation from "../../../confirmation/containers/main";
import DefaultCategory from "../../components/default_category";
import { CATEGORY, SIZE, SURFACE, COAT, QUANTITY } from "../../actions/index";

class Envelope extends Stationary {
  constructor() {
    super();
  }

  render() {
    let { category, size, material, coat, quantity, pathname } = this.props;

    let {sizeList, materialList, coatList, quantityList} = this.getFilterList(this.props);
    let fieldsLabel = this.getLabelForFields({ category, size, material, coat, quantity });

    return (
      <div className='main-section-body'>
        <div className='left-panel'>
          <DefaultCategory category={fieldsLabel.category} />
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
    category: orderApp.categoryState.category,
    size: orderApp.selectionState.size,
    material: orderApp.selectionState.material,
    coat: orderApp.selectionState.coat,
    quantity: orderApp.selectionState.quantity,
    pathname: ownProps.location.pathname
  }
}

export default connect(mapStateToProps)(Envelope);
