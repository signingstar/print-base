import { connect } from "react-redux";

import OptionButton from "../components/option_button";
import { selectType } from "../actions";

interface OwnProps {
  id: string;
  label: string;
  selected: boolean;
}

const mapStateToProps = (state: any, ownProps: OwnProps) => {
  let {id, label, selected} = ownProps;
  return {
    state: {id, label, selected}
  }
}

const mapDispatchToProps = (dispatch: (e:any)=>()=>void, ownProps: any) => {
  return {
    onClick: () => {
      dispatch(ownProps.onClick(ownProps.id))
    }
  }
}

const OptionBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionButton)

export default OptionBox;
