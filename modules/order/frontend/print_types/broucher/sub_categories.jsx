import React from "react";
import { Link } from "react-router";

import CategoryItem from "../../components/category_item";

const SubCategories = ({label}) => {
  let fold1 = <div className='action-box'><Link to="/order/broucher-2-fold" className='select-elem'>2-fold</Link></div>;
  let fold2 = <div className='action-box'><Link to="/order/broucher-3-fold" className='select-elem'>3-fold</Link></div>;
  let fold3 = <div className='action-box'><Link to="/order/broucher-4-fold" className='select-elem'>4-fold</Link></div>;

  return (
    <div>
      <CategoryItem label='2-Fold' imgSrc="/assets/round1.png" actionArea={fold1}/>
      <CategoryItem label='3-Fold' imgSrc="/assets/round2.png"actionArea={fold2}/>
      <CategoryItem label='4-Fold' imgSrc="/assets/round3.png" actionArea={fold3}/>
    </div>
  );
}

export default SubCategories;
