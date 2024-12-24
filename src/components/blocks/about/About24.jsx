import styles from './styles.module.css';

const About24 = () => {
  return (
    <section className={styles.aboutSection}>
      {/* Image Section */}
      <div className={styles.aboutImageContainer}>
        <img
          src="/img/photos/header2.jpg" // Replace with the actual image path
          alt="Kristin sitting on a couch"
          className={styles.aboutImage}
        />
      </div>

      {/* Text Section */}
      <div className={styles.aboutTextContainer}>
        <h1 className={styles.aboutTitle}>Bodynamic Foundation Training</h1>
        <h6 className={styles.aboutSubtitle}>
          Embark on a Journey of Somatic Developmental Psychology for Personal
          and Professional Growth
        </h6>
        <h7 className={styles.aboutDescription}>
          Embark on a transformative journey with the Bodynamic system,
          integrating body awareness and developmental psychology to deepen
          self-awareness, healing, and relational dynamics in your <br />personal and
          professional life.
        </h7>
      </div>
    </section>
  );
};

export default About24;
