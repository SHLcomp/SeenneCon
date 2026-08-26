import { useLocation } from "react-router-dom";
import AllServices from "../componenets/allServices/AllServices";
import Footer from "../componenets/footer/Footer";
import Heading from "../componenets/heading/Heading";
import Navbar from "../componenets/navbar/Navbar";
import { useEffect } from "react";

const Services = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);
  return (
    <div>
      <Navbar />
      <Heading
        eyebrow={"Our Services"}
        title={"Your Vision. Our Expertise. One Successful Project."}
        desc={"Whether you're building, renovating, or improving your property, our experienced team provides the expertise and attention to detail needed to bring your project to life."}
      />
      <AllServices />
      <Footer />
    </div>
  );
};

export default Services;
