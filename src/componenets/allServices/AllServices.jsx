import "./AllServices.scss";
import data from "../../data/services";
import Service from "../serviceComp/Service";

const AllServices = () => {
  return (
    <div className="services">
      <div className="heading">
        <span className="eyebrow">Our Construction Services</span>
        <h1 className="title">Comprehensive Solutions For Every Project</h1>
        <p>
          We provide a complete range of construction and renovation services
          designed to meet the needs of homeowners, businesses, and property
          developers.
        </p>
      </div>
      <div className="services-cont">
        {data.map((service) => {
          return (
            <Service service={service}/>
          );
        })}
      </div>
    </div>
  );
};

export default AllServices;
