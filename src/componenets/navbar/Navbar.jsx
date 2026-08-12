import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const [openServices, setOpenServices] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <nav>
      <div className="banner">
        <ul>
          <li>+962 123456789</li>
          <li className="cta3">Get Quote</li>
        </ul>
      </div>

      <div className="nav">

        <Link className="a" to="/">
          <h1 className="logo">
            Seenne<span>Con</span>
          </h1>
        </Link>

        <i
          className={`fa-solid ${
            openMenu ? "fa-xmark" : "fa-bars"
          } fa-xl icon`}
          onClick={toggleMenu}
        />

        <ul className={openMenu ? "opened" : ""}>

          {/* SERVICES */}
          <li className="dropdown-container">

            <div className="dropdown-title">
             <li> <Link className="a" to="/services">
                Services
              </Link>

              <button
                type="button"
                className="dropdown-arrow"
                onClick={() => setOpenServices((prev) => !prev)}
                aria-label="Toggle Services menu"
              >
                <i
                  className={`fa-solid ${
                    openServices
                      ? "fa-chevron-up"
                      : "fa-chevron-down"
                  }`}
                />
              </button></li>
            </div>

            <ul
              className={`dropdown ${
                openServices ? "opened" : ""
              }`}
            >
              <li>
                <Link className="a" to="/services/residential">
                  Residential
                </Link>
              </li>

              <li>
                <Link className="a" to="/services/commercial">
                  Commercial
                </Link>
              </li>
            </ul>

          </li>


          {/* PRODUCTS */}
          <li className="dropdown-container">

            <div className="dropdown-title">
              <li><Link className="a" to="/products">
                Products
              </Link></li>

              <button
                type="button"
                className="dropdown-arrow"
                onClick={() => setOpenProducts((prev) => !prev)}
                aria-label="Toggle Products menu"
              >
                <i
                  className={`fa-solid ${
                    openProducts
                      ? "fa-chevron-up"
                      : "fa-chevron-down"
                  }`}
                />
              </button>
            </div>

            <ul
              className={`dropdown dropdown2 ${
                openProducts ? "opened" : ""
              }`}
            >
              <li>
                <Link className="a" to="/products/doors">
                  Doors
                </Link>
              </li>

              <li>
                <Link className="a" to="/products/windows">
                  Windows
                </Link>
              </li>
            </ul>

          </li>


          {/* OTHER LINKS */}
          <li>
            <Link to="/" className="a">
              Projects
            </Link>
          </li>

          <li>
            <Link to="/" className="a">
              About
            </Link>
          </li>

          <li>
            <Link to="/" className="a">
              Contact
            </Link>
          </li>

        </ul>


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