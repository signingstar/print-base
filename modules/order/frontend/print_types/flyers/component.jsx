import React from "react";

import DefaultCategory from "../../components/default_category";
import PrintSize from "../../filters/size";
import PrintMaterial from "../../filters/material";
import CoatingBox from "../../filters/coat";
import PrintQuantity from "../../filters/quantity";
import DesignFilesBox from "../../containers/design_files";
import Confirmation from "../../../confirmation/containers/main";

const Flyers = ({ filtersList, fieldsLabel }) => {
  let { sizeList, materialList, coatList, quantityList } = filtersList;

  return(
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

export default Flyers;
