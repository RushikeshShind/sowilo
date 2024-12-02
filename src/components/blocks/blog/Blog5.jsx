import dayjs from 'dayjs';
import Link from 'next/link';
// -------- custom components -------- //
import Carousel from 'components/reuseable/Carousel';
import NextLink from 'components/reuseable/links/NextLink';
import carouselBreakpoints from 'utils/carouselBreakpoints'; // -------- data -------- //
import ContactForm from 'components/common/ContactForm';
import dynamic from 'next/dynamic';

// Dynamically import Plyr with ssr: false
const Plyr = dynamic(() => import('plyr-react'), { ssr: false });

 

const Blog5 = () => {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="row">
        <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 mb-12">
          <h1 className="col-lg-12 display-1 text-center" style={{fontFamily: 'Sacramento', fontWeight: '500px'}}>
            Form for Registration
          </h1>
          <p className="lead text-center mb-12"></p>
          <ContactForm />
        </div>
      </div>

      <div className="row text-justify">
        <div className="col-xl-9 mx-auto md-10 mb-12">
          <h1 className="text-center mb-12">What they're saying about the course</h1>
          <Plyr 
            options={{
              loadSprite: true,
              clickToPlay: true
            }}
            source={{
              type: 'video',
              sources: [{
                src: 'https://vimeo.com/469964414?autoplay=1&muted=1&stream_id=Y2xpcHN8NjI0MDMzNDd8aWQ6ZGVzY3xbXQ%3D%3D',
                provider: 'vimeo'
              }]
            }}
          />
          <h3 className="col-xl-12 mb-4 mt-6 text-center">Bodynamic Training Testimonials</h3>
          <Plyr 
            options={{
              loadSprite: true,
              clickToPlay: true
            }}
            source={{
              type: 'video',
              sources: [{
                src: 'https://vimeo.com/276290101?share=copy#t=0',
                provider: 'vimeo'
              }]
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Blog5;