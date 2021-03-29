import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBill,
  faTshirt,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';
import advertStyles from '../styles/Advert.module.scss';

const Advert = () => {
  useEffect(() => {
    Aos.init({ offset: 100, mirror: true, duration: 1000 });
  }, []);
  return (
    <>
      <section className={advertStyles.advert}>
        <div className={advertStyles.text_div}>
          <div data-aos='fade-right' className={advertStyles.section_header}>
            <h1 className={advertStyles.mainText}>
              Sew Latest Contemporary styles from the comfort of your home
            </h1>
            <ul className={advertStyles.features}>
              <li className={advertStyles.feature_lists}>
                <h6 className={advertStyles.feature_header}>
                  <span className={advertStyles.feature_icon}>
                    <FontAwesomeIcon icon={faTshirt} />
                  </span>
                  We source fabric for you
                </h6>
                <p className={advertStyles.feature_paragraph}>
                  We communicate with you while finding the best fabric that
                  suits you
                </p>
              </li>
              <li className={advertStyles.feature_lists}>
                <h6 className={advertStyles.feature_header}>
                  <span className={advertStyles.feature_icon}>
                    <FontAwesomeIcon icon={faMoneyBill} />
                  </span>
                  Part payment
                </h6>
                <p className={advertStyles.feature_paragraph}>
                  Pay 60% upfront and complete payment when the cloth is ready
                  for delivery
                </p>
              </li>
              <li className={advertStyles.feature_lists}>
                <h6 className={advertStyles.feature_header}>
                  <span className={advertStyles.feature_icon}>
                    <FontAwesomeIcon icon={faWrench} />
                  </span>
                  Free alterations
                </h6>
                <p className={advertStyles.feature_paragraph}>
                  All alterations are free if complaints are within 7 days of
                  delivery
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div data-aos='fade-left' className={advertStyles.image_div}>
          <img
            src='../images/princess.jpg'
            alt='blue gown'
            className={advertStyles.image}
          />
        </div>
      </section>
    </>
  );
};

export default Advert;
