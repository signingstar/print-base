import * as React from "react";

const FilesPreviewContent = ({files}: {files: File[]}) => {
  const fileNodes = files.map(file => {
    return (
      <div key={file.name} className='card-box'>
        <div><img src={file.preview}/></div>
        <figcaption><div className='file-caption'>{file.name}</div></figcaption>
      </div>
    )
  });

  return (
    <div className='files-preview-modal'>
      <h3>Uploading {files.length} files...</h3>
      <div className='files-preview-content'>
        { fileNodes }
      </div>
    </div>
  )
}

export default FilesPreviewContent;
