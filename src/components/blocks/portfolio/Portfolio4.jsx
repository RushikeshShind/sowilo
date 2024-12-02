import Link from 'next/link';
import Carousel from 'components/reuseable/Carousel'; // -------- data -------- //

import { portfolioList3 } from 'data/portfolio';
import styles from '../styles/Home.module.css';
const Portfolio4 = () => {
  return <section className="wrapper bg-light">
      <div className="overflow-hidden">
      <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.imageContainer}>
          <img
            src="/img/avatars/t6.jpg" // Replace this with the actual image path
            alt="Kristin sitting on a couch"
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer} style={{fontFamily:'GothicA1'}}>
          <h1 className={styles.heading} style={{fontFamily:'EditorsNote'}}>HEY I'M SHITTAL</h1>
          <p className={styles.description}>
          I am passionate about human development and potential. From early childhood education to adult learning to change management, I have traversed many paths to currently focusing on developmental psychology, specifically somatic developmental psychology.
          </p>
          <p className={styles.description}>
          My journey in Somatic Developmental Psychology began in 2023 with my first Bodynamic demonstration session, an experience that revealed underlying dynamics profoundly influencing my ability to sustain close, intimate relationships. This work holds deep personal significance for me, as it marked the beginning of a transformative exploration of self and connection.
          </p>
          <p className={styles.description}>
          Drawing on this transformative experience, I am deeply committed to empowering individuals to heal from developmental trauma, cultivate self-awareness, build secure relationships, and lay a strong foundation for lifelong resilience and fulfillment.
          </p>
          <div className={styles.description}>
            <p>I firmly believe that lifelong mental health challenges can be addressed by integrating traditional developmental psychology principles with a somatic focus. This approach emphasizes the vital role of embodied experience in fostering psychological growth, healing, and overall well-being, which inspires my current efforts. I am collaborating with the Bodynamic International global team to bring Bodynamic Training and Workshops to the United States and contribute to the growth and cohesion of the global Bodynamic community.
            </p>
            {/* <ul className={styles.list}>
              <li>Surpass $10k months in the first year</li>
              <li>Attract our dream clients on repeat</li>
              <li>Quickly become an authority in our industry</li>
            </ul> */}
          </div>
          <p className={styles.callToAction}>Now it’s your turn!</p>
        </div>
      </div>
    </div>

        {/* <div className="container py-14 py-md-16">
          <div className="row">
            <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center">
              <i className="icn-flower text-leaf fs-30 opacity-25"></i>
              <h2 className="display-5 text-center mt-2 mb-10">
                Some of wonderful love stories <br className="d-none d-md-block" /> I witnessed and had the chance to
                capture
              </h2>
            </div>
          </div>

          <div className="swiper-container grid-view nav-bottom nav-color mb-14 text-center">
            <Carousel pagination={false} className="overflow-visible pb-2" breakpoints={{
            0: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            }
          }}>
              {portfolioList3.map(item => <div className="card shadow-lg" key={item.id}>
                  <figure className="card-img-top overlay overlay-1">
                    <Link href="#" passHref legacyBehavior>
                      <a>
                        <img className="img-fluid" src={item.image['1x']} srcSet={item.image['2x']} alt="" />
                        <span className="bg" />
                      </a>
                    </Link>

                    <figcaption>
                      <h5 className="from-top mb-0">View Gallery</h5>
                    </figcaption>
                  </figure>

                  <div className="card-body p-6">
                    <h3 className="fs-21 mb-1">{item.name}</h3>
                    <ul className="post-meta fs-16 mb-0">
                      <li>{item.photos} Photos</li>
                      <li>{item.category}</li>
                    </ul>
                  </div>
                </div>)}
            </Carousel>
          </div>
        </div> */}
      </div>
    </section>;
};

export default Portfolio4;