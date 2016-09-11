import React from "react";
import { Link } from "react-router";

import CategoryItem from "../../components/category_item";

const SubCategories = ({label}) => {
  let vcard = <Link to="/order/visitingcard" className='select-elem'>Landscape</Link>;
  let vvcard = <Link to="/order/visitingcard?alignment=vertical" className='select-elem'>Portrait</Link>;

  return (
    <div>
      <CategoryItem label='visiting card' imgSrc="/assets/round2.png" actionArea={vcard}/>
      <CategoryItem label='vertical visiting card' imgSrc="/assets/portrait_visiting.png" actionArea={vvcard}/>
    </div>
  );
}

export default SubCategories;
