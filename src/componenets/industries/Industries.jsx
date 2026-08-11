import "./Industries.scss";
import data from "../../data/indusrties";

const Industries = () => {
  return (
    <div className="industries">
      <div className="heading">
        <span className="eyebrow">Industries We Serve</span>
        <h1 className="title">
          Delivering Solutions Across Diverse Industries
        </h1>
        <p>
          Every industry has unique challenges and requirements. Our expertise
          allows us to deliver tailored contracting and architectural solutions
          that combine engineering precision, premium materials, and exceptional
          craftsmanship across a wide range of sectors.
        </p>
      </div>
      <div className="cont">
        {data.map((ind) => {
          return (
            <div className="industry">
              <div className="img">
                <img src={ind.img} alt={ind.name} />
              </div>
              <div className="text">
                  <div className="text">
                    <h1>{ind.name}</h1>
                    <p>{ind.desc}</p>
                  </div>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default Industries;
