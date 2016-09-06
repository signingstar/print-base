import React from "react";
import { Link } from "react-router";

import CategoryItem from "../../components/category_item";

const SubCategories = ({label}) => {
  let letterHead = <div className='action-box'><Link to="/order/stationary-letterhead" className='select-elem'>Select</Link></div>;
  let envelope = <div className='action-box'><Link to="/order/stationary-envelope" className='select-elem'>Select</Link></div>;
  let notebook = <div className='action-box'><Link to="/order/stationary-notebook" className='select-elem'>Select</Link></div>;

  return (
    <div>
      <CategoryItem label='Letterhead' imgSrc="/assets/panel1.jpg" actionArea={letterHead}/>
      <CategoryItem label='Envelope' imgSrc="/assets/panel2.jpg"actionArea={envelope}/>
      <CategoryItem label='Notebook' imgSrc="/assets/panel3.jpg" actionArea={notebook}/>
    </div>
  );
}

export default SubCategories;
