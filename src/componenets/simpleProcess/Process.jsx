import "./Process.scss";

const steps = [
  {
    number: "01",
    title: "Discovery",
    text: "Every project begins with understanding your goals, aspirations, budget, and the unique characteristics of the site.",
  },
  {
    number: "02",
    title: "Site Analysis",
    text: "We study the context, climate, regulations, and opportunities that will shape the design.",
  },
  {
    number: "03",
    title: "Concept Design",
    text: "Initial concepts explore spatial relationships, materiality, and the architectural vision.",
  },
  {
    number: "04",
    title: "Design Development",
    text: "The selected concept is refined through detailed drawings, layouts, and material selections.",
  },
  {
    number: "05",
    title: "Documentation",
    text: "Technical documentation and construction drawings are prepared for approvals and execution.",
  },
  {
    number: "06",
    title: "Construction Support",
    text: "We collaborate with contractors and consultants to ensure every detail is faithfully realised.",
  },
];

const DesignProcess = () => {
  return (
    <section className="designProcess">

      <div className="heading">
        <span className="eyebrow">Process</span>

        <h2 className="title">
          Our Design Process
        </h2>

        <p>
          Every project follows a thoughtful process that transforms ideas into
          architecture built to endure.
        </p>
      </div>

      <div className="timeline">

        {steps.map((step, i) => (
          <div
            className={`step ${i % 2 === 0 ? "left" : "right"}`}
            key={step.number}
          >
            <div className="circle">
              {step.number}
            </div>

            <div className="content">
              <h3 className="title">{step.title}</h3>

              <p>{step.text}</p>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default DesignProcess;