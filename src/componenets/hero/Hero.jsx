import { Link } from "react-router-dom";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="img"></div>
      <div className="text">
        <h1 className="headline">Engineering Spaces. Building Excellence. </h1>
        <p>
          From aluminium systems and curtain walls to premium doors, windows,
          and complete contracting solutions, we deliver projects with
          precision, quality, and lasting performance.
        </p>
        <div className="ctas-div">
            <Link className="a" to={"/contact"}><h3 className="cta2">Request A Quote</h3></Link>
            <Link className="a" to={"/services"}><h3 className="cta1">Explore Our Services</h3></Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
