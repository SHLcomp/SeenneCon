import Navbar from "../componenets/navbar/Navbar";
import Footer from "../componenets/footer/Footer";
import "./About.scss";

const About = () => {
  return (
    <>
      <Navbar />

      <main className="about">
        <section className="aboutHero">
          <div className="heading">
            <span className="eyebrow">About Us</span>

            <h1 className="headline">
              Built around
              <br />
              better solutions.
            </h1>
          </div>

          <p className="heroText">
            We provide thoughtfully engineered systems designed to meet the
            demands of modern architecture, combining reliable performance
            with clean and practical design.
          </p>
        </section>

        <section className="aboutIntro">
          <div className="sectionNumber">01</div>

          <div className="introContent">
            <span className="eyebrow">Who We Are</span>

            <h2 className="title">
              Engineering with purpose.
            </h2>

            <p>
              Our approach is centered around creating architectural solutions
              that are practical, durable, and designed for modern spaces.
            </p>

            <p>
              From the materials we select to the smallest technical detail,
              we focus on delivering products that provide dependable
              performance without compromising the visual character of a
              project.
            </p>
          </div>
        </section>

        <section className="aboutValues">
          <div className="sectionNumber">02</div>

          <div className="valuesContent">
            <div className="heading">
              <span className="eyebrow">What Matters</span>

              <h2 className="title">
                Our principles.
              </h2>
            </div>

            <div className="valuesGrid">
              <article>
                <span>01</span>
                <h3 className="title">Quality</h3>
                <p>
                  Reliable materials and carefully considered construction
                  designed for long-term performance.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3 className="title">Precision</h3>
                <p>
                  Attention to technical details that makes every component
                  work as intended.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3 className="title">Innovation</h3>
                <p>
                  Continuously improving our products to respond to changing
                  architectural requirements.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3 className="title">Trust</h3>
                <p>
                  Building lasting relationships through consistency,
                  transparency, and dependable service.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="aboutStatement">
          <span className="eyebrow">Our Approach</span>

          <h2 className="headline">
            Performance meets
            <br />
            simplicity.
          </h2>

          <p>
            We believe good architectural products should perform quietly,
            integrate naturally, and stand the test of time.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;