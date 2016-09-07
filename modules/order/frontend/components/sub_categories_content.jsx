import React from "react";
import { Link } from "react-router";

import StationarySubCategories from "../print_types/stationary/sub_categories";
import VisitingCardSubCategories from "../print_types/visiting_card/sub_categories";
import BroucherSubCategories from "../print_types/broucher/sub_categories";
import FlyersSubCategories from "../print_types/flyers/sub_categories";

const SubCategoriesContent = ({label, type}) => {
  let placeholder = 'Select Item';
  let modalContent;

  if(type === 'broucher') {
    modalContent = <BroucherSubCategories label={label} />
  } else if(type === 'visiting_card') {
    modalContent = <VisitingCardSubCategories label={label} />
  } else if(type === 'stationary') {
    modalContent = <StationarySubCategories label={label} />
  } else if(type === 'flyers') {
    modalContent = <FlyersSubCategories label={label} />
  }

  return <div className='category-modal'>{modalContent}</div>;
}

export default SubCategoriesContent;