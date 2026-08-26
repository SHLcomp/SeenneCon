import { useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer"
import "./ProductDisplay.scss";
const ProductDisplay = ({ product }) => {
  const [menu, setMenu] = useState(null);

  return (
    <>
      <Navbar />
      <div className="productDisplay">
        <main className="main">
          <div className="first">
            <h1 className="title">{product.title}</h1>
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
              <div className="info-item">
                <h6
                  onClick={() =>
                    setMenu(menu === "description" ? null : "description")
                  }
                >
                  Description
                </h6>

                <div
                  className={`info-content ${menu === "description" ? "active" : ""}`}
                >
                  <p>{product.desc}</p>
                </div>
              </div>

              <div className="info-item">
                <h6
                  onClick={() =>
                    setMenu(menu === "category" ? null : "category")
                  }
                >
                  Category
                </h6>

                <div
                  className={`info-content ${menu === "category" ? "active" : ""}`}
                >
                  <p>{product.category}</p>
                </div>
              </div>

              <div className="info-item">
                <h6 onClick={() => setMenu(menu === "type" ? null : "type")}>
                  Type
                </h6>

                <div
                  className={`info-content ${menu === "type" ? "active" : ""}`}
                >
                  <p>{product.type}</p>
                </div>
              </div>
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
              {product.specifications?.map((spec, index) => (
                <tr key={index}>
                  <th>{spec.name}</th>
                  <td>{spec.value}</td>
                </tr>
              ))}
            </table>
          </div>
        </main>
        <section className="specifications">
          <div className="spec-column">
            <div className="spec-block">
              <h2>Features</h2>

              <ul>
                {product.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="spec-block">
              <h2>Benefits</h2>

              <ul>
                {product.applications?.map((application, index) => (
                  <li key={index}>{application}</li>
                ))}
              </ul>
            </div>

            <div className="spec-block">
              <h2>Performance</h2>

              <ul>
                {Object.entries(product.performance || {}).map(
                  ([key, value], index) => (
                    <li key={index}>
                      <span>
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </span>
                      <strong>{value}</strong>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="spec-block">
              <h2>Materials</h2>

              <ul>
                <li>{product.material}</li>

                {product.specifications
                  ?.filter((spec) =>
                    [
                      "Sealing System",
                      "Profile Design",
                      "Construction",
                    ].includes(spec.name),
                  )
                  .map((spec, index) => (
                    <li key={index}>{spec.value}</li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="spec-tags">
            <div className="tag-group">
              <h3>Colors</h3>

              <div className="tags">
                {product.colors?.map((color, index) => (
                  <span key={index}>{color}</span>
                ))}
              </div>
            </div>

            <div className="tag-group">
              <h3>Sizes</h3>

              <div className="tags">
                {product.specifications
                  ?.filter((spec) =>
                    [
                      "Profile Width",
                      "Glazing Thickness",
                      "Frame Width",
                      "Sash Width",
                    ].includes(spec.name),
                  )
                  .map((spec, index) => (
                    <span key={index}>
                      {spec.name}: {spec.value}
                    </span>
                  ))}
              </div>
            </div>

            <div className="tag-group">
              <h3>Opening Style</h3>

              <div className="tags">
                <span>{product.opening}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ProductDisplay;
