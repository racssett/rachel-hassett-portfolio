import { useParams } from "react-router-dom";
import findProject from "../utilities/findProject";
import projects from "../data/projects";


function ProjectDetails() {
  const {projectDetails} = useParams()
  const project = findProject(projectDetails)
  console.log(project);
  return (
    <div>
      <h1>{project.title}</h1>
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