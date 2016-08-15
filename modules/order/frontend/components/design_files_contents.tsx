import * as React from "react";
import * as Dropzone from "react-dropzone";

// import FilesPreview from "./file_preview";
interface PropTypes {
  onDrop: (files: File[]) => void;
  label: string;
  files: File[];
  placeholder: string;
}

const DesignFiles = ({label, files, placeholder, onDrop}: PropTypes) => {
    return (
      <div className='file-upload'>
        <label>Upload your Design</label>
        <Dropzone className='upload-box' onDrop={onDrop} activeClassName='active' rejectClassName='reject'>
          <div className='upload-content'><div>Drop your file here, or click anywhere in this box to select files to upload.</div></div>
        </Dropzone>
      </div>
    );
}

export default DesignFiles;
