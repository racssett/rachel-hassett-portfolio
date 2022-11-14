import styles from './About.module.css'

function About() {
  return (
    <>
      <h1 className={styles.about}>About</h1>
      <div className={styles.about}>
        <img src="/images/Rachel Hassett Picture.jpg" alt="Rachel Hassett" />
        <div className={styles.aboutText}>
          <h3>Small blurb</h3>
        </div>
      </div>
    </>
  )
}

export default About;