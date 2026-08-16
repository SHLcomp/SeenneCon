import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./serviceectDisplay.scss";
import { useEffect } from "react";

const serviceectDisplay = ({ service }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <>
      <Navbar />

      <main className="projectDisplay">
        {/* HERO */}
        <section className="hero">
          <div className="hero-img">
            <img src={service.heroImage} alt={service.title} />
          </div>

          <div className="hero-content">
            <p className="category">{service.category}</p>

            <h1 className="title">{service.title}</h1>

            <p className="description">{service.shortDescription}</p>
          </div>
        </section>

        {/* serviceECT INFO */}

        <section className="info section">
          <div>
            <span>Client</span>
            <p>{service.client}</p>
          </div>

          <div>
            <span>Location</span>
            <p>{service.location}</p>
          </div>

          <div>
            <span>Year</span>
            <p>{service.year}</p>
          </div>

          <div>
            <span>Area</span>
            <p>{service.area}</p>
          </div>

          <div>
            <span>Status</span>
            <p>{service.status}</p>
          </div>
        </section>

        {/* OVERVIEW */}

        <section className="section">
          <h2>Overview</h2>

          <p>{service.overview}</p>
        </section>

        {/* STORY */}

        <section className="section">
          <h2>serviceect Story</h2>

          <p>{service.story}</p>
        </section>

        {/* SERVICES */}

        <section className="section">
          <h2>Services Provided</h2>

          <div className="tags">
            {service.services.map((item, index) => (
              <span className="services-span" key={index}>{item}</span>
            ))}
          </div>
        </section>

        {/* CHALLENGES */}

        <section className="two-column section">
          <div>
            <h2>Challenges</h2>

            <ul>
              {service.challenges.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Solution</h2>

            <p>{service.solution}</p>
          </div>
        </section>

        {/* MATERIALS */}

        <section className="section">
          <h2>Materials</h2>

          <div className="tags">
            {service.materials.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </section>

        {/* SUSTAINABILITY */}

        <section className="section">
          <h2>Sustainability</h2>

          <div className="tags">
            {service.sustainability.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </section>

        {/* AWARDS */}

        {service.awards.length > 0 && (
          <section className="section">
            <h2>Awards</h2>

            <ul>
              {service.awards.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* GALLERY */}

        <section className="gallery section">
          <h2>Gallery</h2>

          <div className="gallery-grid">
            {service.gallery.map((img, index) => (
              <img key={index} src={img} alt={`${service.title}-${index}`} />
            ))}
          </div>
        </section>

        {/* FLOOR PLANS

        <section className="gallery section">
          <h2>Floor Plans</h2>

          <div className="gallery-grid">
            {service.floorPlans.map((img, index) => (
              <img key={index} src={img} alt="floor plan" />
            ))}
          </div>
        </section> */}

      </main>

      <Footer />
    </>
  );
};

export default serviceectDisplay;
