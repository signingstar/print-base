import React from "react";

import ConfirmationButton from "./button";
import FilesPreviewBox from "../containers/files_preview";

const ConfirmationItems = ({fieldsLabel, files, onReset, isComplete, itemNodes}) => {
  const fileNodes = files.map((file) =>
    <li className='file-name' key={file.name}>{file.name}</li>
  );

  return (
    <div className='right-panel-content'>
      <form method='post' action='/checkout'>
        <div className='confirmation-content'>
          <div className='clear'><span onClick={onReset}>clear</span></div>
          <div className='header'><h4>Order Summary </h4></div>
          <ul className='order-summary'>
            {itemNodes}
            <li className='upload-list'>
              <span className='label'>Uploaded Design: </span>
              <span> <FilesPreviewBox /></span>
            </li>
          </ul>
        </div>
        <ConfirmationButton isComplete={isComplete}/>
      </form>
    </div>
  );
}

export default ConfirmationItems;
