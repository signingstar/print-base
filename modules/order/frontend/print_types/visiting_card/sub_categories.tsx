import * as React from "react";
import { Link } from "react-router";

const SubCategories = ({label}: {label: string}) => {
  return (
    <div className='inner-section main' id='print-type'>
      <h2>{ label }</h2>
      <div>
        <Link to="/order/visiting-card" className='select-elem'><span>Visiting Card</span></Link>
        <Link to="/order/visiting-card-vertical" className='select-elem'><span>Vertical Visiting Card</span></Link>
      </div>
    </div>
  );
}

export default SubCategories;
