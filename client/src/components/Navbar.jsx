import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { RiShoppingCartLine, RiMenuLine, RiCloseLine } from "@remixicon/react";
import "../styles/Navbar.css";
// import "../styles/hero.css"; // reuse existing styles

const navLinks = [
  { label: "Home", type: "route", to: "/" },
  { label: "Collections", type: "route", to: "/collections" },
  { label: "Products", type: "route", to: "/products" },
  { label: "About", type: "route", to: "/about" },
  { label: "Contact", type: "section", to: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (e, id) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToId: id } });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="hero-navbar">
      <div className="hero-logo">NOIRÉ</div>

      {/* Desktop Nav */}
      <div className="hero-nav-center desktop">
        <ul className="hero-nav-list">
          {navLinks.map(({ label, type, to }) => (
            <li key={to}>
              {type === "route" ? (
                <Link to={to} className="hero-nav-link">{label}</Link>
              ) : (
                <a
                  href={`#${to}`}
                  className="hero-nav-link"
                  onClick={(e) => handleSectionClick(e, to)}
                >
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Toggle */}
      <div
        className="mobile-menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setMenuOpen(!menuOpen);
        }}
      >
        {menuOpen ? <RiCloseLine /> : <RiMenuLine />}
      </div>

      <div className="hero-cart">
        <Link to="/cart" className="cart-icon-link">
          <RiShoppingCartLine className="cart-icon" />
        </Link>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="mobile-gooey-nav" onClick={() => setMenuOpen(false)}>
          <ul className="mobile-nav-list">
            {navLinks.map(({ label, type, to }) => (
              <li key={to}>
                {type === "route" ? (
                  <Link to={to} className="hero-nav-link">{label}</Link>
                ) : (
                  <a
                    href={`#${to}`}
                    className="hero-nav-link"
                    onClick={(e) => handleSectionClick(e, to)}
                  >
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
