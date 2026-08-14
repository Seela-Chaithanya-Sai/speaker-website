import { Link } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/services", label: "Services" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>ALEX SPEAKS</Link>
      </div>

      <button
        type="button"
        className={`nav-toggle ${isMenuOpen ? "is-open" : ""}`}
        onClick={() => setIsMenuOpen((open) => !open)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-links ${isMenuOpen ? "is-open" : ""}`}>
        {navItems.map(({ to, label }) => (
          <Link key={to} to={to} onClick={() => setIsMenuOpen(false)}>
            {label}
          </Link>
        ))}
      </div>

      <Link to="/contact" className="nav-button" onClick={() => setIsMenuOpen(false)}>
        Book Me
      </Link>
    </nav>
  );
}

export default Navbar;