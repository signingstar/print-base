import React from "react";
import { Link } from "react-router";

import CategoryItem from "../../components/category_item";

const SubCategories = ({label}) => {
  let fold1 = <Link to="/order/broucher-2-fold" className='select-elem'><span>Select</span></Link>;
  let fold2 = <Link to="/order/broucher-3-fold" className='select-elem'><span>Select</span></Link>;
  let fold3 = <Link to="/order/broucher-4-fold" className='select-elem'><span>Select</span></Link>;

  return (
    <div>
      <CategoryItem label='2-Fold' imgSrc="/assets/panel1.jpg" actionArea={fold1}/>
      <CategoryItem label='3-Fold' imgSrc="/assets/panel2.jpg"actionArea={fold2}/>
      <CategoryItem label='4-Fold' imgSrc="/assets/panel3.jpg" actionArea={fold3}/>
    </div>
  );
}

export default SubCategories;
