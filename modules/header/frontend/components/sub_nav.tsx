import * as React from "react";

const SubNav = ({topOption}: {topOption: any}) => {
  if(!topOption || !topOption.display) {
    return null;
  }

  // console.log(`topConfig:${JSON.stringify(topOption)}`);

  let {id, url, anchorId, displayText} = topOption;
  let has_children = topOption.subElements.length > 0;
  let ariaOwns = has_children ? anchorId + '-nav' : '';
  let arrowElement = has_children? '<div className="icon-down-arrow menu-pointer" />' : '';

  return (
    <li id={id} >
      <a
        className='top-nav-link'
        href={url}
        id={anchorId}
        role= 'menuitem'
        aria-owns={ariaOwns}>
        {displayText}
        </a>
    </li>
  );
}

export default SubNav;
