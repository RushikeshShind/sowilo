import dynamic from 'next/dynamic';

const Plyr = dynamic(() => import('plyr'), { ssr: false });
import styles from '../styles/Home.module.css';
const Banner5 = () => {
  return <section className="wrapper bg-soft-primary responsive-section">
    <div className="container py-4 py-md-6 py-lg-8">

      <div className="row">
        <div className="col-xl-9 col-xxl-7 mx-auto text-center">
          <i className="icn-flower text-leaf fs-30 opacity-25"></i>
          <h2 className="display-2 mb-4" style={{ fontFamily: 'EditorsNote', fontWeight: 300 }}>
            Bodynamic Foundation Training Edmonton</h2>
          <a
            href="https://www.bodynamic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <h6>Bodynamic International</h6>
          </a>



          <p className="display-12 text-center mt-12 mb-15 " style={{ fontFamily: 'GothicA1' }}>Bodynamics is a Somatic Developmental Psychology system a groundbreaking paradigm of empirically researched psychology with a focus on practical application. This innovative approach integrates body awareness and developmental stages to enhance personal growth and healing. With a global reach, Bodynamic International offers comprehensive training programs, empowering individuals and professionals worldwide to deepen their understanding of embodiment, self-awareness, and interpersonal dynamics.</p>


        </div>

        <h2 className='text-center mb-8' style={{ fontFamily: 'EditorsNote' }}>Training Details</h2>
        <p style={{ fontFamily: 'GothicA1' }}>The Foundation Training is a one-year introductory program in the Bodynamic System. Throughout this foundational course, you will delve into character structures, character positions, and the fundamental concepts essential for understanding contact and communication as presented by the system. These concepts include mutual connection, dignity, boundaries, centering, and grounding.

          The detailed breakdown of the various developmental phases during childhood, paired with central developmental issues and their association with evolving defense mechanisms, offers a framework for comprehending human expression. Through this training, you will sharpen your skills, enabling you to be more present and accurate in your professional endeavors.
        </p>
        <div className="container">
          {/* Section 1 */}
          <div className="section">
            <h2 style={{ fontFamily: 'EditorsNote' }}>What will we cover in this training?</h2>
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
          <div className="section" style={{ fontFamily: 'EditorsNote' }}>
            <h2>Why should I take Bodynamic training?</h2>
            <p style={{ fontFamily: 'GothicA1' }}>
              The Bodynamic system has been in existence for 40 years, emphasizing the research and understanding of the body’s
              connection to psychology and development from its inception. It is among the pioneering schools to holistically
              integrate the body, brain, and human behavior. This system provides an unparalleled array of tools and techniques
              to deepen one’s understanding of oneself and others. Uniquely, it is designed to render psychological progress
              “measurable,” offering a novel degree of practicality for those who utilize this material, whether in their
              professional or personal lives.
            </p>
          </div>

          {/* Section 3 */}
          <div className="section mb-10" style={{ fontFamily: 'GothicA1' }}>
            <h2>Who is this training for?</h2>
            <div
              className="list-container"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px', // Adjust the gap between the two lists if needed
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
      <h1 className='text-center' style={{ fontFamily: 'EditorsNote' }}>Foundation Training Outline</h1>
      <p className='text-center' style={{ fontFamily: 'GothicA1' }}>4 x 5 Day Modules = 20 Days <br /> Total

        Classes run from 10 am – 6 pm every day. <br /> Lunch break 1 pm - 2:30 pm.
      </p>
      {/* 1st Module Section */}
      <div
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9FC3C6',
    padding: '30px',
    minHeight: '100vh', // Ensure full height for better responsiveness
  }}
>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column', // Default for small screens
      maxWidth: '1200px',
      width: '100%',
      backgroundColor: 'white',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    }}
  >
    {/* Left Section with Image */}
    <div
      style={{
        flex: 1,
        backgroundImage: `url('https://via.placeholder.com/600x600')`, // Replace with actual image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px', // Default height for small screens
      }}
    >
      <div className="image-container">
        <img
          src="/img/avatars/t6.jpg" // Replace with actual image path
          alt="Kristin sitting on a couch"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
    </div>

    {/* Right Section with Content */}
    <div
      style={{
        flex: 1,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h3
        style={{
          color: '#AF8B65',
          fontSize: '20px',
          fontWeight: 650,
          marginBottom: '10px',
          fontFamily: 'Sevillana',
        }}
      >
        module 1
      </h3>
      <h2
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
      >
        April 1 – 5, 2025
      </h2>
      <h4
        style={{
          color: '#AF8B65',
          fontWeight: 500,
          marginBottom: '15px',
          fontFamily: 'GothicA1',
        }}
      >
        INSTRUCTOR : James Nicholas
      </h4>
      <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
        IN THIS MODULE YOU WILL:
      </h4>
      <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
        <li>Bodynamic System Overview</li>
        <li>Bodyknot</li>
        <li>Layers of Feelings</li>
        <li>Ego Aspects</li>
        <li>Existence Developmental Phase</li>
      </ul>
    </div>
  </div>
</div>

      {/* 2nd module */}
      <div
        style={{
          display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9FC3C6',
    padding: '30px',
    minHeight: '100vh',
        }}
      >
        <div
          style={{
            display: 'flex',
      flexDirection: 'column', // Default for small screens
      maxWidth: '1200px',
      width: '100%',
      backgroundColor: 'white',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Left Section with Image */}
          <div
            style={{
              flex: 1,
              backgroundImage: `url('https://via.placeholder.com/600x600')`, // Replace with actual image URL
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '300px', // Default height for small screens
            }}
          >
            <div className={styles.imageContainer}>
              <img
                src="/img/avatars/t6.jpg" // Replace this with the actual image path
                alt="Kristin sitting on a couch"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                className={styles.image}
              />
            </div>
          </div>

          {/* Right Section with Content */}
          <div
            style={{
              flex: 1,
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h3 className='mb-5' style={{ color: '#AF8B65', fontSize: '20 px', fontWeight: 650, marginBottom: '10px', fontFamily: 'Sevillana' }}>
              module 2
            </h3>
            <h2 className='mb-1' style={{ fontSize: '28px', fontWeight: 'bold' }}>
              June 3  – 7, 2025
            </h2>
            {/* <hr  style={{ borderTop: '1px solid #000', marginBottom: '10px' }} /> */}
            <h4 style={{ color: '#AF8B65', fontWeight: 500, marginBottom: '15px', fontFamily: 'GothicA1' }}>
              INSTRUCTOR : Mar Barroso


            </h4>
            <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>IN THIS MODULE YOU WILL:</h4>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              <li> Need Developmental Phase</li>
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
    backgroundColor: '#9FC3C6',
    padding: '30px',
    minHeight: '100vh',
        }}
      >
        <div
          style={{
            display: 'flex',
      flexDirection: 'column', // Default for small screens
      maxWidth: '1200px',
      width: '100%',
      backgroundColor: 'white',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Left Section with Image */}
          <div
            style={{
              flex: 1,
              backgroundImage: `url('https://via.placeholder.com/600x600')`, // Replace with the actual image URL
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
            }}
          >
            <div className={styles.imageContainer}>
              <img
                src="/img/avatars/t6.jpg" // Replace this with the actual image path
                alt="Kristin sitting on a couch"
                className={styles.image}
              />
            </div>
          </div>

          {/* Right Section with Content */}
          <div
            style={{
              flex: 1,
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h3 className='mb-5' style={{ color: '#AF8B65', fontSize: '20 px', fontWeight: 650, marginBottom: '10px', fontFamily: 'Sevillana' }}>
              module 3
            </h3>
            <h2 className='mb-1' style={{ fontSize: '28px', fontWeight: 'bold' }}>
              Sep 2 – 6, 2025
            </h2>
            {/* <hr  style={{ borderTop: '1px solid #000', marginBottom: '10px' }} /> */}
            <h4 style={{ color: '#AF8B65', fontWeight: 500, marginBottom: '15px', fontFamily: 'GothicA1' }}>
              INSTRUCTOR : James Nicholas

            </h4>
            <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>IN THIS MODULE YOU WILL:</h4>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              <li> Will Developmental Phase</li>
              <li>
                Love/Sexuality Developmental Phase
              </li>

            </ul>
          </div>
        </div>
      </div>

      {/* 4th module */}
      <div className='mb-12'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#9FC3C6', // Matches the teal background
          padding: '30px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column', // Default for small screens
            maxWidth: '1200px',
            width: '100%',
            backgroundColor: 'white',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Left Section with Image */}
          <div
            style={{
              flex: 1,
              backgroundImage: `url('https://via.placeholder.com/600x600')`, // Replace with the actual image URL
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
            }}
          >
            <div className={styles.imageContainer}>
              <img
                src="/img/avatars/t6.jpg" // Replace this with the actual image path
                alt="Kristin sitting on a couch"
                className={styles.image}
              />
            </div>
          </div>

          {/* Right Section with Content */}
          <div
            style={{
              flex: 1,
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h3 className='mb-5' style={{ color: '#AF8B65', fontSize: '20 px', fontWeight: 650, marginBottom: '10px', fontFamily: 'Sevillana' }}>
              module 4
            </h3>
            <h2 className='mb-1' style={{ fontSize: '28px', fontWeight: 'bold' }}>
              Oct 28  –  Nov 1, 2025
            </h2>
            {/* <hr  style={{ borderTop: '1px solid #000', marginBottom: '10px' }} /> */}
            <h4 style={{ color: '#AF8B65', fontWeight: 500, marginBottom: '15px', fontFamily: 'GothicA1' }}>
              INSTRUCTOR : Mar Barroso

            </h4>
            <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>IN THIS MODULE YOU WILL:</h4>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              <li> Opinion Developmental Phase</li>
              <li>
                Performance/Solidarity Developmental Phase
              </li>

            </ul>
          </div>
        </div>
      </div>

      {/* Trainner Details 1 */}
     
      <h1 className='mb-12 text-center' style={{fontFamily:'GothicA1',}}>Instructors</h1>
      <div className="mb-12" style={{
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#f5f2ed',
  fontFamily: "'Georgia', serif",
  flexWrap: 'wrap',
}}>
 
  {/* Left Section */}
  <div style={{
    flex: '1 1 45%',
    paddingRight: '20px',
    marginBottom: '20px',
  }}>
    <img
        src="/img/avatars/t6.jpg"
        alt="Coaching setup"
        style={{ width: '100%', borderRadius: '10px' }}
      />
    <h2>Mar Barroso</h2>
    <ul style={{ fontFamily: 'GothicA1', padding: 0 }}>
      {[
        "Mar Barroso has a master’s degree in clinical and health psychology, a bachelor’s in psychology, and a bachelor’s in human resources with an associate in training management.",
        "She has more than 13 years of experience in clinical practice.  Mar is a Bodynamic® educational therapist and part of the international training team of Bodynamic International®. She teaches Foundation Training, Practitioner Training, and Shock Trauma Training in Portugal, Spain, and Turkey.",
        "Mar is the founder and CEO of SOMATIC—School of Body Psychotherapies (est. 2014), the senior assistant and official representative for Somatic Experiencing® in Portugal, and the Trainer for Bodynamic International® in Portugal and Spain, with more than 600 enrolled students. She is also an assistant teacher with Ditte Marcher for shock trauma.",
        
      ].map((text, index) => (
        <li key={index} style={{ marginBottom: '10px' }}>
          <span style={{ color: '#000', fontSize: '0.8rem', lineHeight: '1.5' }}>
            {text}
          </span>
        </li>
      ))}
    </ul>
    <div style={{ marginTop: '20px' }}>
      <h2 style={{ fontFamily: 'Sevillana', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
        Contact
      </h2>
      <p>
        Certified Bodynamic Practitioner <br />
        www.somatic.pt <br />
        m. +351915680076<br/>
        www.bodynamicinternational.com
      </p>
    </div>
  </div>

  {/* Right Section */}
  <div style={{
    flex: '1 1 45%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  }}>
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '400px',
      padding: '10px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}>
      
    </div>
  </div>
</div>

{/* Trainer Details 2 */}
<div className="mb-12" style={{
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#f5f2ed',
  fontFamily: "'Georgia', serif",
  flexWrap: 'wrap',
}}>
  {/* Left Section */}
  <div style={{
    flex: '1 1 45%',
    paddingRight: '20px',
    marginBottom: '20px',
  }}>
    <img
        src="/img/avatars/t6.jpg"
        alt="Coaching setup"
        style={{ width: '100%', borderRadius: '10px' }}
      />
    <h2>James Nicholas</h2>
    <ul style={{ fontFamily: 'GothicA1', padding: 0 }}>
      {[
        "James Nicholas is a certified Bodynamic® therapist and Bodynamic® analyst serving Southern California and is one of the North American training coordinators for Bodynamic® International. He is an attorney and member in good standing of the California Bar and an associate clinical social worker licensed in California. He received his B.A. in philosophy and history from UCLA, J.D. from Northwestern University, and M.S.W. from USC.",
        "James has a background in massage therapy, Chua Ka, Tai Chi, cranial-sacral techniques, and bodywork. His focus areas include individual therapy, trauma, attachment, couples counseling, mediation/conflict resolution, and family systems. He also specializes in bodymapping (conducting and reading). In addition to private practice, James works as an associate clinician at the USC Center for Work and Family Life. He lives in San Diego with his wife and 7-year-old son.",
      ].map((text, index) => (
        <li key={index} style={{ marginBottom: '10px' }}>
          <span style={{ color: '#000', fontSize: '0.8rem', lineHeight: '1.5' }}>
            {text}
          </span>
        </li>
      ))}
    </ul>
    <div style={{ marginTop: '20px' }}>
      <h2 style={{ fontFamily: 'Sevillana', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
        Contact
      </h2>
      <p>James Nicholas, JD, MSW, ASW #102229 <br />
        Certified Bodynamic Psychotherapist <br />
        James@Bodynamic.com <br />
        www.bodynamicinternational.com
      </p>
    </div>
  </div>

  {/* Right Section */}
  <div style={{
    flex: '1 1 45%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  }}>
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '400px',
      padding: '10px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}>
      
    </div>
  </div>
</div>



      {/* video section */}

    </div>
  </section>;
};

export default Banner5;