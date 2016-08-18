import * as React from "react";

const MainHeader = () => {
  return (
    <div className="main-header">
      <div className="main-header-content">
        <div className="company-info"><a href="/">Tisko Digital Printing</a></div>
        <div className="contact-info"><a href="/contact">Contact Us</a></div>
        <nav className="user-info signed">
          <span id="user-cart" className="user-info-item">
            <a id="cart-nav" href="#"><span>Cart</span></a>
          </span>
          <a id="user-account" href="/account" className="user-info-item">My Account</a>
          <a id="user-signout" href="/signout" className="user-info-item">Logout</a>
        </nav>
      </div>
    </div>
  );
}

export default MainHeader;
