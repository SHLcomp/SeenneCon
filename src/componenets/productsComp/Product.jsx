import { Link } from "react-router-dom";
import "./Product.scss";

const Product = ({ products }) => {
  return (
    <Link className="a" to={`/products/${products.slug}`}>
      <div className="product">
        <div className="img">
          <img src={products.images[0]} alt={products.title} />
        </div>

        <div className="text">
          <h3>{products.title}</h3>

          <p>{products.description}</p>

          <div className="info">
            <span>Colors: {products.colors.length}</span>
            <span>{products.type}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
