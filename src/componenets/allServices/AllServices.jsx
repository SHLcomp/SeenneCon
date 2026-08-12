import "./AllServices.scss";
import data from "../../data/services";

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
            <div className="service">
              <div className="img">
                <img src={service.gallery[0]} alt="" />
              </div>
              <div className="text">
                <h1>{service.title}</h1>
                <p>{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllServices;
