import dynamic from 'next/dynamic';
import { Popup } from 'components/blocks/popup';

const Plyr = dynamic(() => import('plyr'), { ssr: false });

const Banner5 = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Foundation <span style={styles.highlight}>Training</span> Outline
      </h1>

      <div style={styles.cardContainer}>
        {/* Module 1 */}
        <div style={styles.separator}></div>
        <div style={styles.card}>
          <div style={styles.textContent}>
            <h2 style={styles.cardTitle}>Module 1 : June 2-6, 2025</h2>
            <p style={styles.cardDescription}>Instructor: Mar Boroso</p>
            <ul style={styles.list}>
              <li><span style={styles.listIcon}>✔</span> Bodynamic System Overview</li>
              <li><span style={styles.listIcon}>✔</span> Bodyknot</li>
              <li><span style={styles.listIcon}>✔</span> Layers of Feelings</li>
              <li><span style={styles.listIcon}>✔</span> Ego Aspects</li>
              <li><span style={styles.listIcon}>✔</span> Existence Developmental Phase</li>
            </ul>
          </div>
          <div style={styles.imageContainer}>
            <img
              src="/img/photos/module1.jpg"
              alt="Module 1"
              style={styles.image}
            />
          </div>
        </div>

        {/* Module 2 */}
        <div style={styles.separator}></div>
        <div style={styles.card}>
          <div style={styles.textContent}>
            <h2 style={styles.cardTitle}>Module 2 :  September 8-12, 2025</h2>
            <p style={styles.cardDescription}>Instructor: James Nicholas</p>
            <ul style={styles.list}>
              <li><span style={styles.listIcon}>✔</span> Need Developmental Phase</li>
              <li><span style={styles.listIcon}>✔</span> Autonomy Developmental Phase</li>
            </ul>
          </div>
          <div style={styles.imageContainer}>
            <img
              src="/img/photos/child-playing-1005898_1280.jpg"
              alt="Module 2"
              style={styles.image}
            />
          </div>
        </div>

        {/* Module 3 */}
        <div style={styles.separator}></div>
        <div style={styles.card}>
          <div style={styles.textContent}>
            <h2 style={styles.cardTitle}>Module 3 : November 3-7, 2025</h2>
            <p style={styles.cardDescription}>Instructor: Mar Boroso</p>
            <ul style={styles.list}>
              <li><span style={styles.listIcon}>✔</span> Will Developmental Phase</li>
              <li><span style={styles.listIcon}>✔</span> Love/Sexuality Developmental Phase</li>
            </ul>
          </div>
          <div style={styles.imageContainer}>
            <img
              src="/img/photos/section12.jpg"
              alt="Module 3"
              style={styles.image}
            />
          </div>
        </div>

        {/* Module 4 */}
        <div style={styles.separator}></div>
        <div style={styles.card}>
          <div style={styles.textContent}>
            <h2 style={styles.cardTitle}>Module 4 : January 12-16, 2026</h2>
            <p style={styles.cardDescription}>Instructor: James Nicholas</p>
            <ul style={styles.list}>
              <li><span style={styles.listIcon}>✔</span> Opinion Developmental Phase</li>
              <li><span style={styles.listIcon}>✔</span> Performance/Solidarity Developmental Phase</li>
            </ul>
          </div>
          <div style={styles.imageContainer}>
            <img
              src="/img/photos/section4.jpg"
              alt="Module 4"
              style={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Cormorant',
    padding: '40px 0',
    backgroundColor: ' #fffbf4',
    margin: '10px 0',
  },
  heading: {
    fontSize: '40px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '40px',
    fontFamily:'byutih',
    color: '#2E2E2E',
  },
  highlight: {
    color: '#eab085',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '18px',
   
    borderRadius: '10px',
    
    minHeight: '250px', // Ensures a consistent box size
  },
  separator: {
    height: '4px',
    width: '100%',
    backgroundColor: '#eab085',
  },
  textContent: {
    flex: 1,
    paddingRight: '20px',
  },
  cardTitle: {
    fontSize: '28px',
    marginBottom: '10px',
    fontWeight: 'bold',
    fontFamily:'byutih',
    color: '#2E2E2E',
    letterSpacing: '1px', // Adds spacing between letters
    wordSpacing: '4px',   // Adds spacing between words
  },
  cardDescription: {
    fontSize: '20px',
    marginBottom: '20px',
    color: '#555',
  },
  list: {
    fontSize: '20px',
    listStyleType: 'none',
    padding: 0,
  },
  listIcon: {
    color: '#eab085',
    marginRight: '10px',
  },
  imageContainer: {
    flex: 0.5,
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '100%',  // Let the width adjust based on the aspect ratio
    height: '100%', // Fill the container height
    borderRadius: '1px',
    objectFit: 'cover', // Maintains aspect ratio
  },
};

export default Banner5;
