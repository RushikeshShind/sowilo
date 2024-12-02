import { Fragment } from 'react'; // -------- custom component -------- //

import { Navbar } from 'components/blocks/navbar';
import { Tiles3 } from 'components/elements/tiles';
import { Footer9 } from 'components/blocks/footer';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import PageProgress from 'components/common/PageProgress';
import ContactForm from 'components/common/ContactForm';
import NextLink from 'components/reuseable/links/NextLink'; // -------- data -------- //

const breadcrumb = [{

}];

const ContactTwo = () => {
  return <Fragment>
      <PageProgress />

      {
      /* ========== header section ========== */
    }
      <header className="wrapper bg-soft-primary">
        <Navbar language button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />} />
      </header>

      <main className="content-wrapper">
        {
        /* ========== page title section ========== */
      }
       

        <div className="wrapper bg-light angled upper-end">
          <div className="container py-14 py-md-16">
            {
            /* ========== contact info section ========== */
          }
            {/* <div className="row gy-10 gx-lg-8 gx-xl-12 mb-16 align-items-center">
              <div className="col-lg-7 position-relative">
                <div className="shape bg-dot primary rellax w-18 h-18" style={{
                top: 0,
                left: '-1.4rem',
                zIndex: 0
              }} />

                <Tiles3 />
              </div>

              <div className="col-lg-5">
                <h2 className="display-4 mb-8">Convinced yet? Let's make something great together.</h2>
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-6 mt-n1">
                      <i className="uil uil-location-pin-alt" />
                    </div>
                  </div>

                  <div>
                    <h5 className="mb-1">Address</h5>
                    <address>
                      Moonshine St. 14/05 Light City, <br className="d-none d-md-block" />
                      London, United Kingdom
                    </address>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-6 mt-n1">
                      <i className="uil uil-phone-volume" />
                    </div>
                  </div>

                  <div>
                    <h5 className="mb-1">Phone</h5>
                    <p>00 (123) 456 78 90</p>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-6 mt-n1">
                      <i className="uil uil-envelope" />
                    </div>
                  </div>

                  <div>
                    <h5 className="mb-1">E-mail</h5>
                    <p className="mb-0">
                      <a href="mailto:sandbox@email.com" className="link-body">
                        sandbox@email.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            {
            /* ========== contact form section ========== */
          }
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <h2 className="display-4 mb-3 text-center">Drop Us a Line</h2>
                <p className="lead text-center mb-10">
                  Reach out to us from our contact form and we will get back to you shortly.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>

      {
      /* ========== footer section ========== */
    }
      <Footer9 />
    </Fragment>;
};

export default ContactTwo;