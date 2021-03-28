import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import footerStyles from '../styles/Footer.module.scss';

const Footer = () => {
    return (
      <>
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
}

export default Footer
