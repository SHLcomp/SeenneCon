import "./ProductDisplay.scss";
const ProductDisplay = ({ product }) => {
  return (
    <div className="productDislay">
      <main className="main">
        <div className="first">
          <h1>{product.title}</h1>
          <div className="imgs">
                {product.images?.map((image, index) => (
                  <div
                    className={`img-container ${
                      index === 0 ? "main-img" : "small-img"
                    }`}
                    key={index}
                  >
                    <img src={image} alt={`${product.title} ${index + 1}`} />
                  </div>
                ))}
              </div>
            
          <div className="info-cont">
            <h6>
              Description
              <ul>
                <p>{product.desc}</p>
              </ul>
            </h6>
            <h6>
              Category
              <ul>
                <p>{product.category}</p>
              </ul>
            </h6>
            <h6>
              Type
              <ul>
                <p>{product.type}</p>
              </ul>
            </h6>
          </div>
          <div className="cta">
            <button className="cta1">Download Brochure</button>
          </div>
        </div>
        <div className="second">
          <table>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>width</td>
              <td>40mm</td>
            </tr>
            <tr>
              <td>price</td>
              <td>$25</td>
            </tr>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ProductDisplay;
