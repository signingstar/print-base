import React from "react";
import Dropzone from "react-dropzone";

const DesignFiles = ({label, files, placeholder, onDrop, accept}) => {
    return (
      <div className='inner-section file-upload-preview'>
        <div className='file-upload'>
          <label>{label}</label>
          <Dropzone className='upload-box' onDrop={onDrop} activeClassName='active' rejectClassName='reject' accept={accept}>
            <div className='upload-content'><div>Drop your file here, or click anywhere in this box to select files to upload.</div></div>
          </Dropzone>
        </div>
      </div>
    );
}

export default DesignFiles;
