import React from "react";

import PrintSize from "../../filters/size";
import PrintMaterial from "../../filters/material";
import CoatingBox from "../../filters/coat";
import PrintQuantity from "../../filters/quantity";
import DesignFilesBox from "../../containers/design_files";
import Confirmation from "../../../confirmation/containers/main";
import DefaultCategory from "../../components/default_category";

const LetterHead = ({filterList, fieldsLabel}) => {
  let { sizeList, materialList, coatList, quantityList } = filterList;

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

export default LetterHead;
