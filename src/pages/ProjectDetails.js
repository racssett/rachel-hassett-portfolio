import projects from "../data/projects";

function ProjectDetails() {
  return (
    <div>
      <h1>{projects[0].title}</h1>
      <p>description</p>
      <a href="/" target="_blank" rel="noreferrer">
        <button>Github</button>
      </a>
      <a href="/" target="_blank" rel="noreferrer">
        <button>App</button>
      </a>
    </div>
  )
}

export default ProjectDetails