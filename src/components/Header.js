import { useEffect, useRef } from "react";
import BurgerMenu from "./BurgerMenu";
import { usePopup } from './PopupContext';

function Header() {
  
  const { openPopup } = usePopup();

  const headerRef = useRef(null); // Using useRef to reference the header

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        headerRef.current.classList.add("scrolled");
      } else {
        headerRef.current.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" ref={headerRef}>
      <div className="row">
        <div className="col-md-6">
          <div className="col1">
            <img className="logo" src="/assets/images/headerImages/logo.png" alt="Logo" />
            <nav className="mobile-hide">
              <a href="#">PRODUCTS</a>
              <a href="#">CATEGORIES</a>
              <a href="#">ABOUT US</a>
            </nav>
          </div>
        </div>
        <div className="col-md-6">
          <div className="col2">
            <p className="call mobile-hide">
              <a href="tel:+917977630557">
                <span>
                  <img className="call-icon pulse-border " src="/assets/images/headerImages/call-icon.webp" alt="Call Icon" />
                </span>
                <span>+91 79 7763 0557</span>
              </a>
            </p>
            <p className="nav-divider1 mobile-hide">+</p>
            <a className="enquire-button mobile-hide" onClick={openPopup} >
              <span>Enquire Now</span>
            </a>
            <p className="nav-divider2 mobile-hide">+</p>
            <div className="menu">
              <BurgerMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
