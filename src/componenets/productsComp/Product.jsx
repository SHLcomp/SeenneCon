import "./Product.scss";

const Product = ({ products }) => {
  return (
    <div className="product">
      <div className="img">
        <img
          src={products.images[0]}
          alt={products.title}
        />
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
  );
};

export default Product;