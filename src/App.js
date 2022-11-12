import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Projects from './components/ProjectList/ProjectList'
import NavBar from './components/NavBar'
import projects from './data/projects'
import ProjectDetails from './pages/ProjectDetails'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects projects={projects} />} />
        <Route path='projects/:projectDetails' element={<ProjectDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
