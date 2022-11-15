import { Link } from "react-router-dom"
import hyphenateWords from "../../utilities/hyphenateWords"
import style from './ProjectCard.module.css'

const ProjectCard = ({ project }) => {
  const path = hyphenateWords(project.title)
  return (
      <div className={style.project}>
        <img 
          src={project.image} 
          alt={project.title}
        />
        <section>
          <h3>
            {project.title}
          </h3>
          <Link to={path} >
            <button>
              Learn more
            </button>
          </Link>
        </section>
      </div>
  )
}

export default ProjectCard