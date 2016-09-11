import React from "react";
import { Link } from "react-router";

import CategoryItem from "./category_item";
import SubCategoriesModal from "../containers/sub_categories_modal";

const Categories = ({label, type}) => {
  let visiting_card = <SubCategoriesModal type='visiting_card' label='Visiting Card'/>;
  let broucher = <Link to='/order/broucher'>Broucher</Link>;
  let stationary = <SubCategoriesModal type='stationary'  label='Stationary'/>;
  let flyers = <SubCategoriesModal type='flyers'  label='Flyers'/>;

  return (
    <div className='main-section-body'>
      <div className='left-panel category'>
        <div className='inner-section main' id='print-type'>
          <h2>{ label }</h2>
          <div>
            <CategoryItem actionArea={visiting_card} imgSrc="/assets/round2.png" categoryClass='category'/>
            <CategoryItem actionArea={stationary} imgSrc="/assets/round1.png"  categoryClass='category' />
            <CategoryItem actionArea={broucher} imgSrc="/assets/round3.png"  categoryClass='category' />
            <CategoryItem actionArea={flyers} imgSrc="/assets/round4.png"  categoryClass='category' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
