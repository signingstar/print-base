import React from "react";
import { Link } from "react-router";

import CategoryItem from "../../components/category_item";

const SubCategories = ({label}) => {
  let vcard = <div className='action-box'><Link to="/order/visiting-card" className='select-elem'>Select</Link></div>;
  let vvcard = <div className='action-box'><Link to="/order/visiting-card-vertical" className='select-elem'>Select</Link></div>;

  return (
    <div>
      <CategoryItem label='visiting card' imgSrc="/assets/panel1.jpg" actionArea={vcard}/>
      <CategoryItem label='vertical visiting card' imgSrc="/assets/panel2.jpg"actionArea={vvcard}/>
    </div>
  );
}

export default SubCategories;
