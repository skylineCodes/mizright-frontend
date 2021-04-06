import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import howItWorksStyles from '../styles/HowItWorks.module.scss';

const HowItWorks = () => {

  useEffect(() => {
    Aos.init({ offset: 10, mirror: true, duration: 1000 });
  }, []);

  return (
    <>
      <section className={howItWorksStyles.howItWorks}>
        <div
         
          className={howItWorksStyles.svg}
        >
          <img
            src='../images/thread.png'
            alt='thread'
            className={howItWorksStyles.image}
          />
        </div>
        <div className={howItWorksStyles.section_header}>
          <h1 className={howItWorksStyles.mainText}>
            Three Steps to a better outfit
          </h1>
          <p className={howItWorksStyles.subText}>
            Enjoy free pick up and delivery on all alteration complaints within
            seven days
          </p>
        </div>
        <div className={howItWorksStyles.container}>
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
                Fill our easy to use interactive form to choose your desired
                outfit and adequate measurements that we follow to details
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
                You can make a 60% upfront payment upon ordering, and pay the
                rest when clothe is ready for delivery
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
                Your clothes would be delivered to your preferred address or you
                opt for a pickup station near you.
              </p>
            </div>
          </div>
        </div>
        <div className={howItWorksStyles.learnmore_div}>
          <a href='#' className={howItWorksStyles.learnmore_button}>
            Learn More
          </a>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
