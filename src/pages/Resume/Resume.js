import styles from './Resume.module.css'

function Resume() {
  return (
    <section id="resume">
      <div>
        <h1>Resume</h1>
        <a href="/images/Rachel Hassett Resume.pdf"  download>
          <img src="/images/resume.png" alt="Rachel Hassett Resume" className={styles.resume} />
        </a>
      </div>
    </section>
  )
}

export default Resume;