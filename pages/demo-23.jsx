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

const Demo23 = () => {
  // Used for the animated line
  useProgressbar();

  return (
    <Fragment>
      <PageProgress />

      {/* ========== Header ========== */}
      <header className="wrapper bg-soft-primary">
         <Navbar
          info
          search
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none"
        /> 
        
      </header>

      {/* ========== Main Content ========== */}
      <main
        className="content-wrapper"
        style={{
          width: '100vw', // Full width
          backgroundColor: '#F9F9F9', // Light background
          margin: 0,
          padding: 0,
        }}
      >
        

        {/* About Section */}
       
            <About24 />
        

        

        {/* Testimonial Section */}
        
          <Testimonial18 />
       

        {/* Portfolio Section */}
      
          <Portfolio4 />
       

        {/* Banner Section */}
       
          <Banner5 />
      

        {/* Blog Section */}
        
            <Blog5 />
          
      </main>

      {/* Footer Section */}
      <footer
        className="footer-section"
        style={{
          backgroundColor: '',
          color: '',
          padding: '40px 20px',
          textAlign: '',
        }}
      >
        <Footer9 />
      </footer>
    </Fragment>
  );
};

export default Demo23;
