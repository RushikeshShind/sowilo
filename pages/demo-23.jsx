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
        <section className="wrapper" style={{ padding: '60px 20px', backgroundColor: '#508C9B' }}>
          <div className="container">
            <About24 />
          </div>
        </section>

        

        {/* Testimonial Section */}
        <section
          className="testimonial-section"
          style={{
            padding: '80px 20px',
            backgroundColor: '#F3F6F8',
          }}
        >
          <Testimonial18 />
        </section>

        {/* Portfolio Section */}
        <section
          className="portfolio-section"
          style={{
            padding: '80px 20px',
            backgroundColor: '#E8F1F2',
          }}
        >
          <Portfolio4 />
        </section>

        {/* Banner Section */}
        <section
          className="banner-section"
          style={{
            padding: '60px 20px',
            backgroundColor: '#D1E8E2',
            textAlign: 'center',
          }}
        >
          <Banner5 />
        </section>

        {/* Blog Section */}
        <section
          className="blog-section"
          style={{
            padding: '80px 20px',
            backgroundColor: '#FFFFFF',
          }}
        >
          <div className="container">
            <Blog5 />
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer
        className="footer-section"
        style={{
          backgroundColor: '#333',
          color: '#FFF',
          padding: '40px 20px',
          textAlign: 'center',
        }}
      >
        <Footer9 />
      </footer>
    </Fragment>
  );
};

export default Demo23;
