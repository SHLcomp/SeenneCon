import "./Project.scss"
const Project = ({proj}) => {
  return (
    <div className="project" key={proj.id}>
      <div className="img">
        <img src={proj.images[0]} alt={[proj.title]} />
      </div>
      <div className="text">
        <h3>{proj.title}</h3>
        <p>{proj.desc}</p>
        <div className="info">
          <span>{proj.location}</span>
          <span>{proj.year}</span>
        </div>
      </div>
    </div>
  )
}

export default Project