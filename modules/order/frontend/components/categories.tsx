import * as React from "react";
import { Link } from "react-router";

const Categories = ({label}: {label: string}) => {
  return (
    <div className='inner-section main' id='print-type'>
      <h2>{ label }</h2>
      <div>
        <div className='select-elem'><span>Visiting Card</span></div>
        <div className='select-elem'><span>Stationary</span></div>
        <div className='select-elem'><span>Broucher</span></div>
      </div>
    </div>
  );
}

export default Categories;
