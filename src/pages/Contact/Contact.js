import styles from './Contact.module.css'

function Contact() {
  return (
    <section>
      <div className={styles.contact}>
        <h1>Contact</h1>
        <h3>Let's Chat!</h3>
        <h4>email: rachel.c.hassett@gmail.com</h4>
        <a href="https://github.com/racssett" target="_blank" rel="noreferrer">
          <img 
            src="/images/github-logo.png"
            alt='github'
          />
        </a>
      </div>
    </section>
  )
}

export default Contact;