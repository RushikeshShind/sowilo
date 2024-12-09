import CountUp from 'react-countup';
import { ProcessList2 } from 'components/reuseable/process-list'; // -------- data -------- //

import { skill2 } from 'data/skill';
import { factList10 } from 'data/facts';
import { processList } from 'data/demo-12';
const list = ['Total 20 Days ', 'Nullam quis risus eget urna mollis.', 'Donec id elit non mi porta gravida.', 'Fusce dapibus tellus ac commodo.', 'Cras justo odio dapibus ac facilisis in.'];

const About24 = () => {
  return <section className="wrapper">
  <div className='wrapper'
      style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '100px',
          backgroundColor: '', // Light teal background
          fontFamily: 'serif', // Example font, adjust as needed
          flexDirection: 'row', // Default to row layout for larger screens
          flexWrap: '', // Wrap elements on smaller screens
      }}
  >
      <div
          style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              padding: '40px',
              flex: '1', // Make the div take available space
              justifyContent: 'center', // Center content horizontally
              width: '100%', // Ensure it takes full width
              maxWidth: '500px', // Max width on larger screens
          }}
      >
        
          {/* Image Section */}
          <div
    data-sid="title_6"
    className="sie-title_6 se"
    style={{
        transform: 'scale(1.17188, 1.17188) translate(23.54px, 74.6533px)',
        position: 'relative',
        width: '100%', // Ensure the container takes full width
        flex: '1', // Make the container flexible
    }}
>
    <div className=""
        data-src="/img/photos/about29.jpg"
        style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundImage: "url('/img/photos/about29.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '5px', // Optional: For rounded edges
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: Shadow effect
            border: '5px solid white', // Add a white border
        }}
    ></div>
    <img
        src="/img/photos/about29.jpg"
        className="se-img"
        alt="Kristin Richards"
        style={{
            borderRadius: '5px',
            width: '100%',
            height: 'auto',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            border: '4px solid white', // Add a white border
        }}
    />
</div>

      </div>
      {/* Right Section (Text Section) */}
      <div className="container py-14 py-md-17 text-center"
          style={{
              flex: '1',
              display: 'flex',
              flexDirection: 'column', // Stack text on smaller screens
              alignItems: 'center', // Center align text for mobile
              gap: '20px',
              width: '100%', // Full width for small screens
              padding: '20px', // Padding for spacing on smaller screens
          }}
      >
          <h2
              style={{
                  color: '#1A1A1D',
                  fontSize: '24px', // Reduce font size for smaller screens
                  lineHeight: '1.4',
                  fontWeight: 'normal',
                  textAlign: 'center', // Center text for mobile
                  marginBottom: '10px', // Add margin between the title and paragraph
              }}
          >
              Bodynamic Foundation Training <br />
              Embark on a Journey of Somatic Developmental Psychology for Personal and Professional Growth.
          </h2>
          <p
              style={{
                  fontSize: '16px', // Reduce font size for readability
                  color: '#4a4a4a',
                  textAlign: 'center', // Center align text for smaller screens
                  lineHeight: '1.6', // Ensure good line spacing for readability
              }}
          >
              "Embark on a transformative journey with the Bodynamic system, integrating body awareness and developmental psychology to deepen self-awareness, healing, and relational dynamics in your personal and professional life."
          </p>
      </div>
  </div>
</section>




};

export default About24;