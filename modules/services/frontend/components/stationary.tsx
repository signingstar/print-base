import * as React from "react";

const Stationary = () => {
  return (
    <div>
      <header>
        <div id="stationary-heading" className="heading">
          <h1>Stationaries</h1>
        </div>
      </header>
      <section>
        <div id="stationary-content" className="contents">
          <figure className="single-row">
            <div className="item-tile">
              <div className="item-image"><img src="/assets/panel1.jpg"/></div>
              <figcaption>
                <div className="item-description">
                  <div className="item-text">
                    <h2> Letterhead</h2>
                    <p>A letterhead is the heading at the top of a sheet of letter paper. That heading usually consists of a name and an address, and a logo or corporate design, and sometimes a background pattern.</p>
                    <p>Letterheads are generally printed by either the offset or letterpress methods. Generallly, company letterheads are printed A4 in size (210 mm x 297 mm)</p>
                  </div>
                  <div className="item-action">
                    <div className="button-style"><a href="/order/stationary-letterhead">Place order</a></div>
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
                    <h2> Envelops</h2>
                    <p>An envelope is a common packaging item, usually made of thin flat material. It is designed to contain a flat object, such as a letter or card.</p>
                    <p>Traditional envelopes are made from sheets of paper cut to one of three shapes: a rhombus, a short-arm cross, or a kite. These shapes allow for the creation of the envelope structure by folding the sheet sides around a central rectangular area. In this manner, a rectangle-faced enclosure is formed with an arrangement of four flaps on the reverse side</p>
                  </div>
                  <div className="item-action">
                    <div className="button-style"><a href="/order/stationary-envelope">Place order</a></div>
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
                    <h2> Notebooks</h2>
                    <p>A notebook (notepad, writing pad, drawing pad, legal pad) is a small book or binder of paper pages, often ruled, used for purposes such as recording notes or memoranda, writing, drawing, or scrapbooking</p>
                    <p>Notebook pages can be recycled via standard paper recycling. Recycled notebooks are available, differing in recycled percentage and paper quality.</p>
                  </div>
                  <div className="item-action">
                    <div className="button-style"><a href="/order/stationary-notebook">Place order</a></div>
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

export default Stationary;
