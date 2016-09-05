import * as React from "react";
import { Link } from "react-router";

const SubCategories = ({label}: {label: string}) => {
  return (
    <div className='inner-section main' id='print-type'>
      <h2>{ label }</h2>
      <div>
        <Link to="/order/broucher-2-fold" className='select-elem'><span>Broucher 2-fold</span></Link>
        <Link to="/order/broucher-3-fold" className='select-elem'><span>Broucher 3-fold</span></Link>
        <Link to="/order/broucher-4-fold" className='select-elem'><span>Broucher 4-fold</span></Link>
      </div>
    </div>
  );
}

export default SubCategories;
