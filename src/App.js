import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Resume from './pages/Resume/Resume'
import Projects from './components/ProjectList/ProjectList'
import NavBar from './components/NavBar/NavBar'
import projects from './data/projects'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <main>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Projects projects={projects} />} />
          <Route path='projects/:projectDetails' element={<ProjectDetails />}/>
        </Routes>
        <Footer />
      </div>
    </main>
  );
}

export default App;
