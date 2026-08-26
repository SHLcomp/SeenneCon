import AllProjects from "../componenets/allProjects/AllProjects";
import Heading from "../componenets/heading/Heading";
import Navbar from "../componenets/navbar/Navbar";
import Footer from "../componenets/footer/Footer.jsx";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Projects = () => {
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
        eyebrow={"Our Projects"}
        title={"Spaces Designed to Make an Impact."}
        desc={
          "Explore a selection of our completed and ongoing projects, showcasing thoughtful design, quality craftsmanship, and solutions built around each project's unique vision."
        }
      />
      <AllProjects />
      <Footer />
    </div>
  );
};

export default Projects;
