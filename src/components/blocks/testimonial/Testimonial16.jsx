import Carousel from 'components/reuseable/Carousel'; // -------- data-------- //


const Testimonial16 = () => {
  return <div className="card shadow-lg mt-n21 mt-md-n23">
      <div className="row gx-0">
        <div className="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start" style={{
        backgroundImage: 'url(/img/photos/tm2.jpg)'
      }} />

        <div className="col-lg-6">
          <div className="p-10 p-md-11 px-lg-13 py-lg-14">
            <div className="swiper-container dots-closer mb-6">
              <Carousel grabCursor slidesPerView={1} navigation={false}>
              
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default Testimonial16;