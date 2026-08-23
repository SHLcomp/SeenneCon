import { useParams } from "react-router-dom";
import data from "../../data/products";
import Navbar from "../navbar/Navbar";
import ProductDisplay from "../productDisplay/ProductDisplay";

const ProductsFilter = () => {
  const { prodId } = useParams();
  const product = data.find((e) => e.slug === prodId);
  if (!product)
    return (
      <>
        <Navbar />
        <h1 style={{ padding: "10vh" , marginTop: "10em"}}>Product Not Found</h1>
      </>
    );
  return (
    <div>
      {/* return service display component with the props */}
      <ProductDisplay product={product} />
    </div>
  );
};

export default ProductsFilter;
