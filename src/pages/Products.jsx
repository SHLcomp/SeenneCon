import AllProducts from "../componenets/allProducts/AllProducts";
import Footer from "../componenets/footer/Footer";
import Heading from "../componenets/heading/Heading";
import Navbar from "../componenets/navbar/Navbar";

const Products = () => {
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
      <AllProducts />
      <Footer />
    </div>
  );
};

export default Products;
