import * as React from "react";

const Services = () => {
  return (
    <div>
      <header>
        <div id="main-sub-heading" className="heading">
          <h3>Services we offer</h3>
        </div>
      </header>
      <section>
        <div id="sub-heading-content" className="contents">
          <div className="panel-text">
            <p>
              Business card is very important aspect of advertising your business
              Often the "razor and blades" business model is applied.
              That is, a company may sell a printer at cost, and make profits on the ink
              cartridge, paper, or some other replacement part.
            </p>
            <p>
              This has caused legal disputes regarding the right of companies other
              than the printer manufacturer to sell compatible ink cartridges.
              To protect their business model, several manufacturers invest heavily in
              developing new cartridge technology and patenting it.
            </p>
            <p>
              Other manufacturers, in reaction to the challenges from using this
              business model, choose to make more money on printers and less on the ink,
              promoting the latter through their advertising campaigns.
              Finally, this generates two clearly different proposals:
              "cheap printer – expensive ink" or "expensive printer – cheap ink".
            </p>
          </div>
          <div className="panel-images">
            <figure className="panel-blocks">
              <div id="image-1" className="image-tile"></div>
            </figure>
            <figure className="panel-blocks">
              <div id="image-2" className="image-tile"></div>
            </figure>
            <figure className="panel-blocks">
              <div id="image-3" className="image-tile"></div>
            </figure>
          </div>
          <div className="panel-text">
            <p>
              Ultimately, the consumer decision depends on their reference interest
              rate or their time preference. From an economics viewpoint,
              there is a clear trade-off between cost per copy and cost of the printer
            </p>
          </div>
        </div>
      </section>
      <footer>
        <div id="visiting-cards-footer" className="sub-footer"><a href="/order">Place an order</a></div>
      </footer>
    </div>
  );
}

export default Services;
