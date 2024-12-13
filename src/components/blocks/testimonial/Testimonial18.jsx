import Carousel from 'components/reuseable/Carousel'; // -------- data -------- //

import { testimonialList6 } from 'data/testimonial-list';

const Testimonial18 = () => {
  return <section className="wrapper image-wrapper bg-image bg-overlay text-white" style={{
    backgroundImage: 'url(/img/photos/45678.jpg)'
  }}>
      <div className="container py-14 py-md-17 text-center">
        <i className="icn-flower text-white fs-30 opacity-50" />
        <div className="row mt-3" >
          <div className="col-xl-9 col-xxl-8 mx-auto">
            <div className="swiper-container dots-light dots-closer mb-6 "style={{fontFamily:'EditorNote', fontWeight:'120px'}} >
              <Carousel grabCursor navigation={false} slidesPerView={1}>
                {testimonialList6.map(({
                id,
                name,
                review
              }) => <blockquote className="border-0 fs-24 mb-0" key={id}>
                    <p>“{name}”</p>
                    <div className="blockquote-details justify-content-center">
                      <div className="info p-0">
                        <h6 className="mb-0 text-white" style={{fontFamily:'EditorNote' , fontsize:'20px'}}>At SOWILO, we are dedicated to guiding individuals on a journey toward wholeness, helping them align with their true essence and realize their fullest potential. Inspired by the meaning of “SOWILO” (the sun – symbolizing victory, guidance, mastery, wholeness, and seat of the soul), we believe that the answers people seek already reside within them. 
                        <br/> <br/>
We integrate evidence-based practices with alternative therapeutic approaches to support physical, emotional, and spiritual well-being. By harnessing life’s transformative energy, we aspire to be a catalyst for renewal, growth, and balance.
<br/><br/>
Our approach is rooted in fostering deeper self-awareness and meaningful connection with the world. At SOWILO, we are committed to providing the foundation for lasting vitality and fulfillment, helping individuals embrace their unique path to self-realization.</h6>
                      </div>
                    </div>
                  </blockquote>)}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Testimonial18;