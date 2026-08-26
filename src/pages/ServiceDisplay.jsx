import { useLocation } from "react-router-dom";
import Navbar from "../componenets/navbar/Navbar";
import Footer from "../componenets/footer/Footer";
import "./ServiceDisplay.scss";
import { useEffect } from "react";
import Project from "../componenets/projects/Project";
import projects from "../data/projects";

const ServiceDisplay = ({ service }) => {
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

      <main className="serviceDisplay">
        {/* HERO */}
        <section className="hero">
          <div className="hero-img">
            <img src={service.gallery[0]} alt={service.title} />
          </div>

          <div className="hero-content">
            <p className="category">Our Services</p>

            <h1 className="title">{service.title}</h1>

            <p className="description">{service.description}</p>
          </div>
        </section>

        {/* SERVICE INFO */}
        <section className="info section">
          <div>
            <span>Service</span>
            <p>{service.title}</p>
          </div>

          <div>
            <span>Type</span>
            <p>
              {service.featured ? "Featured Service" : "Professional Service"}
            </p>
          </div>


          <div>
            <span>Materials</span>
            <p>{service.material.length} Materials</p>
          </div>

          <div>
            <span>Gallery</span>
            <p>{service.gallery.length} Images</p>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="section">
          <h2>Overview</h2>

          <p>{service.overview}</p>
        </section>

        {/* MATERIALS */}
        <section className="section">
          <h2>Materials</h2>

          <div className="tags">
            {service.material.map((item, index) => (
              <span className="services-span" key={index}>
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section className="section">
          <h2>Benefits</h2>

          <ul>
            {service.benefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* PERFORMANCE */}
        <section className="section">
          <h2>What You Can Expect</h2>

          <ul>
            {service.performance.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* RELATED SERVICES */}
        <section className="section">
          <h2>Related Projects</h2>

          <div className="related-projects">
            <div className="cont-proj">
              {service.relatedProjects.map((projectId) => {
                const project = projects.find(
                  (project) => project.id === projectId,
                );

                if (!project) return null;

                return <Project key={project.id} proj={project} />;
              })}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="gallery section">
          <h2>Gallery</h2>

          <div className="gallery-grid">
            {service.gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${service.title} - ${index + 1}`}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServiceDisplay;
