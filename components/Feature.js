import featureStyles from '../styles/Feature.module.scss';

const Feature = () => {
  return (
    <>
      <section className={featureStyles.feature}>
        <div className={featureStyles.container}>
          <div className={featureStyles.feature_one}>
            <div className={featureStyles.text_div}>
              <img
                src='../images/feature_background.png'
                alt='feature_background'
                className={featureStyles.image}
              />
              <div className={featureStyles.text}>
                <h1 className={featureStyles.headertext}>Source Fabric</h1>
                <p className={featureStyles.subtext}>
                  We would help you sort fabric
                </p>
              </div>
            </div>
            <div className={featureStyles.image_div}>
              <img
                src='../images/6-edit.png'
                alt='feature_background'
                className={featureStyles.image}
              />
            </div>
          </div>
          <div className={featureStyles.feature_two}>
            <div className={featureStyles.image_div}>
              <img
                src='../images/blouse3.png'
                alt='feature_background'
                className={featureStyles.image}
              />
            </div>
            <div className={featureStyles.text_div}>
              <img
                src='../images/feature_background.png'
                alt='feature_background'
                className={featureStyles.image}
              />
              <div className={featureStyles.text}>
                <h1 className={featureStyles.headertext}>Part Payment</h1>
                <p className={featureStyles.subtext}>
                  Pay partialy upfront, complete when cloth is ready
                </p>
              </div>
            </div>
          </div>
          <div className={featureStyles.feature_three}>
            <div className={featureStyles.text_div}>
              <img
                src='../images/feature_background.png'
                alt='feature_background'
                className={featureStyles.image}
              />
              <div className={featureStyles.text}>
                <h1 className={featureStyles.headertext}>Free Alterations</h1>
                <p className={featureStyles.subtext}>
                  Complaints within 7 days of delivery are free
                </p>
              </div>
            </div>
            <div className={featureStyles.image_div}>
              <img
                src='../images/6-edit.png'
                alt='feature_background'
                className={featureStyles.image}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
