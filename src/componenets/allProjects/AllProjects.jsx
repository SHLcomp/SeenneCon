import "./AllProjects.scss";
import data from "../../data/projects.js";
import Project from "../projects/Project.jsx";
import { useMemo, useState } from "react";

const AllProjects = () => {
  const [filter, setFilter] = useState("All");

  // Get all unique categories
  const categories = useMemo(() => {
    return ["All", ...new Set(data.map((project) => project.category))];
  }, []);

  // Filter projects based on the selected category
  const filteredProjects = useMemo(() => {
    return data.filter((project) => {
      return filter === "All" || project.category === filter;
    });
  }, [filter]);

  // Update selected filter
  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <div className="allProjects">
      <div className="heading">
        <span className="eyebrow"> Our Portfolio </span>

        <h1 className="title"> Building Quality. Delivering Results. </h1>

        <p>
          {" "}
          Discover the projects that define our work. From concept to
          completion, we combine skilled craftsmanship, quality materials, and
          careful execution to deliver construction solutions that meet the
          highest standards of performance, functionality, and design.{" "}
        </p>
      </div>

      {/* FILTERING */}
      <div className="filtering">
        <div className="option category">
          <label htmlFor="category">Category</label>

          <select
            id="category"
            value={filter}
            onChange={(e) => handleFilterChange(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="cont-proj">
        {filteredProjects.map((proj) => {
          return <Project key={proj.id} proj={proj} />;
        })}
      </div>
    </div>
  );
};

export default AllProjects;
