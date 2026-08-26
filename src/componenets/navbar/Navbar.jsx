import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";
import services from "../../data/services"; // adjust path if necessary
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const [openServices, setOpenServices] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <nav>
      <div className="banner">
        <ul>
          <li>+962 123456789</li>
          <HashLink className="a" to="/contact#quote"><li className="cta3">Get Quote</li></HashLink>
        </ul>
      </div>

      <div className="nav">
        {/* LOGO */}
        <Link className="a" to="/">
          <h1 className="logo">
            Seenne<span>Con</span>
          </h1>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <i
          className={`fa-solid ${openMenu ? "fa-xmark" : "fa-bars"} fa-xl icon`}
          onClick={toggleMenu}
        />

        <ul className={openMenu ? "opened" : ""}>
          {/* ================= SERVICES ================= */}
          <li className="dropdown-container">
            <div className="dropdown-title">
              <Link className="a" to="/services">
                Services
              </Link>

              <button
                type="button"
                className="dropdown-arrow"
                onClick={() => setOpenServices((prev) => !prev)}
                aria-label="Toggle Services menu"
                aria-expanded={openServices}
              >
                <i
                  className={`fa-solid ${
                    openServices ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                />
              </button>
            </div>

            <ul className={`dropdown ${openServices ? "opened" : ""}`}>
              {services.map((service) => (
                <li key={service.id}>
                  <Link className="a" to={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link className="a" to="/products">
              Products
            </Link>
          </li>

          {/* ================= OTHER LINKS ================= */}
          <li>
            <Link to="/projects" className="a">
              Projects
            </Link>
          </li>

          <li>
            <Link to="/about" className="a">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="a">
              Contact
            </Link>
          </li>
        </ul>

        {/* SEARCH */}
        <div className={`search ${openMenu ? "opened" : ""}`}>
          <input
            type="search"
            name="search"
            id="searchBox"
            placeholder="Search"
          />

          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
