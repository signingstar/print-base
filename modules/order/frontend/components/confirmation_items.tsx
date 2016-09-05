import * as React from "react";

import ConfirmationButton from "./checkout_button";
import { StateObject } from "../data_types/data_format";
import FilesPreviewBox from "../containers/files_preview";

class ConfirmationItems extends React.Component<any, {}> {
  hasDisplayed: boolean = false;

  render() {
    let { fieldsLabel, quantity, files, onReset, isComplete } = this.props;

    let { type, size, material, coat } = fieldsLabel;
    if(!type && !this.hasDisplayed) return null;

    this.hasDisplayed = true;

    const fileNodes = files.map((file: File) =>
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
