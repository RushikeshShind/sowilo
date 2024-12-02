import CountUp from 'react-countup';
import { ProcessList2 } from 'components/reuseable/process-list'; // -------- data -------- //

import { skill2 } from 'data/skill';
import { factList10 } from 'data/facts';
import { processList } from 'data/demo-12';
const list = ['Total 20 Days ', 'Nullam quis risus eget urna mollis.', 'Donec id elit non mi porta gravida.', 'Fusce dapibus tellus ac commodo.', 'Cras justo odio dapibus ac facilisis in.'];

const About24 = () => {
  return <section className="wrapper bg- mb-10">
      <div 
  style={{
    
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'space-between',
    padding: '100px',
    backgroundColor: '#c5d8d6', // Light teal background
    fontFamily: 'serif', // Example font, adjust as needed
  }}
>
<div
  style={{
    position: 'relative', // Set parent div to relative positioning
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '40px',
  }}
>
  {/* Image Section */}
  <div
    style={{
      flex: '2',
      position: 'relative', // For relative positioning
    }}
  >
    <img
      src="/img/photos/about29.jpg"
      alt="Kristin Richards"
      style={{
        borderRadius: '5px',
        width: '100%',
        maxWidth: '500px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    />
  </div>

  {/* Text Section */}
  <div
    style={{
      borderRadius: '5px',
      position: 'absolute', // Makes the text overlap the image
      top: '20%', // Vertically center
      left: '5px', // Horizontal positioning
      transform: 'translateY(-50%)', // Adjust for perfect centering
      backgroundColor: '#f5ebe3', // Light beige background
      padding: '10px 22px',
      borderRadius: '5px',
      fontSize: '16px',
      fontStyle: 'italic',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add shadow for visibility
    }}
  >
    <span style={{ fontWeight: 'bold' }}>with Kristin Richards</span> <br />
    <span>owner of In Flow Design Co.</span>
  </div>
</div>


  {/* Right Section */}
  <div
    style={{
      flex: '2',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '20px',
    }}
  >
    <h4
      style={{
        color: '#5d8575',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '14px',
      }}
    >
      
    </h4>
    <h2 style={{ color:'#1A1A1D', fontSize: '36px', lineHeight: '1.4', fontWeight: 'normal' }}>
    Bodynamic Foundation Training < br/>Embark on a Journey of Somatic Developmental Psychology for Personal and Professional Growth.
    </h2>
    <p style={{ fontSize: '16px', color: '#4a4a4a' }}>
    "Embark on a transformative journey with the Bodynamic system, integrating body awareness and developmental psychology to deepen self-awareness, healing, and relational dynamics in your personal and professional life."

    </p>
    
  </div>
</div>

    </section>;
};

export default About24;