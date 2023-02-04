import { useParams } from "react-router-dom";
import findProject from "../../utilities/findProject";
import styles from './ProjectDetails.module.css' 


function ProjectDetails() {
  const {projectDetails} = useParams()
  const project = findProject(projectDetails)
  console.log(project);
  return (
    <section>
      <div className={styles.details}>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <div className={styles.icon}>
          <a href={project.repositoryLink} target="_blank" rel="noreferrer">
            <img 
              src="/images/github-logo.png"
              alt='github'
            />
          </a>
          <a href={project.deploymentLink} target="_blank" rel="noreferrer" >
            <img 
              src="/images/website-icon.webp"
              alt='app'
            />
          </a>
        </div>
        <img 
          src={project.image} 
          alt={project.title}
        />

      </div>
    </section>
  )
}

export default ProjectDetails