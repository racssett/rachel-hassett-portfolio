import { useParams } from "react-router-dom";
import findProject from "../../utilities/findProject";
import styles from './ProjectDetails.module.css' 


function ProjectDetails() {
  const {projectDetails} = useParams()
  const project = findProject(projectDetails)
  console.log(project);
  return (
    <div className={styles.details}>
      <h1>{project.title}</h1>
      <img 
          src={project.image} 
          alt={project.title}
        />
      <p>{project.description}</p>
      <a href={project.repositoryLink} target="_blank" rel="noreferrer">
        <button>Github</button>
      </a>
      <a href={project.deploymentLink} target="_blank" rel="noreferrer">
        <button>App</button>
      </a>
    </div>
  )
}

export default ProjectDetails