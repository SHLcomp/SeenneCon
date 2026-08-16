import { Link } from "react-router-dom";
import "./Service.scss";

const Service = ({service}) => {
  return (
    <div>
      <Link to={`/services/${service.slug}`} className="a">
        <div className="service">
          <div className="img">
            <img src={service.gallery[0]} alt="" />
          </div>
          <div className="text">
            <h1>{service.title}</h1>
            <p>{service.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Service;
