import React from "react";
import { Link } from "react-router";

import CategoryItem from "../../components/category_item";

const SubCategories = ({label}) => {
  let letterHead = <div className='action-box'><Link to="/order/flyers-short" className='select-elem'>Short</Link></div>;
  let envelope = <div className='action-box'><Link to="/order/flyers-medium" className='select-elem'>Medium</Link></div>;
  let notebook = <div className='action-box'><Link to="/order/flyers-large" className='select-elem'>Large</Link></div>;

  return (
    <div>
      <CategoryItem imgSrc="/assets/round1.png" actionArea={letterHead}/>
      <CategoryItem imgSrc="/assets/round2.png"actionArea={envelope}/>
      <CategoryItem imgSrc="/assets/round3.png" actionArea={notebook}/>
    </div>
  );
}

export default SubCategories;
