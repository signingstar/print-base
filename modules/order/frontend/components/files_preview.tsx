import * as React from "react";
import * as Modal from "react-modal";

interface ModalObject {
  onClick: () => void;
  onClose: () => void;
  isShowing: boolean;
  modalHeader: string;
  label: string;
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

const FilesPreview = ({onClick, onClose, isShowing, files, modalHeader, label}: ModalObject) => {
  if(files.length === 0) {
    return null;
  }

  return (
    <div className='file-preview'>
      <a href='javascript:void(0)' onClick={onClick}>{label}</a>
      <Modal
        isOpen={isShowing}
        onRequestClose={onClose}
        style={customStyles}>
        <FilesPreviewContent files={files} modalHeader={modalHeader}/>
      </Modal>
    </div>
  );
}

export default FilesPreview;
