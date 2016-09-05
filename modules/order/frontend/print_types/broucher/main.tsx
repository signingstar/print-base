import * as React from "react";
import { connect } from "react-redux";

import OrderPresenter from "../../new_presenter";
import PaperQuality from "../../filters/paper_quality";
import PrintMaterial from "../../filters/material";
import PrintData from "./print_combination";
import CoatingBox from "../../filters/coat";
import PrintQuantity from "../../filters/quantity";
import Fold from "../../filters/fold";
import DesignFilesBox from "../../containers/design_files";

import Confirmation from "../../containers/confirmation";
import DefaultCategory from "../../components/default_category";

import { TYPE_CATEGORY, TYPE_PAPER_QUALITY, TYPE_SURFACE, TYPE_COAT, TYPE_QUANTITY, TYPE_FOLD } from "../../actions";

interface Labels {
  type?: string;
  size?: string;
  quantity?: string;
  material?: string;
  coat?: string;
  paper_quality?: string;
  fold?: string;
}

class Broucher extends React.Component<any, any> {
  presenter: any;

  constructor() {
    super();
    this.init();
  }

  init() {
    this.presenter = new OrderPresenter(PrintData);
  }

  getLabelForFields({ type, size, material, coat, quantity, paper_quality, fold }: Labels) {
    let typeLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_CATEGORY, type);
    let foldLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_FOLD, fold);
    let coatLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_COAT, coat);
    let quantityLabel = this.presenter.fetchLabelForCategoryAndId(TYPE_QUANTITY, quantity);

    return {
      type: typeLabel,
      coat: coatLabel,
      fold: foldLabel,
      quantity: quantityLabel
    }
  }

  render() {
    let { type, size, paper_quality, coat, quantity, pathname } = this.props;

    pathname.match(/^\/order\/broucher\-([0-9a-z\-]+)$/);
    pathname = RegExp.$1;

    type = type || pathname;

    let coatList = this.presenter.printableDataWithFilter(TYPE_COAT, {type});
    let foldList = this.presenter.printableDataWithFilter(TYPE_FOLD, {type});
    let quantityList = this.presenter.printableDataWithFilter(TYPE_QUANTITY, {type});
    let paperQualityList = this.presenter.printableDataWithFilter(TYPE_PAPER_QUALITY, {type});

    let fieldsLabel = this.getLabelForFields({ type, paper_quality, coat, quantity });

    return (
      <div className='main-section-body'>
        <div className='left-panel'>
          <DefaultCategory type={fieldsLabel.type} />
          <CoatingBox coatList={coatList} type={type} />
          <Fold foldList={foldList} type={type} />
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

const mapStateToProps = (orderApp: any, ownProps: any) => {
  return {
    type: orderApp.typeState.type,
    paper_quality: orderApp.selectionState.paper_quality,
    coat: orderApp.selectionState.coat,
    pathname: ownProps.location.pathname
  }
}

export default connect(
  mapStateToProps
)(Broucher);
