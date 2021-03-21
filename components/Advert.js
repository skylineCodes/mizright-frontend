import advertStyles from '../styles/Advert.module.scss';

const Advert = () => {
    return (
      <>
        <section className={advertStyles.advert}>
          <img
            src='../images/tailor_machine.jpg'
            alt='tailor machine'
            className={advertStyles.background_image}
          />
          <div className={advertStyles.text_div}>
            <div className={advertStyles.card}>
              <h1 className={advertStyles.maintext}>Come Sew With Us</h1>
              <p className={advertStyles.paragraph}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
                quas soluta molestias eaque doloribus.
              </p>
              <a href='#' className={advertStyles.button}>
                Sew With Us
              </a>
            </div>
          </div>
          <div className={advertStyles.image_div}>
            <img
              src='../images/princess.jpg'
              alt='blue gown'
              className={advertStyles.image}
            />
          </div>
        </section>
      </>
    );
}

export default Advert
