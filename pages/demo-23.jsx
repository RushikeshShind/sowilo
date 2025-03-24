import { Fragment } from 'react';
import useProgressbar from 'hooks/useProgressbar';
import { Blog5 } from 'components/blocks/blog';
import { About24 } from 'components/blocks/about';
import { Footer9 } from 'components/blocks/footer';
import { Banner5 } from 'components/blocks/banner';
import { CTA9 } from 'components/blocks/call-to-action';
import { Portfolio4 } from 'components/blocks/portfolio';
import { Testimonial18 } from 'components/blocks/testimonial';
import PageProgress from 'components/common/PageProgress';
import { FullScreenCards } from 'components/blocks/FullScreenCards';
import { InstructorCards } from 'components/blocks/instructors';
import { CTA6 } from 'components/blocks/call-to-action';
import ContactForm from 'components/common/ContactForm';

const Demo23 = () => {
  useProgressbar();

  return (
    <Fragment>
      <PageProgress />

      {/* ========== Header ========== */}
      <header className="wrapper bg-soft-primary">
      <nav className="navbar navbar-expand-lg navbar-dark  sticky-top" style={{backgroundColor:' #0e5d6e'}}>
  <button
    className="navbar-toggler order-1"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="white"
    className="bi bi-list"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M2.5 12.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm0-5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm0-5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11z"
    />
  </svg>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav" style={{fontSize:'20px'}}>
  <ul className="navbar-nav me-auto text-start " style={{color: '#eab085', fontFamily: 'byutih' , fontWeight: 'bold'}}>
    <li className="nav-item" style={{color: '#eab085'}}>
      <a className="nav-link " style={{color: '#eab085' }}href="#home">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link "style={{color: '#eab085'}} href="#sowilo">Sowilo</a>
    </li>
    <li className="nav-item">
      <a className="nav-link "style={{color: '#eab085'}} href="#shiital">Shiital</a>
    </li>
    <li className="nav-item">
      <a className="nav-link"style={{color: '#eab085'}} href="#contact">Contact</a>
    </li>
    <li className="nav-item">
      <a className="nav-link "style={{color: '#eab085'}} href="#bodynamic">Bodynamic Foundation</a>
    </li>
    <li className="nav-item">
      <a className="nav-link "style={{color: '#eab085'}}href="#training">Training Outline</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" style={{color: '#eab085'}} href="#instructors">Trainers</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" style={{color: '#eab085'}} href="#registration">Registration</a>
    </li>
    <li className="nav-item">
      <a className="nav-link " style={{color: '#eab085'}} href="#Testimonials">Testimonials</a>
    </li>
  </ul>
  <a className="navbar-brand ms-auto" href="#home">
    <img src="/img/sowilo1.png" alt="Sowilo Logo" style={{ width: '100px' }} />
  </a>
</div>

</nav>

      </header>

      {/* ========== Main Content ========== */}
      <main className="content-wrapper" style={{ width: '100vw', margin: 0, padding: 0, fontFamily:'byutih' }}>
        <section id="">
          <About24 />
        </section>
        <section id="sowilo">
          <Testimonial18 />
        </section>
        <section id="shiital" style={{background:'#FFFBF4'}}>
          <Portfolio4 />
        </section>
        <section id="contact">
          <CTA9 />
        </section>

        <section
  style={{
    fontFamily: 'Cormorant',
    display: "flex",
    flexDirection: "row", // Place images and content in a row
    alignItems: "center",
    justifyContent: "space-between", // Distribute items across the section
    padding: "20px",
    backgroundColor: "#DAEAED", // Light teal background
    color: "#000", // Black font color
  }}
>
  {/* Left Image */}
  <div
    style={{
      flex: "1",
      display: "flex",
      justifyContent: "flex-end", // Move image closer to center
      alignItems: "center",
      paddingRight: "100px", // Add spacing towards the center
    }}
  >
    <img
      src="/img/photos/B-Logo6 BIG (1).png"
      alt="Website Checklist"
      style={{
        width: "150px", // Adjust the size of the image
        height: "auto",
        objectFit: "contain",
        boxShadow: "0 4px 8px rgba(57, 57, 57, 0.2)",
      }}
    />
  </div>

  {/* Center Content */}
  <div
    style={{
      flex: "2",
      textAlign: "center", // Center-align the content
      padding: "0 20px", // Add spacing between content and images
    }}
  >
    <h2
      style={{
        fontSize: "40px", // Scaled font size for smaller screens
        marginBottom: "10px",
        fontFamily: 'byutih',
        color: '#0e5d6E',
      }}
    >
      Bodynamic Foundation Training
    </h2>
    <p
      style={{
        fontSize: "28px",
        marginBottom: "20px",
        fontFamily: 'byutih',
        color: '#0e5d6E',
      }}
    >
      Orlando, USA
    </p>
    <h2
      style={{
        fontSize: "25px", // Scaled font size for smaller screens
        marginBottom: "10px",
        fontFamily: 'byutih',
        color: 'rgb(0, 0, 0)',
        letterSpacing: "1px",
      }}
    >Cost $5000</h2>
    <a
      href="https://www.bodynamic.com/"
      style={{ color: '#eab085', fontSize: '20px' }}
    >
      Bodaynamic International
    </a>
  </div>

  {/* Right Image */}
  <div
    style={{
      flex: "1",
      display: "flex",
      justifyContent: "flex-start", 
      alignItems: "center",
      paddingLeft: "100px", 
    }}
  >
    <img
      src="\img\sowiloblue.jpeg"
      alt="Sowilo Logo"
      style={{
        width: "180px", 
        height: "auto",
      }}
    />
  </div>
</section>





        <section id="bodynamic">
          <FullScreenCards />
        </section>
        
        <section id="training">
          <Banner5 />
        </section>
        <section id="instructors">
          <InstructorCards />
        </section>
        <section id="Enrollment Section">
          <CTA6 />
        </section>
        <section id="Testimonials">
          <Blog5 />
        </section>
        <section id="registration">
          <ContactForm />
        </section>
      </main>

      {/* Footer Section */}
      <Footer9 />
    </Fragment>
  );
};

export default Demo23;
