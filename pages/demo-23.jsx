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
      <nav className="navbar navbar-expand-lg navbar-dark  sticky-top" style={{backgroundColor:'rgb(38, 108, 102)'}}>
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
  <a className="navbar-brand ms-auto order-2" href="#home">
    <img src="/img/sowilo1.png" alt="Sowilo Logo" style={{ width: '100px' }} />
  </a>
  <div className="collapse navbar-collapse order-3" id="navbarNav">
    <ul className="navbar-nav ms-auto text-center">
      <li className="nav-item">
        <a className="nav-link text-white" href="#home">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#sowilo">Sowilo</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#shiital">Shiital</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#contact">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#bodynamic">Bodynamic Foundation</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#training">Training Outline</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#instructors">Trainers</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#registration">Registration</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#Testimonials">Testimonials</a>
      </li>
    </ul>
  </div>
</nav>

      </header>

      {/* ========== Main Content ========== */}
      <main className="content-wrapper" style={{ width: '100vw', margin: 0, padding: 0, fontFamily:'Cormorant' }}>
        <section id="">
          <About24 />
        </section>
        <section id="sowilo">
          <Testimonial18 />
        </section>
        <section id="shiital">
          <Portfolio4 />
        </section>
        <section id="contact">
          <CTA9 />
        </section>

        <section
  style={{
    fontFamily:'Cormorant',
    display: "flex",
    flexDirection: "column", // Stack content vertically for mobile
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#c3d9d9", // Light teal background
    color: "#000", // Black font color
  }}
>
  <div
    style={{
      width: "100%",
      maxWidth: "600px", // Restrict width on larger screens
      textAlign: "center", // Center-align content for mobile
      marginBottom: "20px", // Add spacing below the text
    }}
  >
    <h2
      style={{
        fontSize: "1.8rem", // Scaled font size for smaller screens
        fontWeight: "bold",
        marginBottom: "10px",
      }}
    >
      Bodynamic Foundation Training
    </h2>
    <p
      style={{
        fontSize: "1rem",
        marginBottom: "20px",
      }}
    >
      Orlando, USA
    </p>
    <a href="https://www.bodynamic.com/" style={{color:'rgb(228, 135, 28)'}}>Bodaynamic International</a>
  </div>
  <div
    style={{
      width: "100%",
      maxWidth: "400px", // Restrict image size on mobile
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <img
      src="/img/photos/B-Logo5-SMALL.png"
      alt="Website Checklist"
      style={{
        width: "100%", // Make image responsive to parent width
        maxWidth: "500px", // Restrict maximum width for smaller devices
        height: "auto",
        objectFit: "contain",
        boxShadow: "0 4px 8px rgba(57, 57, 57, 0.2)",
        transform: "translate(0, 0)", // Remove floating effect on mobile
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
