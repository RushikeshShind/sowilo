import dayjs from 'dayjs';
import Link from 'next/link';
// -------- custom components -------- //
import Carousel from 'components/reuseable/Carousel';
import NextLink from 'components/reuseable/links/NextLink';
import carouselBreakpoints from 'utils/carouselBreakpoints'; // -------- data -------- //
import ContactForm from 'components/common/ContactForm';
 

const Blog5 = () => {
  return <section className="wrapper bg-soft-primary">
      <div className="row">
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                
              
              <h1 className="col-lg-12  text-center " style={{fontFamily: 'Space Grotesk'}}>Register Now</h1>
                <p className="lead text-center mb-10">
                  
                </p>

                <ContactForm />
              </div>
            </div>
    </section>;
};

export default Blog5;