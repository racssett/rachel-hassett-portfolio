import styles from './NavBar.module.css'
import {HashLink} from 'react-router-hash-link'

function NavBar() {
  return (
    <nav>
      <div className={styles.nameContainer} >
        <h3 className={styles.name} hidden><HashLink to='/'>Rachel</HashLink></h3>
        <h3 className={styles.name} hidden><HashLink to='/'>Hassett</HashLink></h3>
      </div>
      <div className={styles.navLinksContainer}>
        <div className={styles.aboutProjectsContainer}>
          <p className={styles.about}><HashLink to='/pages/About/About.js#about'>About</HashLink></p>
          <p className={styles.projects}><HashLink to='/components/ProjectList/ProjectList.js#projects'>Projects</HashLink></p>
        </div>
        <div className={styles.namesContainer}>
          <h3 className={styles.name} hidden><HashLink to='/pages/About/About.js#about'>Rachel</HashLink></h3>
          <h3 className={styles.name} hidden><HashLink to='/pages/About/About.js#about'>Hassett</HashLink></h3>
        </div>
        <div className={styles.resumeContactContainer}>
          <p className={styles.resume}><HashLink to='/pages/Resume/Resume.js#resume'>Resume</HashLink></p>
          <p className={styles.contact}><HashLink to='/pages/Contact/Contact.js#contact'>Contact</HashLink></p>
        </div>
      </div>
      <br></br>
    </nav>
  )
}

export default NavBar