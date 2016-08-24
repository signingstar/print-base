import * as React from "react";

const Banner = () => {
  return (
    <div>
      <header>
        <div className="heading">
          <h1>Banner Printing</h1>
        </div>
      </header>
      <section>
        <div id="banner-content" className="contents">
          <figure className="single-row">
            <div className="item-tile">
              <div className="item-image"><img src="/assets/panel1.jpg"/></div>
              <figcaption>
                <div className="item-description">
                  <div className="item-text">
                    <h2>Multi-purpose banner</h2>
                    <p>Some billboards are not used only for advertising, but can be multi-purpose. </p>
                    <p>So, an advertising sign can integrate its main purpose with telecommunications antenna and/or public lighting support. Usually the structure has a steel pole with a coupling flange on the above-fitted advertising billboard structure that can contain telecommunications antennas. The lighting power wiring and any antennas are placed inside the structure.</p>
                  </div>
                  <div className="item-action">
                    <div className="button-style"><a href="/order?mode=services&item=brouchers">Place order</a></div>
                  </div>
                </div>
              </figcaption>
            </div>
          </figure>
          <figure className="single-row">
            <div className="item-tile">
              <div className="item-image"><img src="/assets/panel2.jpg"/></div>
              <figcaption>
                <div className="item-description">
                  <div className="item-text">
                    <h2>Digital banner</h2>
                    <p>A digital billboard is a billboard that is created from computer programs and software. </p>
                    <p>Digital billboards can be designed to display running text, display several different displays from the same company, and even provide several companies a certain time slot during the day. The constantly changing texts ensure maximum impact and wide exposure to target audiences.</p>
                  </div>
                  <div className="item-action">
                    <div className="button-style"><a href="/order?mode=services&amp;item=brouchers">Place order</a></div>
                  </div>
                </div>
              </figcaption>
            </div>
          </figure>
          <figure className="single-row">
            <div className="item-tile">
              <div className="item-image"><img src="/assets/panel3.jpg"/></div>
              <figcaption>
                <div className="item-description">
                  <div className="item-text">
                    <h2>Mobile banner</h2>
                    <p>Outdoor Advertising, such as a mobile billboard, is effective because it is difficult to ignore</p>
                    <p>Unlike a typical billboard, mobile billboards are able to go directly to their target audience. They can be placed wherever there is heavy foot traffic due to an event - including convention centers, train stations, airports and sports arenas.</p>
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
