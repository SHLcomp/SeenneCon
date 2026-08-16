import { useMemo, useState } from "react";
import "./AllProducts.scss";
import data from "../../data/products";
import Product from "../productsComp/Product";

const AllProducts = () => {
  const [filters, setFilters] = useState({
    category: "All",
    type: "All",
    group: "All",
  });

  // Get unique filter options from the actual products data
  const categories = useMemo(() => {
    return ["All", ...new Set(data.map((product) => product.category))];
  }, []);

  const types = useMemo(() => {
    return ["All", ...new Set(data.map((product) => product.type))];
  }, []);

  const groups = useMemo(() => {
    return ["All", ...new Set(data.map((product) => product.group))];
  }, []);

  // Apply all filters
  const filteredProducts = useMemo(() => {
    return data.filter((product) => {
      const categoryMatch =
        filters.category === "All" ||
        product.category === filters.category;

      const typeMatch =
        filters.type === "All" ||
        product.type === filters.type;

      const groupMatch =
        filters.group === "All" ||
        product.group === filters.group;

      return categoryMatch && typeMatch && groupMatch;
    });
  }, [filters]);

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: "All",
      type: "All",
      group: "All",
    });
  };

  return (
    <div className="allProd">

      {/* HEADING */}
      <div className="heading">
        <span className="eyebrow">Our Construction Products</span>

        <h1 className="title">
          Our Product Collection
        </h1>

        <p>
          Explore our complete range of construction products,
          from windows and doors to shading systems. Each product
          is chosen to meet high standards of quality, performance,
          and visual appeal.
        </p>
      </div>


      {/* FILTERING */}
      <div className="filtering">

        {/* CATEGORY */}
        <div className="option category">
          <label htmlFor="category">
            Category
          </label>

          <select
            id="category"
            value={filters.category}
            onChange={(e) =>
              handleFilterChange("category", e.target.value)
            }
          >
            {categories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>


        {/* TYPE */}
        <div className="option type">
          <label htmlFor="type">
            Type
          </label>

          <select
            id="type"
            value={filters.type}
            onChange={(e) =>
              handleFilterChange("type", e.target.value)
            }
          >
            {types.map((type) => (
              <option
                key={type}
                value={type}
              >
                {type}
              </option>
            ))}
          </select>
        </div>


        {/* GROUP */}
        <div className="option group">
          <label htmlFor="group">
            Group
          </label>

          <select
            id="group"
            value={filters.group}
            onChange={(e) =>
              handleFilterChange("group", e.target.value)
            }
          >
            {groups.map((group) => (
              <option
                key={group}
                value={group}
              >
                {group}
              </option>
            ))}
          </select>
        </div>


        {/* CLEAR */}
        <button
          className="clear-filters"
          onClick={clearFilters}
        >
          Clear Filters
        </button>

      </div>


      {/* RESULTS */}
      <div className="results-info">
        <span>
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1
            ? "Product"
            : "Products"}
        </span>
      </div>


      {/* PRODUCTS */}
      <div className="cont-product">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((prod) => (
            <Product
              key={prod.id}
              products={prod}
            />
          ))

        ) : (

          <div className="no-results">
            <h2>No products found</h2>

            <p>
              Try changing your filters to see more products.
            </p>

            <button onClick={clearFilters}>
              Clear Filters
            </button>
          </div>

        )}

      </div>

    </div>
  );
};

export default AllProducts;