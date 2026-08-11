import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer noise">
      <div className="top">
        <div className="brand">
          <span className="eyebrow">Seenne Contracting & Constructing</span>

          <h2 className="logo">
            Seenne<span>Con</span>
          </h2>

          <p>
            Creating timeless architecture where elegance, functionality, and
            human experience exist in perfect harmony.
          </p>
        </div>

        <div className="links">
          <div>
            <h4>Navigation</h4>

            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Products</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          <div>
            <h4>Company</h4>

            <p>Amman, Jordan</p>
            <p>+962 7X XXX XXXX</p>
            <p>info@seennecon.com</p>
          </div>

          <div>
            <h4>Follow</h4>

            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="bottom">
        <p>© 2026 SeenneCon Contracting & Constructing. All Rights Reserved.</p>

        <p>Built Around Quality & Precision.</p>
      </div>
    </footer>
  );
};

export default Footer;
