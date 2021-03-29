import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Accordion, Card } from 'react-bootstrap';
import footerStyles from '../styles/Footer.module.scss';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

const Footer = () => {
    const accordionItemHeader = useRef('');
    const accordionItemHeaderTwo = useRef('');
    const accordionItemHeaderThree = useRef('');

    const toggleAccordion = (n) => {
      if (n === 1) {
        accordionItemHeader.current.classList.toggle('active');

        const accordionItemBody = accordionItemHeader.current.nextElementSibling;

        if (accordionItemHeader.current.classList.contains('active')) {
          accordionItemHeader.current.children[1].style.transform = 'rotateX(-180deg)';
          accordionItemHeader.current.children[1].style.transition = '0.5s';
          accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        } else {
          accordionItemHeader.current.children[1].style.transform =
            'rotateX(0deg)';
          accordionItemHeader.current.children[1].style.transition = '0.5s';
          accordionItemBody.style.maxHeight = 0;
        }
      } else if (n === 2) {
         accordionItemHeaderTwo.current.classList.toggle('active');

         const accordionItemBody =
           accordionItemHeaderTwo.current.nextElementSibling;

         if (accordionItemHeaderTwo.current.classList.contains('active')) {
           accordionItemHeaderTwo.current.children[1].style.transform =
             'rotateX(-180deg)';
           accordionItemHeaderTwo.current.children[1].style.transition = '0.5s';
           accordionItemBody.style.maxHeight =
             accordionItemBody.scrollHeight + 'px';
         } else {
           accordionItemHeaderTwo.current.children[1].style.transform =
             'rotateX(0deg)';
           accordionItemHeaderTwo.current.children[1].style.transition = '0.5s';
           accordionItemBody.style.maxHeight = 0;
         }
      } else {
         accordionItemHeaderThree.current.classList.toggle('active');

         const accordionItemBody =
           accordionItemHeaderThree.current.nextElementSibling;

         if (accordionItemHeaderThree.current.classList.contains('active')) {
           accordionItemHeaderThree.current.children[1].style.transform =
             'rotateX(-180deg)';
           accordionItemHeaderThree.current.children[1].style.transition = '0.5s';
           accordionItemBody.style.maxHeight =
             accordionItemBody.scrollHeight + 'px';
         } else {
           accordionItemHeaderThree.current.children[1].style.transform =
             'rotateX(0deg)';
           accordionItemHeaderThree.current.children[1].style.transition = '0.5s';
           accordionItemBody.style.maxHeight = 0;
         }
      }
    }

  return (
    <>
      <section className={footerStyles.footer_section_mobile}>
        <footer className={footerStyles.footer}>
          <div className={footerStyles.footer_top}>
            <div className={footerStyles.accordion}>
              <div className={footerStyles.accordionItem}>
                <div
                  className={footerStyles.accordionItemHeader}
                  ref={accordionItemHeader}
                  onClick={() => {
                    toggleAccordion(1);
                  }}
                >
                  <h6 className={footerStyles.header}>Mizright</h6>
                  <span className={footerStyles.icon}>
                    <FontAwesomeIcon icon={faAngleDown} />{' '}
                  </span>
                </div>
                <div className={footerStyles.accordionItemBody}>
                  <div className={footerStyles.accordionItemBodyContent}>
                    <ul className={footerStyles.subtext_wrapper}>
                      <li className={footerStyles.subtext}>Customer Stories</li>
                      <li className={footerStyles.subtext}>Pricing</li>
                      <li className={footerStyles.subtext}>About Us</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={footerStyles.accordionItem}>
                <div
                  className={footerStyles.accordionItemHeader}
                  ref={accordionItemHeaderTwo}
                  onClick={() => {
                    toggleAccordion(2);
                  }}
                >
                  <h6 className={footerStyles.header}>Resources</h6>
                  <span className={footerStyles.icon}>
                    <FontAwesomeIcon icon={faAngleDown} />{' '}
                  </span>
                </div>
                <div className={footerStyles.accordionItemBody}>
                  <div className={footerStyles.accordionItemBodyContent}>
                    <ul className={footerStyles.subtext_wrapper}>
                      <li className={footerStyles.subtext}>Blog</li>
                      <li className={footerStyles.subtext}>Customer Support</li>
                      <li className={footerStyles.subtext}>How It Works</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={footerStyles.accordionItem}>
                <div
                  className={footerStyles.accordionItemHeader}
                  ref={accordionItemHeaderThree}
                  onClick={() => {
                    toggleAccordion(3);
                  }}
                >
                  <h6 className={footerStyles.header}>Compliance</h6>
                  <span className={footerStyles.icon}>
                    <FontAwesomeIcon icon={faAngleDown} />{' '}
                  </span>
                </div>
                <div className={footerStyles.accordionItemBody}>
                  <div className={footerStyles.accordionItemBodyContent}>
                    <ul className={footerStyles.subtext_wrapper}>
                      <li className={footerStyles.subtext}>Terms of service</li>
                      <li className={footerStyles.subtext}>Privacy policy</li>
                      <li className={footerStyles.subtext}>
                        Compliance, legal and security
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={footerStyles.footer_bottom}>
            <div className={footerStyles.logo_div}>
              <span className={footerStyles.logo}>Logo</span>
              <p className={footerStyles.copywrite}>
                &copy; Mizright Ltd. 2021
              </p>
            </div>
            <div className={footerStyles.links_div}>
              <ul className={footerStyles.links_wrapper}>
                <li className={footerStyles.links}>
                  <span>
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </li>
                <li className={footerStyles.links}>
                  <span>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </span>
                </li>
                <li className={footerStyles.links}>
                  <span>
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </section>
      <section className={footerStyles.footer_section}>
          <footer className={footerStyles.footer}>
            <div className={footerStyles.container}>
              <div className={footerStyles.footer_top}>
                <div className={footerStyles.headerone}>
                  <div className={footerStyles.mainText_div}>
                    <h6 className={footerStyles.mainText}>Mizright</h6>
                  </div>
                  <div className={footerStyles.subtext_div}>
                    <ul className={footerStyles.subtext_wrapper}>
                      <li className={footerStyles.subtext}>Customer Stories</li>
                      <li className={footerStyles.subtext}>Pricing</li>
                      <li className={footerStyles.subtext}>About Us</li>
                    </ul>
                  </div>
                </div>
                <div className={footerStyles.headertwo}>
                  <div className={footerStyles.mainText_div}>
                    <h6 className={footerStyles.mainText}>Resources</h6>
                  </div>
                  <div className={footerStyles.subtext_div}>
                    <ul className={footerStyles.subtext_wrapper}>
                      <li className={footerStyles.subtext}>Blog</li>
                      <li className={footerStyles.subtext}>Customer Support</li>
                      <li className={footerStyles.subtext}>How It Works</li>
                    </ul>
                  </div>
                </div>
                <div className={footerStyles.headerthree}>
                  <div className={footerStyles.mainText_div}>
                    <h6 className={footerStyles.mainText}>Compliance</h6>
                  </div>
                  <div className={footerStyles.subtext_div}>
                    <ul className={footerStyles.subtext_wrapper}>
                      <li className={footerStyles.subtext}>Terms of service</li>
                      <li className={footerStyles.subtext}>Privacy policy</li>
                      <li className={footerStyles.subtext}>
                        Compliance, legal and security
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={footerStyles.footer_bottom}>
                <div className={footerStyles.logo_div}>
                  <span className={footerStyles.logo}>Logo</span>
                  <p className={footerStyles.copywrite}>
                    &copy; Mizright Ltd. 2021
                  </p>
                </div>
                <div className={footerStyles.links_div}>
                  <ul className={footerStyles.links_wrapper}>
                    <li className={footerStyles.links}>
                      <span>
                        <FontAwesomeIcon icon={faInstagram} />
                      </span>
                    </li>
                    <li className={footerStyles.links}>
                      <span>
                        <FontAwesomeIcon icon={faFacebookF} />
                      </span>
                    </li>
                    <li className={footerStyles.links}>
                      <span>
                        <FontAwesomeIcon icon={faTwitter} />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </section>
    </>
  );
};

export default Footer;
