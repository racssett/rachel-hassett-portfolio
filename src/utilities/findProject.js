import projects from "../data/projects"
import hyphenateWords from "./hyphenateWords"

const findProject = (str) => {
  const project = projects.find(({title}) => {
    return hyphenateWords(title) === str
  })
  return project
}

export default findProject