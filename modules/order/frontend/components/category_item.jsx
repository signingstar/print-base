import React from "react";

const CategoryItem = ({label, imgSrc, categoryClass}) => {
  return (
    <div className={categoryClass}>
      <figure className="multi-row">
        <div className="item-tile">
          <div className="item-image"><img src={imgSrc}/></div>
          <figcaption>
            <div className="item-action">
              <div className='action-box'>
                {label}
              </div>
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default CategoryItem;
