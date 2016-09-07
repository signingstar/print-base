import React from "react";
import Dropdown from "react-dropdown";

const CategoryItem = ({label, actionArea, placeholder, imgSrc}) => {
  return (
    <figure className="multi-row">
      <div className="item-tile">
        <div className="item-image"><img src={imgSrc}/></div>
        <figcaption>
          <div className="item-action">
            {actionArea}
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default CategoryItem;
