import * as React from "react";
import * as Modal from "react-modal";

interface ModalObject {
  onClick: () => void;
  onClose: () => void;
  isShowing: boolean;
  files: File[];
}

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
import FilesPreviewContent from "./files_preview_contents";

const FilesPreview = ({onClick, onClose, isShowing, files}: ModalObject) => {
  if(files.length === 0) {
    return null;
  }

  return (
    <div className='file-preview'>
      <button onClick={onClick}>Preview</button>
      <Modal
        isOpen={isShowing}
        onRequestClose={onClose}
        style={customStyles}>
        <FilesPreviewContent files={files}/>
      </Modal>
    </div>
  );
}

export default FilesPreview;
