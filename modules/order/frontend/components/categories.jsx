import React from "react";
import { Link } from "react-router";

import CategoryItem from "./category_item";
import SubCategoriesModal from "../containers/sub_categories_modal";

const Categories = ({label, type}) => {
  let visiting_card = <SubCategoriesModal type='visiting_card' />;
  let broucher = <SubCategoriesModal type='broucher' />;
  let stationary = <SubCategoriesModal type='stationary' />;

  return (
    <div className='main-section-body'>
      <div className='left-panel category'>
        <div className='inner-section main' id='print-type'>
          <h2>{ label }</h2>
          <div>
            <div className='select-elem'>
              <CategoryItem label='Visiting Card' actionArea={visiting_card} imgSrc="/assets/panel1.jpg" />
            </div>
            <div className='select-elem'>
              <CategoryItem label='Stationary' actionArea={stationary} imgSrc="/assets/panel2.jpg"  />
            </div>
            <div className='select-elem'>
              <CategoryItem label='Broucher' actionArea={broucher} imgSrc="/assets/panel3.jpg"  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
