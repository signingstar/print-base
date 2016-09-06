import React from "react";
import { Link } from "react-router";

const SubCategories = ({label}) => {
  return (
    <div className='inner-section main' id='print-type'>
      <h3>{ label }</h3>
      <div>
        <Link to="/order/stationary-letterhead" className='select-elem'><span>Letterhead</span></Link>
        <Link to="/order/stationary-envelope" className='select-elem'><span>Envelope</span></Link>
        <Link to="/order/stationary-notebook" className='select-elem'><span>Notebook</span></Link>
      </div>
    </div>
  );
}

export default SubCategories;
