import React from "react";

import SingleRowTile from "./single_row_tiles";

const Flyers = ({mainHeading, innerHeading, images, innerContent, deeplinks}) => {
  let linkLabel = 'Place Order';
  return (
    <div>
      <header>
        <div className="heading">
          <h1>{mainHeading}</h1>
        </div>
      </header>
      <section>
        <div id="banner-content" className="contents">
          <SingleRowTile
            innerHeading={innerHeading[0]}
            imageSrc={images[0]}
            deeplink={deeplinks[0]}
            innerContent={innerContent[0]}
            linkLabel={linkLabel}
          />
          <SingleRowTile
            innerHeading={innerHeading[1]}
            imageSrc={images[1]}
            deeplink={deeplinks[1]}
            innerContent={innerContent[1]}
            linkLabel={linkLabel}
          />
          <SingleRowTile
            innerHeading={innerHeading[2]}
            imageSrc={images[2]}
            deeplink={deeplinks[2]}
            innerContent={innerContent[2]}
            linkLabel={linkLabel}
          />
        </div>
      </section>
    </div>
  );
}

export default Flyers;
