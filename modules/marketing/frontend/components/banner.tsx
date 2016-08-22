import * as React from "react";

const Banner = () => {
  return (
    <div>
      <header>
        <div id="visiting-cards-heading" className="heading">
          <h3>Invitation Card heading</h3>
        </div>
      </header>
      <section>
        <div id="visiting-cards-content" className="contents">
          <figure className="multi-row">
            <div className="item-tile">
              <div className="item-image"><img src="/assets/panel1.jpg"/></div>
              <figcaption>
                <div className="item-description">
                  <div className="item-text">
                    <h2> 2-Fold Broucher</h2>
                    <p>A single sheet printed on both sides and folded into halves</p>
                  </div>
                  <div className="item-action">
                    <div className="button-style"><a href="/order?mode=services&amp;item=brouchers">Place order</a></div>
                  </div>
                </div>
              </figcaption>
            </div>
          </figure>
          <figure className="multi-row">
            <div className="item-tile">
              <div className="item-image"><img src="/assets/panel2.jpg"/></div>
              <figcaption>
                <div className="item-description">
                  <div className="item-text">
                    <h2>3-Fold Broucher</h2>
                    <p>A single sheet printed on both sides and folded into thirds</p>
                  </div>
                  <div className="item-action">
                    <div className="button-style"><a href="/order?mode=services&amp;item=brouchers">Place order</a></div>
                  </div>
                </div>
              </figcaption>
            </div>
          </figure>
          <figure className="multi-row">
            <div className="item-tile">
              <div className="item-image"><img src="/assets/panel3.jpg"/></div>
              <figcaption>
                <div className="item-description">
                  <div className="item-text">
                    <h2>4-Fold Broucher</h2>
                    <p>A single sheet printed on both sides and folded into fourths</p>
                  </div>
                  <div className="item-action">
                    <div className="button-style"><a href="/order?mode=services&amp;item=brouchers">Place order</a></div>
                  </div>
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>
    </div>
  );
}

export default Banner;
