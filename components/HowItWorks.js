import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import howItWorksStyles from '../styles/HowItWorks.module.scss';

const HowItWorks = () => {

  useEffect(() => {
    Aos.init({ offset: 400, duration: 2000 });
  }, []);

  return (
    <>
      <section className={howItWorksStyles.howItWorks}>
        <div data-aos='fade-up' className={howItWorksStyles.svg}>
          <img
            src='../images/thread.png'
            alt='thread'
            className={howItWorksStyles.image}
          />
        </div>
        <div data-aos='fade-up' className={howItWorksStyles.section_header}>
          <h1 className={howItWorksStyles.mainText}>
            Three Steps to a better outfit
          </h1>
          <p className={howItWorksStyles.subText}>
            Enjoy free pick up and delivery on all alterations
          </p>
        </div>
        <div data-aos='fade-up' className={howItWorksStyles.container}>
          <div className={howItWorksStyles.stepone}>
            <div className={howItWorksStyles.image_div}>
              <img
                src='../images/book.png'
                alt='book'
                className={howItWorksStyles.image}
              />
            </div>
            <div className={howItWorksStyles.text_div}>
              <p className={howItWorksStyles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                scelerisque ornare sagittis, eleifend.
              </p>
            </div>
          </div>
          <div className={howItWorksStyles.steptwo}>
            <div className={howItWorksStyles.image_div}>
              <img
                src='../images/buy.png'
                alt='buy'
                className={howItWorksStyles.image}
              />
            </div>
            <div className={howItWorksStyles.text_div}>
              <p className={howItWorksStyles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                scelerisque ornare sagittis, eleifend.
              </p>
            </div>
          </div>
          <div className={howItWorksStyles.stepthree}>
            <div className={howItWorksStyles.image_div}>
              <img
                src='../images/delivery.png'
                alt='delivery'
                className={howItWorksStyles.image}
              />
            </div>
            <div className={howItWorksStyles.text_div}>
              <p className={howItWorksStyles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                scelerisque ornare sagittis, eleifend.
              </p>
            </div>
          </div>
        </div>
        <div data-aos='fade-up' className={howItWorksStyles.learnmore_div}>
          <a href='#' className={howItWorksStyles.learnmore_button}>
            Learn More
          </a>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
