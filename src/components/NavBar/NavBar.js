import styles from './NavBar.module.css'
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className={styles.nameContainer} >
        <h3 className={styles.name} hidden><NavLink to='/'>Rachel</NavLink></h3>
        <h3 className={styles.name} hidden><NavLink to='/'>Hassett</NavLink></h3>
      </div>
      <div className={styles.navLinksContainer}>
        <div className={styles.aboutProjectsContainer}>
          <p className={styles.about}><NavLink to='/about' id="about">About</NavLink></p>
          <p className={styles.projects}><NavLink to='/projects'>Projects</NavLink></p>
        </div>
        <div className={styles.namesContainer}>
          <h3 className={styles.name} hidden><NavLink to='/'>Rachel</NavLink></h3>
          <h3 className={styles.name} hidden><NavLink to='/'>Hassett</NavLink></h3>
        </div>
        <div className={styles.resumeContactContainer}>
          <p className={styles.resume}><NavLink to='/resume'>Resume</NavLink></p>
          <p className={styles.contact}><NavLink to='/contact'>Contact</NavLink></p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar