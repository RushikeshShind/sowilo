import Carousel from '../Carousel';
import TestimonialCard2 from './TestimonialCard2';

// ============================================================
const TestimonialCard4 = ({
  className = '',
  sliderWrapperClassname = 'p-10 p-md-11 p-lg-13'
}) => {
  return <div className={`card shadow-lg ${className}`}>
      <div className="row gx-0">
        <div style={{
        backgroundImage: 'url(/img/photos/tm1.jpg)'
      }} className="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start" />

        <div className="col-lg-6">
          <div className={sliderWrapperClassname}>
            <div className="swiper-container dots-closer mb-4">
              <Carousel grabCursor slidesPerView={1} navigation={false}>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default TestimonialCard4;