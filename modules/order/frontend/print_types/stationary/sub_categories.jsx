import React from "react";
import { Link } from "react-router";

import CategoryItem from "../../components/category_item";

const SubCategories = ({label}) => {
  let letterHead = <Link to="/order/letterhead" className='select-elem'>LetterHead</Link>;
  let envelope = <Link to="/order/envelope" className='select-elem'>Envelope</Link>;
  let notebook = <Link to="/order/notebook" className='select-elem'>Notebook</Link>;

  return (
    <div>
      <CategoryItem imgSrc="/assets/letterhead.png" actionArea={letterHead} categoryClass='sub-category' />
      <CategoryItem imgSrc="/assets/envelope.jpg" actionArea={envelope} categoryClass='sub-category' />
      <CategoryItem imgSrc="/assets/notepad.jpg" actionArea={notebook} categoryClass='sub-category' />
    </div>
  );
}

export default SubCategories;
