import dynamic from 'next/dynamic';
import { Popup } from 'components/blocks/popup';

const Plyr = dynamic(() => import('plyr'), { ssr: false });

const Banner5 = () => {
  return (



    
    <div style={styles.container}>
      <h1 style={styles.heading}>
      Foundation  <span style={styles.highlight}>Training </span> Outline
      </h1>
     

      <div style={styles.cardContainer}>
        {/* First Resource */}
        <div style={{ height: "4px", width: "100%", backgroundColor: "#cda67e", marginTop: "20px" }}></div>
        <div style={styles.card}>
          <div style={styles.textContent}>
            <h2 style={styles.cardTitle}>
            Module 1: April 1 – 5, 2025
            </h2>
            <p  style={styles.cardDescription}>
            Instructor: James Nicholas
            <ul  className=" text-left" style={{fontSize:'1.5rem',listStyleType: 'none',paddingLeft: '10px'}}>
              <li><span style={{ color: '#cda67e' }}>✔</span>Bodynamic System Overview
                </li>
                <li><span style={{ color: '#cda67e' }}>✔</span>
                  Bodyknot
                  <li><span style={{ color: '#cda67e' }}>✔</span>
                    Layers of Feelings
                  </li>
                  <li><span style={{ color: '#cda67e' }}>✔</span>Ego Aspects
                  </li>
                  <li><span style={{ color: '#cda67e' }}>✔</span>Existence Developmental Phase</li>
                </li>
              </ul>
            </p>
          
          </div>
          <div style={styles.imageContainer}>
            <img
              src="/img/photos/7878.jpg"
              alt="Free Workshop"
              style={styles.image}
            />
          </div>
        </div>
        <div style={{ height: "4px", width: "100%", backgroundColor: "#cda67e", marginTop: "20px" }}></div>
        {/* Second Resource */}
        <div style={styles.card}>
          <div style={styles.textContent}>
            <h2 style={styles.cardTitle}>
            Module 2: June 3  – 7, 2025
            </h2>
            <p style={styles.cardDescription}>
            Instructor: Mar Barroso
            </p>
            <ul  className=" text-left" style={{fontSize:'1.5rem',listStyleType: 'none',paddingLeft: '10px'}}>
            <li><span style={{ color: '#cda67e' }}>✔</span>Need Developmental Phase</li>
            <li><span style={{ color: '#cda67e' }}>✔</span>Autonomy Developmental Phase</li>
            </ul>
          </div>
          <div style={styles.imageContainer}>
            <img
              src="/img/photos/section2 (2).jpg"
              alt="Free Training"
              style={styles.image}
            />
          </div>
        </div>
        {/* third Resource */}
        <div style={{ height: "4px", width: "100%", backgroundColor: "#cda67e", marginTop: "20px", paddingLeft: '10px' }}></div>
        <div style={styles.card}>
          <div style={styles.textContent}>
            <h2 style={styles.cardTitle}>
            Module 3: Sep 2 – 6, 2025
            </h2>
            <p  style={styles.cardDescription}>
            Instructor: James Nicholas
            <ul  className=" text-left" style={{fontSize:'1.5rem',listStyleType: 'none', paddingLeft: '10px'}}>
              <li><span style={{ color: '#cda67e' }}>✔</span>Will Developmental Phase
                </li>
                <li><span style={{ color: '#cda67e' }}>✔</span>
                Love/Sexuality Developmental Phase
                </li>
              </ul>
            </p>
          
          </div>
          <div style={styles.imageContainer}>
            <img
              src="/img/photos/section12.jpg"
              alt="Free Workshop"
              style={styles.image}
            />
          </div>
        </div>
        <div style={{ height: "4px", width: "100%", backgroundColor: "#cda67e", marginTop: "20px" }}></div>
        {/* fourth Resource */}
        <div style={styles.card}>
          <div style={styles.textContent}>
            <h2 style={styles.cardTitle}>
            Module 4: Oct 28  –  Nov 1, 2025
            </h2>
            <p  style={styles.cardDescription}>
            Instructor: Mar Barroso
            <ul className=" text-left"style={{ listStyleType: 'none', paddingLeft: '10px', }}>
              <li><span style={{ color: '#cda67e' }}>✔</span> Opinion Developmental Phase
                </li>
                <li><span style={{ color: '#cda67e' }}>✔</span> 
                Performance/Solidarity Developmental Phase
                </li>
              </ul>
            </p>
          
          </div>
          <div style={styles.imageContainer}>
            <img
              src="/img/photos/section4.jpg"
              alt="Free Workshop"
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
    fontFamily: "Cormorant",
    padding: "40px 0",
    backgroundColor: "#E7EAD8", // Light greenish background color spanning full width
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "40px",
  },
  highlight: {
    color: "#cda67e", // Highlight color
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },
  textContent: {
    flex: 1,
    paddingRight: "20px",
  },
  cardTitle: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    fontWeight: "bold",
    color: "#2E2E2E",
  },
  cardDescription: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    color: "#555555",
  },
  link: {
    fontSize: "1rem",
    color: "#00AEB0",
    textDecoration: "none",
    fontWeight: "bold",
  },
  imageContainer: {
    flex: 0.5,
    display: "flex",
    justifyContent: "center",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "10px",
  },
  "@media (max-width: 768px)": {
    card: {
      flexDirection: "column",
      textAlign: "center",
    },
    textContent: {
      paddingRight: "0",
      marginBottom: "20px",
    },
    imageContainer: {
      justifyContent: "center",
    },
  },
  
};

export default Banner5;
