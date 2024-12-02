import Carousel from 'components/reuseable/Carousel';
import carouselBreakpoints from 'utils/carouselBreakpoints'; // -------- data -------- //


const Testimonial19 = () => {
  return <section id="testimonials">
      <div className="wrapper image-wrapper bg-image bg-overlay" style={{
      backgroundImage: 'url(/img/photos/bg35.jpg)'
    }}>
        <div className="container pt-15 pb-13">
          <h2 className="display-5 mb-4 text-center text-white">Happy Customers</h2>

          <div className="swiper-container dots-closer dots-light dots-light-75">
            <Carousel grabCursor spaceBetween={0} navigation={false} breakpoints={carouselBreakpoints}>
            
            </Carousel>
          </div>
        </div>
      </div>
    </section>;
};

export default Testimonial19;