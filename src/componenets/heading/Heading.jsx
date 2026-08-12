import "./Heading.scss";

const Heading = ({ eyebrow, title, desc }) => {
  return (
    <div className="heading headingDiv">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="title">{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default Heading;