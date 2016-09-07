import React from "react";

import ConfirmationButton from "./checkout_button";
import FilesPreviewBox from "../containers/files_preview";

const ConfirmationItems = ({fieldsLabel, files, onReset, isComplete}) => {
  let { material, coat, size, quantity, paper_quality } = fieldsLabel;

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
          <li>
            <span className='label'>Print Size: </span>
            <span>{size}</span>
          </li>
          <li>
            <span className='label'>Print Material: </span>
            <span>{material}</span>
          </li>
          <li>
            <span className='label'>Coating Type: </span>
            <span>{coat}</span>
          </li>
          <li>
            <span className='label'>Paper Quality: </span>
            <span>{paper_quality}</span>
          </li>
          <li>
            <span className='label'>Print Quantity: </span>
            <span>{quantity}</span>
          </li>
          <li className='upload-list'><span className='label'>Uploaded Design: </span><span> <FilesPreviewBox /></span></li>
        </ul>
        <div className='estimates'><h5>Estimated Price:</h5></div>
      </div>
      <ConfirmationButton isComplete={isComplete}/>
      </form>
    </div>
  );
}

export default ConfirmationItems;
