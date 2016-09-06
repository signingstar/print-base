import React from "react";
import { Link } from "react-router";

import CategoryItem from "./category_item";
import SubCategoriesModal from "../containers/sub_categories_modal";

const Categories = ({label, type}) => {
  let subCategoryNode = <SubCategoriesModal type={type} />;

  return (
    <div className='inner-section main' id='print-type'>
      <h2>{ label }</h2>
      <div>
        <div className='select-elem'>
          <CategoryItem label='Visiting Card' actionArea={subCategoryNode} imgSrc="/assets/panel1.jpg" />
        </div>
        <div className='select-elem'>
          <CategoryItem label='Stationary' actionArea={subCategoryNode} imgSrc="/assets/panel2.jpg"  />
        </div>
        <div className='select-elem'>
          <CategoryItem label='Broucher' actionArea={subCategoryNode} imgSrc="/assets/panel3.jpg"  />
        </div>
      </div>
    </div>
  );
}

export default Categories;
