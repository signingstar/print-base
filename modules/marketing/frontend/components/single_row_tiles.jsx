import React from "react"

const SingleRowTile = ({imageSrc, innerHeading, innerContent, deeplink, linkLabel}) => {
  return (
    <figure className="single-row">
      <div className="item-tile">
        <div className="item-image"><img src={imageSrc}/></div>
        <figcaption>
          <div className="item-description">
            <div className="item-text">
              <h2>{innerHeading}</h2>
              <p>{innerContent.line1}</p>
              <p>{innerContent.line2}</p>
            </div>
            <div className="item-action">
              <div className="button-style"><a href={deeplink}>{linkLabel}</a></div>
            </div>
          </div>
        </figcaption>
      </div>
    </figure>
  )
}

export default SingleRowTile
