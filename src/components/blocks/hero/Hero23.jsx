import Carousel2 from 'components/reuseable/Carousel2';

const Hero23 = () => {
  return <section className="wrapper bg-dark">
      <div className="swiper-container swiper-thumbs-container swiper-fullscreen nav-dark">
        <Carousel2 />

        <div className="swiper-static">
          <div className="container h-100 d-flex align-items-center justify-content-center">
            <div className="row">
              <div className="col-lg-8 mx-auto mt-n10 text-center">
                <h1 className="fs-60 text-uppercase ls-xl text-white mb-3 animate__animated animate__zoomIn animate__delay-1s">
                Bodynamic Foundation Training

                </h1>
                <h2 className="display-1 fs-20 text-white mb-0 animate__animated animate__zoomIn animate__delay-2s">
                Embark on a Journey of Somatic Developmental Psychology for Personal and Professional Growth"
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Hero23;