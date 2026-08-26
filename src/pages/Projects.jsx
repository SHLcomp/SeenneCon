import AllProjects from "../componenets/allProjects/AllProjects";
import Heading from "../componenets/heading/Heading";
import Navbar from "../componenets/navbar/Navbar";
import Footer from "../componenets/footer/Footer.jsx"

const Projects = () => {
  return (
    <div>
      <Navbar />
      <Heading
        eyebrow={"Our Products"}
        title={"Find the Right Products for Your Project."}
        desc={
          "Browse our collection of carefully selected products, compare options, and discover materials that combine durability, functionality, and outstanding design."
        }
      />
      <AllProjects />
      <Footer />
    </div>
  );
};

export default Projects;
