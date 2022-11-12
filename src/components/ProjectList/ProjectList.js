import projects from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      {props.projects.map(project => (
        <ProjectCard project={project} key={project._id} />
      ))}
    </div>
  )
}

export default Projects;