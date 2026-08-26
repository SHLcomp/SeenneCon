import "./Services.scss";
import data from "../../data/services.js";
import Service from "../serviceComp/Service.jsx";
import { Link } from "react-router-dom";

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
        <Link to={"/services"} className="a"><h3 className="cta2">View All</h3></Link>
      </div>
      <div className="services-cont">
        {newData.map((service)=>{
          return (
            <Service service={service}/>
          )
        })}
      </div>
    </div>
  );
};

export default Services;
