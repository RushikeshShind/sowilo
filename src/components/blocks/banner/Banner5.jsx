import dynamic from 'next/dynamic';
import{ Popup } from 'components/blocks/popup';

const Plyr = dynamic(() => import('plyr'), { ssr: false });
const Banner5 = () => {
  return <section className="wrapper">
    <div className="container col-xl-20 py-1 mb-1 py-lg-6 item-center">
    
      <section 
  className="" 
  style={{ 
    backgroundColor: '#9FC3C6', 
    width: '120%', 
    boxSizing: 'border-box', 
    padding: '1rem', 
    marginLeft: '-10%',
    marginRight: '-10%'
    
  }}
>
  <h1 className='display-1 text-center' style={{ fontFamily: 'EditorsNote', fontSize:'55px'   }}>Foundation Training Outline</h1>
  <p className='text-center' style={{ margin: 1 }}>
    4 x 5 Day Modules = 20 Days <br />
    Total Classes run from 10 am – 6 pm every day. <br />
    Lunch break 1 pm - 2:30 pm.
  </p>


      {/* 1st Module Section */}
      <section>
      <div
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9FC3C6', // Light teal background
    padding: '15px', // Reduced padding
    minHeight: '10px', // Reduced minimum height
  }}
>
  <div
    style={{
      display: 'flex',
      flexDirection: 'row', // Horizontal layout for larger screens
      maxWidth: '1000px',
      width: '100%',
      backgroundColor: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    }}
  >
    {/* Image Section */}
    <div
      style={{
        width: '50%', // Half-width for the image section
        height: 'auto',
        overflow: 'hidden',
      }}
    >
      <img
        src="/img/photos/7878.jpg" // Replace with the actual image path
        alt="Kristin sitting on a couch"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>

    {/* Content Section */}
    <div
      style={{
        width: '70%', // Half-width for the content section
        padding: '40px', // Adds consistent spacing
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'left',
        padding:'100px'
      }}
    >
      <h3
        style={{
          color: '#AF8B65', // Soft gold
          fontSize: '30px',
          fontWeight: 650,
          marginBottom: '10px',
          fontFamily: 'Sinclaire',
        }}
      >
        Module 1
      </h3>
      <h2
        style={{
          fontSize: '30px',
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
      >
        April 1 – 5, 2025
      </h2>
      <h4
        style={{
          color: '#555', // Neutral gray for the subtitle
          fontWeight: 600,
          marginBottom: '20px',
          fontFamily: 'Cormarant',
        }}
      >
        Instructor: James Nicholas
      </h4>
      
      <h4 style={{ fontWeight: 'bold', marginBottom: '10px' , fontFamily:'Sinclaire'}}>
        IN THIS MODULE YOU WILL:
      </h4>
      <ul
        style={{
          fontSize:'20px',
          paddingLeft: '20px',
          lineHeight: '1.2',
          fontFamily: 'Sinclaire',
        }}
      >
        <li>Bodynamic System Overview
        </li>
        <li>
        Bodyknot
        </li>
        <li>
        Layers of Feelings
        </li>
        <li>Ego Aspects</li>
        <li>Existence Developmental Phase</li>
      </ul>
    </div>
  </div>
</div>
</section>


      {/* 2nd module */}
      <div
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9FC3C6', // Light teal background
    padding: '25px', // Reduced padding
    minHeight: '10px', // Reduced minimum height
  }}
>
  <div
    style={{
      display: 'flex',
      flexDirection: 'row', // Horizontal layout for larger screens
      maxWidth: '1000px',
      width: '100%',
      backgroundColor: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    }}
  >
    {/* Image Section */}
    <div
      style={{
        width: '50%', // Half-width for the image section
        height: 'auto',
        overflow: 'hidden',
      }}
    >
      <img
        src="/img/photos/module2.jpg" // Replace with the actual image path
        alt="Kristin sitting on a couch"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>

    {/* Content Section */}
    <div
      style={{
        width: '70%', // Half-width for the content section
        padding: '40px', // Adds consistent spacing
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'left',
        padding:'100px'
      }}
    >
      <h3
        style={{
          color: '#AF8B65', // Soft gold
          fontSize: '30px',
          fontWeight: 650,
          marginBottom: '10px',
          fontFamily: 'Sinclaire',
        }}
      >
        Module 2
      </h3>
      <h2
        style={{
          fontSize: '30px',
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
      >
        June 3  – 7, 2025
      </h2>
      <h4
        style={{
          color: '#555', // Neutral gray for the subtitle
          fontWeight: 600,
          marginBottom: '20px',
          fontFamily: 'Cormarant'
        }}
      >
        Instructor: Mar Barroso
      </h4>
      
      <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
        IN THIS MODULE YOU WILL:
      </h4>
      <ul
        style={{
          fontSize:'20px',
          paddingLeft: '20px',
          lineHeight: '1.2',
          fontFamily: 'Cormarant',
        }}>
        <li>Need Developmental Phase
        </li>
        <li>
        Autonomy Developmental Phase
        </li>
      </ul>
    </div>
  </div>
</div>

      {/* 3rd module */}
    
      <div
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9FC3C6', // Light teal background
    padding: '25px', // Reduced padding
    minHeight: '10px', // Reduced minimum height
  }}
>
  <div
    style={{
      display: 'flex',
      flexDirection: 'row', // Horizontal layout for larger screens
      maxWidth: '1000px',
      width: '100%',
      backgroundColor: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    }}
  >
    {/* Image Section */}
    <div
      style={{
        width: '50%', // Half-width for the image section
        height: 'auto',
        overflow: 'hidden',
      }}
    >
      <img
        src="/img/photos/module3.jpg" // Replace with the actual image path
        alt="Kristin sitting on a couch"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>

    {/* Content Section */}
    <div
      style={{
        width: '70%', // Half-width for the content section
        padding: '40px', // Adds consistent spacing
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'left',
      }}
    >
      <h3
        style={{
          color: '#AF8B65', // Soft gold
          fontSize: '30px',
          fontWeight: 650,
           marginBottom: '20px',
          fontFamily: 'Cormarant',
        }}
      >
        Module 3
      </h3>
      <h2
        style={{
          fontSize: '30px',
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
      >
        Sep 2 – 6, 2025 
      </h2>
      <h4
        style={{
          color: '#555', // Neutral gray for the subtitle
          fontWeight: 600,
          marginBottom: '20px',
          fontFamily: 'Cormarant',
        }}
      >
        Instructor: James Nicholas
      </h4>
      
      <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
        IN THIS MODULE YOU WILL:
      </h4>
      <ul
        style={{
          fontSize:'20px',
          paddingLeft: '20px',
          lineHeight: '1.5',
          fontFamily: 'EditorNote',
        }}
      >
        <li>Will Developmental Phase
        </li>
        <li>
        Love/Sexuality Developmental Phase
        </li>
        
      </ul>
    </div>
  </div>
</div>
      {/* 4th module */}
      <div
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9FC3C6', // Light teal background
    padding: '25px', // Reduced padding
    minHeight: '10px', // Reduced minimum height
  }}
>
  <div
    style={{
      display: 'flex',
      flexDirection: 'row', // Horizontal layout for larger screens
      maxWidth: '1000px',
      width: '100%',
      backgroundColor: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    }}
  >
    {/* Image Section */}
    <div
      style={{
        width: '50%', // Half-width for the image section
        height: 'auto',
        overflow: 'hidden',
      }}
    >
      <img
        src="/img/photos/module4.jpg" // Replace with the actual image path
        alt="Kristin sitting on a couch"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>

    {/* Content Section */}
    <div 
      style={{
        width: '80%', // Half-width for the content section
        padding: '40px', // Adds consistent spacing
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'left',
      }}
    >
      <h3
        style={{
          color: '#AF8B65', // Soft gold
          fontSize: '30px',
          fontWeight: 650,
          marginBottom: '20px',
          fontFamily: 'Cormarant',
        }}
      >
        Module 4
      </h3>
      <h2
        style={{
          fontSize: '30px',
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
      >
        Oct 28  –  Nov 1, 2025
      </h2>
      <h4
        style={{
          color: '#555', // Neutral gray for the subtitle
          fontWeight: 600,
          marginBottom: '20px',
          fontFamily: 'GothicA1',
        }}
      >
        Instructor: Mar Barroso
      </h4>
      
      <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
        IN THIS MODULE YOU WILL:
      </h4>
      <ul
        style={{
          fontSize:'20px',
          paddingLeft: '30px',
          lineHeight: '1.5',
          fontFamily: 'EditorNote',
        }}
      >
        <li>Opinion Developmental Phase
        </li>
        <li>
        Performance/Solidarity Developmental Phase
        </li>
      </ul>
    </div>
  </div>
</div>
      
      {/* Trainner Details 1 */}
     
</section>




      {/* video section */}

    </div>
  </section>;
};

export default Banner5;