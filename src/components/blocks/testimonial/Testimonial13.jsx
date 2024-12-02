import Carousel from 'components/reuseable/Carousel';
import FigureImage from 'components/reuseable/FigureImage'; // -------- data -------- //


const Testimonial13 = () => {
  return <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-300 text-white" style={{
    backgroundImage: 'url(/img/photos/bg2.jpg)'
  }}>
      <div className="container py-14 py-md-17">
        <h2 className="display-4 mb-5 text-white text-center">Happy Customers</h2>
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <div className="swiper-container dots-light dots-closer text-center mb-6">
              <Carousel slidesPerView={1} navigation={false} grabCursor>
             
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Testimonial13;