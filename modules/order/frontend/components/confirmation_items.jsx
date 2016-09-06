import React from "react";

import ConfirmationButton from "./checkout_button";
import FilesPreviewBox from "../containers/files_preview";

class ConfirmationItems extends React.Component {
  constructor() {
    super();
    this.hasDisplayed = false;
  }

  render() {
    let { fieldsLabel, files, onReset, isComplete } = this.props;

    let { type, size, material, coat, quantity } = fieldsLabel;
    if(!type && !this.hasDisplayed) return null;

    this.hasDisplayed = true;

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
              <span className='label'>Print Type: </span>
              <span>{type}</span>
            </li>
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
}

export default ConfirmationItems;
