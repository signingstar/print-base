import React from "react";
import { Link } from "react-router";

import CategoryItem from "../../components/category_item";

const SubCategories = ({label}) => {
  let letterHead = <Link to="/order/flyers-short" className='select-elem'>Short</Link>;
  let envelope = <Link to="/order/flyers-medium" className='select-elem'>Medium</Link>;
  let notebook = <Link to="/order/flyers-large" className='select-elem'>Large</Link>;

  return (
    <div>
      <CategoryItem imgSrc="/assets/round1.png" actionArea={letterHead}/>
      <CategoryItem imgSrc="/assets/round2.png"actionArea={envelope}/>
      <CategoryItem imgSrc="/assets/round3.png" actionArea={notebook}/>
    </div>
  );
}

export default SubCategories;
