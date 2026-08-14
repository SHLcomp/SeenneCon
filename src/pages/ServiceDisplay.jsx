import Navbar from "../componenets/navbar/Navbar";

const ServiceDisplay = ({ service }) => {
  return (
    <div>
      <Navbar />
      <section className="servDisplay">
        <div className="img">
          <img src={service.gallery[0]} alt={service.title} />
        </div>
        <div className="overview section">
          <h1 className="title">Overview</h1>
          <p>{service.overview}</p>
        </div>     
        <div className="includes section">
          <div className="point">
            <ul>
              {service.material.map((material, index) => (
                <li key={index}>{material}</li>
              ))}
            </ul>
          </div>
          <div className="process section"></div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDisplay;
