import NextLink from 'components/reuseable/links/NextLink';
import { Popup2 } from '../popup';

const CTA9 = () => {
  return <section className="wrapper image-wrapper bg-image bg-overlay text-white" style={{
    backgroundImage: 'url(/img/photos/contactus.jpg)'
  }}>
      <div className="container py-12 py-md-15  text-center ">
        <div className="row">
          <div className="col-xl-10 col-xxl-8 mx-auto text-center">
          
            <h2 className="text-white mt-1 mb-5" style={{fontFamily:'byutih', fontSize:'36px'}}>
            I am here to support individuals on their journey of transformation and creating a lasting foundation for resilience and fulfillment.
            </h2>
            <Popup2/>
           
          </div>
        </div>
      </div>
    </section>;
};

export default CTA9;