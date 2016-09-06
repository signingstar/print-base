import React from "react";
import { Link } from "react-router";

import StationarySubCategories from "../print_types/stationary/sub_categories";

const SubCategories = ({label}) => {

  return (
    <StationarySubCategories label={label} />
  );
}

export default SubCategories;
