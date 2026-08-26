import "./Industry.scss";

const industry = ({industry}) => {
  return (
    <div>
        <div className="industry">
          <div className="img">
            <img src={industry.img} alt="" />
          </div>
          <div className="text">
            <h1>{industry.name}</h1>
            <p>{industry.desc}</p>
          </div>
        </div>
    </div>
  );
};

export default industry;
