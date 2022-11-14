import { Link } from "react-router-dom"
import hyphenateWords from "../../utilities/hyphenateWords"


const ProjectCard = ({ project }) => {
  const path = hyphenateWords(project.title)
  return (
      <div>
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