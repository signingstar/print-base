import React from "react";
import { Link } from "react-router";

import CategoryItem from "../../components/category_item";

const SubCategories = ({label}) => {
  let vcard = <div className='action-box'><Link to="/order/visiting-card" className='select-elem'>Regular</Link></div>;
  let vvcard = <div className='action-box'><Link to="/order/visiting-card-vertical" className='select-elem'>Portrait</Link></div>;

  return (
    <div>
      <CategoryItem label='visiting card' imgSrc="/assets/round1.png" actionArea={vcard}/>
      <CategoryItem label='vertical visiting card' imgSrc="/assets/round2.png"actionArea={vvcard}/>
    </div>
  );
}

export default SubCategories;
