import { useParams } from "react-router-dom";
import data from "../../data/services";
import ServiceDisplay from "../../pages/ServiceDisplay";
import Navbar from "../navbar/Navbar";

const ServicesFilter = () => {
  const { serviceId } = useParams();
  const service = data.find((e) => e.slug === serviceId);
  if (!service)
    return (
      <>
        <Navbar />
        <h1 style={{ padding: "10vh" , marginTop: "10em"}}>Service Not Found</h1>
      </>
    );
  return (
    <div>
      {/* return service display component with the props */}
      <ServiceDisplay service={service} />
    </div>
  );
};

export default ServicesFilter;
