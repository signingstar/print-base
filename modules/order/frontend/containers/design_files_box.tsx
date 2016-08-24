import * as React from "react";
import { connect } from "react-redux";

import { setFiles } from "../actions";
import DesignFiles from "../components/design_files_contents";
import { CATEGORY_FILES } from "../actions";

class DesignFilesBox extends React.Component<any, any> {

  shouldComponentUpdate(nextProps:any, nextState:any) {
    return nextProps.shouldUpdate;
  }

  render() {
    let { type, files, onDrop } = this.props;
    if(!type) return null;

    const placeholder = 'Drop your files here, or click anywhere in this box to select files to upload';
    const acceptFiles = 'image/jpeg, image/*, .ai';

    return <DesignFiles label='Print Design' placeholder={placeholder} onDrop={onDrop} files={files} accept={acceptFiles} />
  }
}

const mapStateToProps = (orderApp: any) => {
  let { files, updateComponents } = orderApp.selectionState;
  let { type } = orderApp.typeState;

  return {
    type,
    files,
    shouldUpdate: updateComponents.indexOf(CATEGORY_FILES) > -1
  }
}

const mapDispatchToProps = (dispatch: (e:any)=>()=>void, ownProps: any) => {
  return {
    onDrop: (files: File[]) =>
      dispatch(setFiles(files))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DesignFilesBox);
