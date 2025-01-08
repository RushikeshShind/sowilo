import styles from './styles.module.css';

const About24 = () => {
  return (
    <section className={styles.aboutSection}>
      <div></div>
      {/* Image Section */}
      <div className={styles.aboutImageContainer}>
        <div></div>
        <img
          src="/img/photos/header2.jpg" // Replace with the actual image path
          alt="Kristin sitting on a couch"
          className={styles.aboutImage}
        />
      </div>

      {/* Text Section */}
      <div className={styles.aboutTextContainer}>
        <h1 className='display-1' style={{fontFamily:'sinclair' , color:' #9cbfbc'}}>Bodynamic Foundation Training</h1>
        
        <h5 className='display-6' style={{fontsize: '20px' ,fontFamily: 'sinclair'}}>Embark on a Journey of Somatic Developmental Psychology</h5> 
       
        <h7 className={styles.aboutDescription}>
        Embark on a transformative journey with the Bodynamic system, integrating body awareness and developmental psychology to deepen self-awareness, healing, and relational dynamics in your personal and professional life.
        </h7>
      </div>
    </section>
  );
};

export default About24;
