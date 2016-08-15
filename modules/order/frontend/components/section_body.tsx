import * as React from "react";

import PrintType from "../containers/types_item_box";
import PrintSize from "../containers/sizes_item_box";
import PrintMaterial from "../containers/material_item_box";
import PrintQuantity from "../containers/quantity_item_box";
import ConfirmationBox from "../containers/confirmation_box";
import DesignFilesBox from "../containers/design_files_box";
import FilesPreviewBox from "../containers/files_preview_box";

const SectionBody = () => {
  return (
    <div className='main-section-body'>
      <div className='left-panel'>
        <PrintType />
        <PrintSize />
        <PrintMaterial />
        <PrintQuantity />
        <div className='inner-section file-upload-preview'>
          <DesignFilesBox />
          <FilesPreviewBox />
        </div>
      </div>
      <div className='right-panel'>
        <ConfirmationBox />
      </div>
    </div>
  );
}

export default SectionBody;
