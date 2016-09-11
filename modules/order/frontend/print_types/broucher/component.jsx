import React from "react";

import Fold from "../../filters/fold";
import PaperQuality from "../../filters/paper_quality";
import CoatingBox from "../../filters/coat";
import PrintQuantity from "../../filters/quantity";
import DesignFilesBox from "../../containers/design_files";
import Confirmation from "../../../confirmation/containers/main";
import DefaultCategory from "../../components/default_category";

const Broucher = ({ foldList, coatList, paperQualityList, quantityList, fieldsLabel }) => {
  return (
        <div className='main-section-body'>
          <div className='left-panel'>
            <DefaultCategory category={fieldsLabel.category} />
            <Fold foldList={foldList} />
            <PaperQuality paperQualityList={paperQualityList} />
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

export default Broucher;
