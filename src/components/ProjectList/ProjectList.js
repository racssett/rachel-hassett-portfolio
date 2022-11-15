import ProjectCard from "../ProjectCard/ProjectCard";
import style from './ProjectList.module.css'

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <div className={style.projects}>
        {props.projects.map(project => (
          <ProjectCard project={project} key={project._id} />
        ))}
      </div>
    </div>
  )
}

export default Projects;