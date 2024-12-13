import CountUp from 'react-countup';
import { ProcessList2 } from 'components/reuseable/process-list'; // -------- data -------- //

import { skill2 } from 'data/skill';
import { factList10 } from 'data/facts';
import { processList } from 'data/demo-12';
const list = ['Total 20 Days ', 'Nullam quis risus eget urna mollis.', 'Donec id elit non mi porta gravida.', 'Fusce dapibus tellus ac commodo.', 'Cras justo odio dapibus ac facilisis in.'];

const About24 = () => {
    return (
     <section style={{ display: 'flex', height: '650px', backgroundColor: 'white' }}>
  <div
    style={{
      position: 'relative', // Enables positioning of elements
      backgroundColor: '#9CBFBC',
      padding: '2rem 1rem',
      width: '500px',
    
      fontWeight: '600',
      fontSize: '0.9rem',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    }}
  >
    <div
            style={{
              flex: 1,
             // Replace with actual image URL
              backgroundSize: 'cover',
              color:'white',
              backgroundPosition: 'center',
              height: '100px', // Default height for small screens
            }}
          ></div>
          
          <img
  src="/img/photos/header2.jpg" // Replace this with the actual image path
  alt="Kristin sitting on a couch"
  style={{
    marginBottom: '40px', 
    marginLeft: "250px", // Adds spacing below the image
    width: '330px', // Adjust the image size
    border: '10px solid white', // Adds a white border
  }}
/>

    
  </div>
  <div className='ms-16 '
    style={{
      marginLeft: '20px', // Add space between the white box and text
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
     <h1 className='display-1 ' style={{fontFamily:'EditorsNote', color:'#9CBFBC', fontSize:'80px'}}>Bodynamic Foundation Training</h1>
    <h6 style={{fontFamily:'EdiotrsNote' ,fontSize:'25px'}}>
      Embark on a Journey of Somatic Developmental Psychology for Personal and
      Professional Growth
    </h6>
  
     <p style={{fontSize:'19px'}}>Embark on a transformative journey with the Bodynamic system, integrating
      body awareness and developmental<br/> psychology to deepen self-awareness,
      healing, and relational dynamics in your personal and professional life.</p> 
    
    <div>
     
    </div>
  </div>
</section>

    );
  };
  
  export default About24;
  





  