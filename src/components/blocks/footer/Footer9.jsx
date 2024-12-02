// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks'; // -------- data -------- //

import footerNav, { helps } from 'data/footer';

const Footer9 = () => {
  return <footer className="bg-dark ">
      <div className="container py-13 py-md-10">
        <div className="row gy-6 gy-lg-5">
          <div className="col-lg-8">
            <div className="widget">
              <img className="mb-2" src="/img/logo-light.png" srcSet="/img/logo-light@2x.png 2x" alt="" />

              <p className="mb-2">
                © 2022 xyz. <br className="d-none d-lg-block" />
                All rights reserved.
              </p>

            
            </div>
          </div>

          {/* <div className="col-md-4 col-lg-2 offset-lg-2">
            <div className="widget">
              <h4 className="widget-title mb-3 text-white">Need Help?</h4>
              <ul className="list-unstyled  mb-0">
                {helps.map(({
                title,
                url
              }) => <li key={title}>
                    <NextLink title={title} href={url} />
                  </li>)}
              </ul>
            </div>
          </div> */}

          {/* <div className="col-md-4 col-lg-2">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Learn More</h4>
              <ul className="list-unstyled  mb-0">
                {footerNav.map(({
                title,
                url
              }) => <li key={title}>
                    <NextLink title={title} href={url} />
                  </li>)}
              </ul>
            </div>
          </div> */}

           <div className="col-md-4 gy-lg-4 ">
            <div className="widget">
              
              <address>Developed by Isparxinfotech.com</address>
             
              
            </div>
          </div> 
        </div>
      </div>
    </footer>;
};

export default Footer9;