import * as React from "react";

import CheckoutButton from "./checkout_button";
import { StateObject } from "../data_types/data_format";
import FilesPreviewBox from "../containers/files_preview_box";

class ConfirmationItems extends React.Component<any, {}> {
  hasDisplayed: boolean = false;

  render() {
    let { type, size, material, coat, quantity, files, onReset } = this.props;

    if(!type && !this.hasDisplayed) return null;

    this.hasDisplayed = true;

    const fileNodes = files.map((file: File) =>
      <li className='file-name' key={file.name}>{file.name}</li>
    );

    return (
      <div className='right-panel-content'>
        <div className='confirmation-content'>
        <div className='clear'><span onClick={onReset}>clear</span></div>
          <div className='header'><h4>Order Summary </h4></div>
          <ul className='order-summary'>
            <li><span className='label'>Print Type: </span><span>{type}</span></li>
            <li><span className='label'>Print Size: </span><span>{size}</span></li>
            <li><span className='label'>Print Material: </span><span>{material}</span></li>
            <li><span className='label'>Coating Type: </span><span>{coat}</span></li>
            <li><span className='label'>Print Quantity: </span><span>{quantity}</span></li>

            <li className='upload-list'><span className='label'>Uploaded Design: </span><span> <FilesPreviewBox /></span></li>
          </ul>
          <div className='estimates'><h5>Estimated Price:</h5></div>
        </div>
        <CheckoutButton />
      </div>
    );
  }
}

export default ConfirmationItems;
