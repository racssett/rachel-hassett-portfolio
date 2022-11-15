import styles from './About.module.css'

function About() {
  return (
    <>
      <h1 className={styles.about}>About</h1>
      <div className={styles.about}>
        <img src="/images/Rachel Hassett Picture.jpg" alt="Rachel Hassett" />
        <div className={styles.aboutText}>
          <h2>Hello!</h2>
          <p> I'm Rachel, a Full-stack web developer with a proclivity for creative problem solving. </p>
        </div>
      </div>
    </>
  )
}

export default About;