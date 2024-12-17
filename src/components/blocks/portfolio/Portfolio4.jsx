import Link from 'next/link';
import Carousel from 'components/reuseable/Carousel'; // -------- data -------- //
import { portfolioList3 } from 'data/portfolio';
import styles from '../styles/Home.module.css';

const Portfolio4 = () => {
  return (
    <section
      className="wrapper bg-light "
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1rem',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#508C9B', // Light background
      }}
    >
      {/* Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row', // Side-by-side layout
          flexWrap: 'wrap', // Ensure responsiveness
          gap: '2rem',
          maxWidth: '1200px',
          backgroundColor: 'white',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        {/* Left: Image Section */}
        <div
          style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
          }}
        >
          <div
            style={{
              position: 'relative', // To position the box behind the image
              width: '100%',
              maxWidth: '1200px', // Adjust the max-width of the image container
              height: 'auto',
              
            }}
          >
            {/* Box behind the image */}
            <div
              style={{
                position: 'absolute', // Place behind the image
                top: '1%',
                left: '-10%',
                width: '143%',
                height: '120%',
                backgroundColor: '', // Background color
                zIndex: 0, // Ensure it stays behind the image
                borderRadius: '2px', // Rounded corners for the box
                transform: 'rotate(0deg)', // Slight tilt for styling
              }}
            ></div>

            {/* Image */}
            <img
              src="/img/photos/Shiital_Headshot.jpg" // Replace with your image path
              alt="Shiital Image"
              style={{
                position: 'relative', // Keep image above the box
                width: '120%',
                height: 'auto',
                boxShadow:'',
                borderRadius: '1px',
                zIndex: 1, // Ensure image is above the box
              }}
            />
          </div>
        </div>

        {/* Right: Content Section */}
        <div
          style={{
            flex: '3',
            padding: '2rem',
            textAlign: 'left',
            color: '#333',
          }}
        >
          <h2
            style={{
              fontSize: '2rem',
              marginBottom: '1rem',
              color: '#000',
              fontFamily: 'EditorsNote',
            }}
          >
            HEY, I'M SHIITAL
          </h2>
          <p
            style={{
              fontSize:'17px',
              lineHeight: '1.0',
              marginBottom: '1rem',
              fontFamily: 'GothicA1',
            }}
          >
            I am passionate about human development and potential. From early
            childhood education to adult learning to change management, I have
            traversed many paths to currently focusing on developmental
            psychology, specifically somatic developmental psychology.
          </p>
          <p
            style={{
              fontSize:'17px',
              lineHeight: '1.0',
              marginBottom: '1rem',
              fontFamily: 'GothicA1',
            }}
          >
            My journey in Somatic Developmental Psychology began in 2023 with my
            first Bodynamic demonstration session, an experience that revealed
            underlying dynamics profoundly influencing my ability to sustain
            close, intimate relationships. This work holds deep personal
            significance for me, as it marked the beginning of a transformative
            exploration of self and connection.
          </p>
          <p
            style={{
              fontSize:'17px',
              lineHeight: '1.0',
              marginBottom: '1rem',
              fontFamily: 'GothicA1',
            }}
          >
            Drawing on this transformative experience, I am deeply committed to
            empowering individuals to heal from developmental trauma, cultivate
            self-awareness, build secure relationships, and lay a strong
            foundation for lifelong resilience and fulfillment.
          </p>
          <h3
            style={{
              fontSize:'17px',
              lineHeight: '1.0',
              fontSize: '1.5rem',
              marginBottom: '0.3rem',
              color: '#3c868e',
              fontFamily: 'GothicA1',
            }}
          >
            I firmly believe that lifelong mental health challenges can be
            addressed by integrating traditional developmental psychology
            principles with a somatic focus.
          </h3>
          <ul
            style={{
              fontSize:'17px',
              lineHeight: '1.0',
              listStyleType: 'none',
              padding: 0,
              margin: '1rem 0',
            }}
          >
            <li
              style={{
                fontSize:'17px',
                display: 'flex',
                alignItems: 'center',
                gap: '1.0rem',
                fontFamily: 'GothicA1',
              }}
            >
              ✔ This approach emphasizes the vital role of embodied experience
              in fostering psychological growth, healing, and overall
              well-being, which inspires my current efforts.
            </li>
            <li
              style={{
                fontSize:'17px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'GothicA1',
              }}
            >
              ✔ I am collaborating with the Bodynamic International global team
              to bring Bodynamic Training and Workshops to the United States
              and contribute to the growth and cohesion of the global Bodynamic
              community.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio4;
