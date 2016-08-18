import * as React from "react";

interface EnhancedFile extends File {
  preview: string;
}

const FilesPreviewContent = ({files, modalHeader}: {files: EnhancedFile[], modalHeader: string}) => {
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
      <h3>{modalHeader}</h3>
      <div className='files-preview-content'>
        { fileNodes }
      </div>
    </div>
  )
}

export default FilesPreviewContent;
