import { Fragment } from 'react';
import Carousel from 'components/reuseable/Carousel'; // -------- data -------- //


const Testimonial25 = () => {
  return <div className="card bg-soft-primary rounded-4 mb-16 mb-md-18">
      <div className="card-body py-14 px-lg-0">
        <div className="row text-center">
          <div className="col-lg-9 col-xl-8 mx-auto">
            <h2 className="fs-16 text-uppercase text-muted mb-3">Happy Customers</h2>
            <h3 className="display-2 ls-sm mb-10 px-xxl-10">
              Don't take our word for it. See what our{' '}
              <span className="underline-3 style-1 primary">
                <em>customers</em>
              </span>{' '}
              are saying about us.
            </h3>
          </div>
        </div>

        <div className="row gx-lg-8 gx-xl-12 align-items-center">
          <div className="col-lg-5 ms-auto col-xl-4 d-none d-lg-flex">
            <div className="img-mask mask-3">
              <img src="/img/photos/about13.jpg" srcSet="/img/photos/about13@2x.jpg 2x" alt="" />
            </div>
          </div>

          <div className="col-lg-6 col-xl-6 col-xxl-5 me-auto">
            <div className="swiper-container dots-start dots-closer mb-6">
              <Carousel grabCursor slidesPerView={1} navigation={false}>
               
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default Testimonial25;