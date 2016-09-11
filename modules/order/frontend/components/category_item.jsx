import React from "react";
import Dropdown from "react-dropdown";

const CategoryItem = ({label, actionArea, placeholder, imgSrc, categoryClass}) => {
  return (
    <div className={categoryClass + ' item-box'}>
      <figure className="multi-row">
        <div className="item-tile">
          <div className="item-image"><img src={imgSrc}/></div>
          <figcaption>
            <div className="item-action">
              <div className='action-box'>
                {actionArea}
              </div>
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default CategoryItem;
