import styles from './About.module.css'

function About() {
  return (
    <section>
      <h1>About</h1>
      <div className={styles.about}>
        <img src="/images/Rachel Hassett Picture.jpg" alt="Rachel Hassett" />
        <div className={styles.aboutText}>
          <h2>Who I am</h2>
          <p> I'm Rachel, a Full-stack web developer with a proclivity for creative problem solving. </p>
          <h2 className={styles.title}>My Journey</h2>
          <p>I started my tech journey by completing a 420+ hour software engineering immersive through General Assembly. In this immersive, I solved challenges, created projects, and worked together in a team to deliver an app that helps job seekers in the tech world find jobs, events, and resources.</p>
          <h2 className={styles.title}>Current Projects</h2>
          <p>I am currently working on building apps that help ESL teachers with lesson materials and planning.</p>
        </div>
      </div>
    </section>
  )
}

export default About;