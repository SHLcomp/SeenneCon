import Navbar from "../componenets/navbar/Navbar";
import Footer from "../componenets/footer/Footer";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <Navbar />

      <main className="contact">
        <section className="contactHero">
          <div className="heading">
            <span className="eyebrow">Contact</span>

            <h1 className="headline">
              Let's work
              <br />
              together.
            </h1>
          </div>

          <p>
            Have a question about our products or want to discuss a project?
            We'd be happy to hear from you.
          </p>
        </section>

        <section className="contactMain">
          <div className="contactInfo">
            <span className="eyebrow">Get In Touch</span>

            <div className="contactDetails">
              <div>
                <span>Email</span>
                <a href="mailto:info@example.com">
                  info@example.com
                </a>
              </div>

              <div>
                <span>Phone</span>
                <a href="tel:+00000000000">
                  +00 000 000 0000
                </a>
              </div>

              <div>
                <span>Address</span>
                <p>
                  Your Company
                  <br />
                  Your City, Country
                </p>
              </div>

              <div>
                <span>Hours</span>
                <p>
                  Sunday — Thursday
                  <br />
                  09:00 — 17:00
                </p>
              </div>
            </div>
          </div>

          <div className="contactFormWrapper">
            <span className="eyebrow">Send A Message</span>

            <form className="contactForm">
              <div className="formRow">
                <div className="formGroup">
                  <label htmlFor="name">Name</label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="email">Email</label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="formGroup">
                <label htmlFor="company">Company</label>

                <input
                  id="company"
                  type="text"
                  placeholder="Company name"
                />
              </div>

              <div className="formGroup">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button className="cta1" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;