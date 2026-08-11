import "./Services.scss";
import data from "../../data/services.js";

const Services = () => {
  const newData = data.filter((item)=> item.featured);

  return (
    <div className="services">
      <div className="heading">
        <span className="eyebrow">Selected Services</span>
        <h1 className="title">Engineering Solutions Built Around Your Project</h1>
        <p>
          We provide a complete range of contracting and architectural
          solutions, combining engineering expertise, premium materials, and
          precision craftsmanship to deliver projects that exceed expectations.
        </p>
        <h3 className="cta2">View All</h3>
      </div>
      <div className="services-cont">
        {newData.map((service)=>{
          return (
            <div className="service">
              <div className="img">
                <img src={service.gallery[0]} alt="" />
              </div>
              <div className="text">
                <h1>
                  {service.title}
                </h1>
                <p>{service.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Services;
