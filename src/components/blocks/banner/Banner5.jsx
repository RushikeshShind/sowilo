import dynamic from 'next/dynamic';

const Plyr = dynamic(() => import('plyr'), { ssr: false });
const Banner5 = () => {
  return <section className="wrapper">
    <div className="container col-xl-20 py- py-mb-8 py-lg-15 item-center">
    <img className='' src="/img/photos/B-Logo5-SMALL.png" alt="hello" style={{ width: '1270px ', height: 'auto',  marginLeft: 0, }}/>

      <div className="row">
        <div className="col-xl-15 col-xxl-15 mx-auto text-center">
          <i className="icn-flower text-leaf fs-30 opacity-25"></i>
          <h2 className="display-2 mb-5 text-dark" style={{ fontFamily: 'EditorsNote', fontWeight: 300 }}>
            Bodynamic Foundation Training <br/>Orlando, USA</h2>
          <a
            href="https://www.bodynamic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link">
            <h6 style={{ textDecoration: 'underline', color:'#009990' }}>Bodynamic International</h6>
          </a>



          <p className="display-8 mb-8 " style={{ fontFamily: 'GothicA1' }}>Bodynamics is a Somatic Developmental Psychology system a groundbreaking paradigm of empirically researched psychology with a focus on practical application. This innovative approach integrates body awareness and developmental stages to enhance personal growth and healing. With a global reach, Bodynamic International offers comprehensive training programs, empowering individuals and professionals worldwide to deepen their understanding of embodiment, self-awareness, and interpersonal dynamics.</p>


        </div>

        <h2 className='text-center mb-8' style={{ fontFamily: 'EditorsNote' , color:'#009990'}}>Training Details</h2>
        <p style={{ fontFamily: 'GothicA1' }}>The Foundation Training is a one-year introductory program in the Bodynamic System. Throughout this foundational course, you will delve into character structures, character positions, and the fundamental concepts essential for understanding contact and communication as presented by the system. These concepts include mutual connection, dignity, boundaries, centering, and grounding.
 
          The detailed breakdown of the various developmental phases during childhood, paired with central developmental issues and their association with evolving defense mechanisms, offers a framework for comprehending human expression. Through this training, you will sharpen your skills, enabling you to be more present and accurate in your professional endeavors.
        </p>
        <div className="container">
          {/* Section 1 */}
          <div className="section">
            <h2 style={{ fontFamily: 'EditorsNote', color:'#009990' }}>What will we cover in this training?</h2>
            <p style={{ fontFamily: 'GothicA1' }}>
              During these 20 days of training, divided into 4 modules, we will present lectures on fundamental psychological
              and physiological development and how these two are interconnected. This unique combination will provide information
              about the formation of character and its various defense systems. You will learn how your character affects your body
              and why your physiological body appears as it does. You will understand the reasons behind your unique preferences
              and biases, and we will explore what has been helpful to you in those tendencies and what obstacles they can create in your life.
            </p>
            <p style={{ fontFamily: 'GothicA1' }}>
              Moreover, you will become acquainted with different Bodynamic techniques that will teach you how to support someone
              in changing their behavior. These techniques can be applied to people of all ages, including children. Additionally,
              you will become more skilled in reading the physiological body and interpreting this information in psychological terms
              by identifying areas of a person’s strength and areas needing more attention. This knowledge will offer new perspectives
              on how to act and help you determine what would be most beneficial in contact with others. Lastly, you will familiarize
              yourself with the short version of the Bodyknot, a technique we teach for maintaining dignity and mutual connection in
              difficult situations with others and oneself. It is a valuable tool for conflict resolution and developing an observing ego.
            </p>
          </div>

          {/* Section 2 */}
          <div className="section" style={{ fontFamily: 'EditorsNote', }}>
            <h2 style={{color:'#009990'}}>Why should I take Bodynamic training?</h2>
            <p style={{ fontFamily: 'GothicA1' }}>
              The Bodynamic system has been in existence for 40 years, emphasizing the research and understanding of the body’s
              connection to psychology and development from its inception. It is among the pioneering schools to holistically
              integrate the body, brain, and human behavior. This system provides an unparalleled array of tools and techniques
              to deepen one’s understanding of oneself and others. Uniquely, it is designed to render psychological progress
              “measurable,” offering a novel degree of practicality for those who utilize this material, whether in their
              professional or personal lives.
            </p>
           
          </div>
          <p>To know more about the Seven Developmental Stages  <p style={{color:'#009990'}}>click here.</p> </p>
          {/* Section 3 */}
          <div className="section mb-10" style={{ fontFamily: 'GothicA1' }}>
            <h2>Who is this training for?</h2>
            <div
              className="list-container"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 'px', // Adjust the gap between the two lists if needed
              }}
            >
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', }}>
                <li>Therapists</li>
                <li>Mental Health Counsellors</li>
                <li>Doctors</li>
                <li>Physiotherapists</li>
                <li>Massage Therapists</li>
                <li>Yoga teachers</li>
                <li>Dance teachers</li>
                <li>Trainers</li>
                <li>Sales people</li>
              </ul>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Psychiatrists</li>
                <li>Osteopaths</li>
                <li>Naturopaths</li>
                <li>Social workers</li>
                <li>Cranio-sacral specialists</li>
                <li>Pedagogues</li>
                <li>Teachers</li>
                <li>And of course parents!</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
      <section 
  className="" 
  style={{ 
    backgroundColor: '#9FC3C6', 
    width: '120%', 
    boxSizing: 'border-box', 
    padding: '5rem', 
    marginLeft: '-10%',
    marginRight: '-10%'
  }}
>
  <h1 className='display-1 text-center' style={{ fontFamily: 'EditorsNote' , }}>Foundation Training Outline</h1>
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
          marginBottom: '10px',
          fontFamily: 'Sevillana',
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
          fontFamily: 'GothicA1',
        }}
      >
        Instructor: James Nicholas
      </h4>
      
      <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
        IN THIS MODULE YOU WILL:
      </h4>
      <ul
        style={{
          fontSize:'30px',
          paddingLeft: '30px',
          lineHeight: '1.8',
          fontFamily: 'EditorNote',
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
          marginBottom: '10px',
          fontFamily: 'Sevillana',
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
          fontSize:'30px',
          paddingLeft: '30px',
          lineHeight: '1.8',
          fontFamily: 'EditorNote',
        }}
      >
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
          marginBottom: '10px',
          fontFamily: 'Sevillana',
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
          fontFamily: 'GothicA1',
        }}
      >
        Instructor: James Nicholas
      </h4>
      
      <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
        IN THIS MODULE YOU WILL:
      </h4>
      <ul
        style={{
          fontSize:'30px',
          paddingLeft: '30px',
          lineHeight: '1.8',
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
          marginBottom: '10px',
          fontFamily: 'Sevillana',
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
          fontSize:'30px',
          paddingLeft: '30px',
          lineHeight: '1.8',
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
      </section>
      {/* Trainner Details 1 */}
     
      <div style={{
  padding: '30px',
  backgroundColor: '#',
  fontFamily: "'Georgia', serif",
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(121, 255, 19, 0.1)',
}}>
 <h1 
  className="mb-12 text-center animate-text  gradient-1" 
  style={{ 
    fontFamily: 'GothicA1', 
    fontSize: '2.5rem', 
    color: 'white', 
    marginBottom: '20px', 
    letterSpacing: '2px', 
    textTransform: 'uppercase'
  }}
>
  INSTRUCTORS
</h1>
  <h3 className="text-center" style={{ 
    fontFamily: 'Georgia', 
    fontSize: '1.2rem', 
    color: '#4a4a4a', 
    marginBottom: '40px' 
  }}>
   
  </h3>

  {/* Content Section */}
  <div style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '10px',
    flexWrap: 'wrap',
  }}>
    {/* First Card */}
    <div style={{
      flex: '1 1 calc(30% - 20px)',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    }}>
      <img
        src="/img/photos/Mar-Barroso.webp"
        alt="Coaching setup"
        style={{ width: '100%', borderRadius: '10px', marginBottom: '25px' }}
      />
      <h2  style={{ 
        fontFamily: 'GothicA1', 
        fontSize: '1.5rem', 
        color: '#3b3b3b', 
        marginBottom: '10px' ,
        color:'#009990', 
      }}>
       Mar Barroso
      </h2>
      <p style={{ 
        fontSize: '0.7rem', 
        color: '#3b3b3b', 
        marginBottom: '20px' 
      }}>
        Mar Barroso has a master’s degree in clinical and health psychology, a bachelor’s in psychology, and a bachelor’s in human resources with an associate in training management. <br/>
 
 She has more than 13 years of experience in clinical practice.  Mar is a Bodynamic® educational therapist and part of the international training team of Bodynamic International®. She teaches Foundation Training, Practitioner Training, and Shock Trauma Training in Portugal, Spain, and Turkey. <br/>
  
 Mar is the founder and CEO of SOMATIC—School of Body Psychotherapies (est. 2014), the senior assistant and official representative for Somatic Experiencing® in Portugal, and the Trainer for Bodynamic International® in Portugal and Spain, with more than 600 enrolled students. She is also an assistant teacher with Ditte Marcher for shock trauma.<br/>
  
 Additionally, she is trained in other areas, such as Cognitive Behavioral Therapy (CBT), Children's Shock Trauma with Maggie Klein, Developing Trauma and Somatic Experiencing with Peter Levine, Clinical Case Studies with Stephen Porges, Spirituality, and Reorienting Birth with Lisbeth Marcher. <br/>
  
 She lives in Portugal, is married, and is the mother of two amazing teenagers. She loves people, nature, and dancing.
 
      </p>
      <p style={{color:'#009990'}}>Contact:
@ <a href='www.somatic.pt'> www.somatic.pt</a> <br />
<a>e.  info@somatic.pt</a> <br />
m. +351915680076
</p>
    </div>

    {/* Second Card */}
    <div style={{
      flex: '1 1 calc(30% - 20px)',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    }}>
      <img
        src="/img/photos/james-nicholas.jpeg"
        alt="Coaching setup"
        style={{ width: '100%', borderRadius: '10px', marginBottom: '15px' }}
      />
      <h2 style={{ 
        fontFamily: 'GothicA1', 
        fontSize: '1.5rem', 
      color:'#009990', 
        marginBottom: '10px' 
      }}>
       James Nicholas
      </h2>
      <p style={{ 
        fontSize: '0.7rem', 
        color: '#3b3b3b', 
        marginBottom: '20px' 
      }}>
       James Nicholas is a certified Bodynamic® therapist and Bodynamic® analyst serving Southern California and is one of the North American training coordinators for Bodynamic® International. He is an attorney and member in good standing of the California Bar and an associate clinical social worker licensed in California. He received his B.A. in philosophy and history from UCLA, J.D. from Northwestern University, and M.S.W. from USC.
       James has a background in massage therapy, Chua Ka, Tai Chi, cranial-sacral techniques, and bodywork.  His focus areas include individual therapy, trauma, attachment, couples counseling, mediation/conflict resolution, and family systems.  He also specializes in bodymapping (conducting and reading).  In addition to private practice, James works as an associate clinician at the USC Center for Work and Family Life. He lives in San Diego with his wife and 7-year-old son.
      <p style={{color:'#009990'}}>James Nicholas,
        JD, MSW, ASW 
Certified Bodynamic Psychotherapist <br/>
email- James@Bodynamic.com</p>
      </p>
    </div>
  </div>
</div>





      {/* video section */}

    </div>
  </section>;
};

export default Banner5;