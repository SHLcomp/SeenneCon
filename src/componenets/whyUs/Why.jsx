import "./Why.scss";
const Why = () => {
  return (
    <div className="why">
      <div className="heading">
        <span className="eyebrow">Why Choose Us</span>
        <h1 className="title">Built on Expertise. Driven by Excellence.</h1>
        <p>
          Every project is backed by engineering knowledge, premium materials,
          and a commitment to delivering reliable results that stand the test of
          time.
        </p>
      </div>
      <div className="cont">
        <div className="reason">
          <h4 className="title">⚙️ Engineering Expertise</h4>
          <p>
            Every solution is carefully planned to meet technical requirements
            while supporting the architectural vision of your project.
          </p>
        </div>

        <div className="reason">
          <h4 className="title">🏆 Premium Quality</h4>
          <p>
            We use trusted materials and proven systems to deliver durability,
            safety, and refined finishes.
          </p>
        </div>

        <div className="reason">
          <h4 className="title">📈 Proven Experience</h4>
          <p>
            Years of hands-on industry experience enable us to manage projects
            with confidence, precision, and consistency.
          </p>
        </div>

        <div className="reason">
          <h4 className="title">🚀 Performance-Driven</h4>
          <p>
            From consultation to installation, we focus on efficiency, attention
            to detail, and long-lasting performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
