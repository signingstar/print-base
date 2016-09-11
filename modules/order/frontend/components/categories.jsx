import React from "react";
import { Link } from "react-router";

import CategoryItem from "./category_item";
import SubCategoriesModal from "../containers/sub_categories_modal";

const Categories = ({label, type}) => {
  return (
    <div className='main-section-body'>
      <div className='left-panel category'>
        <div className='inner-section main' id='print-type'>
          <h2>{ label }</h2>
          <div>
            <SubCategoriesModal type='visiting_card' label='Visiting Card' imgSrc='/assets/round2.png' categoryClass='category' />
            <Link to='/order/broucher' className='item-box'><CategoryItem label='Broucher' imgSrc='/assets/round3.png' categoryClass='category' /></Link>
            <SubCategoriesModal type='stationary'  label='Stationary' imgSrc='/assets/round1.png' categoryClass='category' />
            <SubCategoriesModal type='flyers'  label='Flyers' imgSrc='/assets/round4.png' categoryClass='category' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
