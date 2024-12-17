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
          style={{ padding: '10px 20px' }}
        >
          <a className="navbar-brand" href="#home">
           <img src="/img/sowilo.jpeg" alt="hello"  style={{width:'100px'}}/>
          </a>
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
                <a className="nav-link" href="#bodynamic">
                  Bodynamic Foundation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#training">
                  Training Details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#instructions">
                  Instructions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
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
          </div>
        </nav>
      </header>

      {/* ========== Main Content ========== */}
      <main className="content-wrapper" style={{ width: '100vw', margin: 0, padding: 0 }}>
        {/* Home Section */}
        

        {/* Sowilo Section */}
        <section id="">
          <About24 />
        </section>

        {/* Shiital Section */}
        <section id="sowilo" >
          <Testimonial18 />
        </section>

        {/* Bodynamic Foundation Section */}
        <section id="shiital" >
          <Portfolio4 />
          </section>

        {/* Training Details Section */}
        <FullScreenCards />
     
          <Banner5 />
  

        {/* Instructions Section */}
        
          <Services26 />
       

        {/* Contact Section */}
        
          <CTA9 />
       

        {/* Registration Section */}
        

        {/* Course Video Section */}
       
          <Blog5 />
        
      </main>

      {/* Footer Section */}
      
        <Footer9 />
   
    </Fragment>
  );
};

export default Demo23;
