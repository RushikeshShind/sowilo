import Link from 'next/link';
import Carousel from 'components/reuseable/Carousel'; // -------- data -------- //
import { portfolioList3 } from 'data/portfolio';
import styles from '../styles/Home.module.css';

const Portfolio4 = () => {
  return (
    <section
      className="wrapper bg-light"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 3rem',
        
        backgroundColor: ' #0e5d6E', // Light background
      }}
    >
      {/* Container */}
      <div className='mb-1'
        style={{
          display: 'flex',
          flexDirection: 'row', // Side-by-side layout
          flexWrap: 'wrap', // Ensure responsiveness
          gap: '2rem',
          maxWidth: 'auto',
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
              width: '120%',
              maxWidth: '1200px', // Adjust the max-width of the image container
              height: 'auto',
              
            }}
          >
            {/* Box behind the image */}
            <div
              style={{
                position: 'absolute', // Place behind the image
                top: '1%',
                bottom:'10%',
                left: '-50%',
                width: '100%',
                height: '100%',
                backgroundColor: ' #0e5d6E'

              }}
            ><img src="/img/photos/sheetalbg.png" alt="" style={{height:'105%', bottom:'10%'}}/></div>

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
            padding: '4rem',
            textAlign: 'left',
            color: '#333',
          }}
        >
          <h2 className='mb-1'
            style={{
              fontSize: '40px',
              marginBottom: '2rem',
              fontFamily:'byutih',
              color:'#0e5d6E'
            }}
          >
            Hey, I’m Shiital
          </h2>
          <p
            style={{
              fontSize:'20px',
              lineHeight: '0.9',
              marginBottom: '1rem',
              fontFamily: 'Cormorant',
            }}
          >
            I am passionate about human development and potential. From early
            childhood education to adult learning to change management, I have
            traversed many paths to currently focusing on developmental
            psychology, specifically somatic developmental psychology.
          </p>
          <p
            style={{
              fontSize:'20px',
              lineHeight: '1.0',
              marginBottom: '1rem',
              fontFamily: 'Cormorant',
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
              fontSize:'20px',
              lineHeight: '1.2',
              marginBottom: '1rem',
              fontFamily: 'Cormorant',
            }}
          >
            Drawing on this transformative experience, I am deeply committed to
            empowering individuals to heal from developmental trauma, cultivate
            self-awareness, build secure relationships, and lay a strong
            foundation for lifelong resilience and fulfillment.
          </p>
          <h3
            style={{
              fontSize:'20px',
              lineHeight: '1.0',
              marginBottom: '1rem',
              fontFamily: 'Cormorant',
              color: ' #eab085',
            }}
          >
            I firmly believe that lifelong mental health challenges can be
            addressed by integrating traditional developmental psychology
            principles with a somatic focus.
          </h3>
          <ul
            style={{
              fontSize:'20px',
              lineHeight: '1.0',
              listStyleType: 'none',
              padding: 0,
              margin: '1rem 0',
            }}
          >
            <li
              style={{
                
                fontSize:'20px',
                display: 'flex',
                alignItems: 'center',
                gap: '1.0rem',
                fontFamily: 'Cormorant',
              }}
            >This approach emphasizes the vital role of embodied experience
              in fostering psychological growth, healing, and overall
              well-being, which inspires my current efforts.
            </li>
    <br />
            <li
              style={{
                
                fontSize:'20px',
                display: 'flex',
                alignItems: 'center',
                gap: '1.0rem',
                fontFamily: 'Cormorant',
              }}
            >
           I am collaborating with the Bodynamic International global team
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
