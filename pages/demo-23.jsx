import { Fragment } from 'react';

// -------- custom hook -------- //
import useProgressbar from 'hooks/useProgressbar';

// -------- custom components -------- //
import { Blog5 } from 'components/blocks/blog';
import { Hero23 } from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { About24 } from 'components/blocks/about';
import { Footer9 } from 'components/blocks/footer';
import { Banner5 } from 'components/blocks/banner';
import { Services26 } from 'components/blocks/services';
import { CTA9 } from 'components/blocks/call-to-action';
import { Portfolio4 } from 'components/blocks/portfolio';
import { Testimonial18 } from 'components/blocks/testimonial';
import PageProgress from 'components/common/PageProgress';
import {FullScreenCards} from 'components/blocks/FullScreenCards';
import { InstructorCards } from 'components/blocks/instructors';
import {CTA8} from 'components/blocks/call-to-action';
import {CTA6} from 'components/blocks/call-to-action';
import ContactForm from 'components/common/ContactForm';

const Demo23 = () => {
  // Used for the animated line
  useProgressbar();

  return (
    <Fragment>
      <PageProgress />

      {/* ========== Header ========== */}
      <header className="wrapper bg-soft-primary">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
          style={{ padding: '10px 70px', fontFamily:'Cormorant' }}
        >
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sowilo">
                  Sowilo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#shiital">
                  Shiital
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#bodynamic">
                  Bodynamic Foundation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#training">
                Training Outline
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#instructors">
                Trainers
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#registration">
                  Registration
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#course-video">
                  Course Video
                </a>
              </li>
            </ul>
            <a className="navbar-brand" href="#home">
           <img src="/img/sowilo.jpeg" alt="hello"  style={{width:'100px'}}/>
          </a>
          </div>
        </nav>
      </header>

      {/* ========== Main Content ========== */}
      <main className="content-wrapper" style={{ width: '100vw', margin: 0, padding: 0 , fontFamily:'Cormorant'}}>
        {/* Home Section */}
        

        {/* Sowilo Section */}
        <section id="">
          <About24 />
        </section>

        
        <section id="sowilo" >
          <Testimonial18 />
        </section>

        

        
        <section id="shiital">
          <Portfolio4 />
          </section>

           {/* Contact Section */}
           <section id="contact">
           <CTA9 /></section>

        {/* Training Details Section */}
        <section id='bodynamic'><FullScreenCards /></section>
        
     
        <CTA8/>
      <section id="training">
      <Banner5 />
      </section>
          
  

        {/* Instructions Section */}
        <section id='instructors'></section>
          <InstructorCards/>
       
           

           <section id='Enrollment Section'><CTA6/></section>
        
       
       

        {/* Registration Section */}
        

        {/* Course Video Section */}
       
          <Blog5 />

         <ContactForm/>
        
      </main>

      {/* Footer Section */}
      
        <Footer9 />
   
    </Fragment>
  );
};

export default Demo23;
