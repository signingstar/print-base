import * as React from "react";
import { connect} from "react-redux";

import FilesPreview from "../components/files_preview";

class FilesPreviewBox extends React.Component<any, any>  {
  constructor() {
    super();

    this.state = {
      isShowingModal: false
    }
  }

  handleClick() {
    this.setState({isShowingModal: true});
  }

  handleClose() {
    this.setState({isShowingModal: false});
  }

  render() {
    const {files} = this.props;

    return (
      <FilesPreview onClick={this.handleClick.bind(this)} onClose={this.handleClose.bind(this)} isShowing={this.state.isShowingModal} files={files}/>
    )
  }
}

const mapStateToProps = (printApp: any) => {
  return {
    files: printApp.selectionState.files || []
  }
}


export default connect(
  mapStateToProps
) (FilesPreviewBox);
