import ContactForm from 'components/common/ContactForm';
import dynamic from 'next/dynamic';
import Slider from 'react-slick'; // Import react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

// Dynamically import Plyr with ssr: false
const Plyr = dynamic(() => import('plyr-react'), { ssr: false });

const Blog5 = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <section className="wrapper bg-soft-primary">
      {/* Registration Section */}
      <div className="row">
        <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 mb-12">
          <h1
            className="col-lg-12 display-1 text-center"
            style={{ fontFamily: 'Sacramento', fontWeight: '500' }}
          >
            Form for Registration
          </h1>
          <ContactForm />
        </div>
      </div>

      {/* Testimonial Slider */}
      <div className="row text-justify">
        <div className="col-xl-9 mx-auto md-10 mb-12">
          <h1 className="text-center mb-12">Bodynamic Training Testimonials</h1>

          {/* Slider UI */}
          <Slider {...sliderSettings}>
            {/* Slide 1 */}
            <div className="testimonial-card bgcolor-black" >
              <div className="card p-3 text-center "style={{color:'#134B70' , Width: '500px'}} >
               
                <p className="lead mb-4">
                
                </p>
                <Plyr
            options={{ loadSprite: true, clickToPlay: true }}
            source={{
              type: 'video',
              sources: [
                {
                  src: 'https://vimeo.com/469964414?autoplay=1&muted=1',
                  provider: 'vimeo',
                },
              ],
            }}
          />
              </div>
            </div>

            {/* Slide 2 (repeat with different content) */}
            <div className="testimonial-card ">
              <div className="card p-4 text-center " style={{color:'rgb(247, 170, 129)', Width: '500px'}}>
           
                <Plyr
            options={{ loadSprite: true, clickToPlay: true }}
            source={{
              type: 'video',
              sources: [
                {
                  src: 'https://vimeo.com/469964414?autoplay=1&muted=1',
                  provider: 'vimeo',
                  
                },
              ],
            }}
          />
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* Video Testimonials */}
      <div className="row text-justify mt-12">
        <div className="col-xl-9 mx-auto md-10 mb-12">
          
         
        </div>
      </div>
    </section>
  );
};

export default Blog5;
