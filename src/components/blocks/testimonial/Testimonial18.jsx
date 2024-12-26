import Carousel from 'components/reuseable/Carousel'; // -------- data -------- //

import { testimonialList6 } from 'data/testimonial-list';

const Testimonial18 = () => {
  return <section className="wrapper image-wrapper bg-image bg-overlay text-white" style={{
    backgroundImage: 'url(/img/photos/sowilo2.png)'
  }}>
      <div className="container-fluid p-0 text-center" style={{ width: '100%', height: '50vh' }}>
  
  <div className="row justify-content-center m-0" style={{ width: '100%' }}>
    <div className="col-xl-9 col-xxl-8 mx-auto p-0">
      <div className="swiper-container dots-light dots-closer mb-6 display-2" style={{ color: 'white', fontWeight: '120px' }}>
        <Carousel grabCursor navigation={false} slidesPerView={1}>
          {testimonialList6.map(({ id, name, review }) => (
            <div className="display-1 fs-20 mb-1" style={{fontFamily:'Cormorant'}} key={id}>
              <p></p>
              <p className='display-1 '>{name}</p>
              <div className="justify-content-center" style={{ fontFamily: 'Cormorant', padding: '0', width: '100%' }}>
                <div className="info" style={{ width: '100%' }}>
                  <h6 className="fs-15" style={{  fontSize:'35px',
              lineHeight: '1.4',
              marginBottom: '1rem',
              fontFamily: 'Cormorant',color:'white' }}>
                    At SOWILO, we are dedicated to guiding individuals on a journey toward wholeness, helping them align with their true essence and realize their fullest potential. Inspired by the meaning of “SOWILO” (the sun – symbolizing victory, guidance, mastery, wholeness, and seat of the soul), we believe that the answers people seek already reside within them.
                    <br /><br />
                    We integrate evidence-based practices with alternative therapeutic approaches to support physical, emotional, and spiritual well-being. By harnessing life’s transformative energy, we aspire to be a catalyst for renewal, growth, and balance.
                    <br /><br />
                    Our approach is rooted in fostering deeper self-awareness and meaningful connection with the world. At SOWILO, we are committed to providing the foundation for lasting vitality and fulfillment, helping individuals embrace their unique path to self-realization.
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  </div>
</div>


    </section>;
};

export default Testimonial18;