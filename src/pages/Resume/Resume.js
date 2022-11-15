import styles from './Resume.module.css'

function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <a href="/images/Rachel Hassett Resume.pdf"  download>
        <img src="/images/resume.png" alt="Rachel Hassett Resume" className={styles.resume} />
      </a>
    </div>
  )
}

export default Resume;