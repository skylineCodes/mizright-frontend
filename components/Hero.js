import React from 'react';
import heroStyles from '../styles/Hero.module.scss';

const Hero = () => {
  return (
    <>
      <section className={heroStyles.hero}>
        <svg
          width='395'
          height='562'
          className={heroStyles.svg}
          viewBox='0 0 519 562'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1.00001 1L518 561M1.00001 42.2783L482.267 561M1.00001 88.4639L449.11 561M1.00001 129.454L412.089 561'
            stroke='#C4C4C4'
            stroke-opacity='0.5'
            strokeWidth='2'
          />
        </svg>
        <div className={heroStyles.container}>
          <main className={heroStyles.main}>
            <div className={heroStyles.text}>
              <h1 className={heroStyles.item_title}>
                Sew Perfectly Tailored Outfits in 3 steps
              </h1>
              <div className={heroStyles.scissors_div}>
                <img
                  src='../images/scissors.png'
                  alt='scissors'
                  width='150'
                  height='100'
                  className={heroStyles.scissors}
                />
                <svg
                  width='294'
                  height='4'
                  className={heroStyles.lines}
                  viewBox='0 0 294 4'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <line
                    y1='2'
                    x2='294'
                    y2='2'
                    stroke='#6A6A6A'
                    strokeWidth='4'
                    stroke-dasharray='10 20'
                  />
                </svg>
              </div>
              <p className={heroStyles.item_description}>
                Get your outfit tailored to your personality at affordable
                prices.
              </p>
              <a href='#' className={heroStyles.item_btn}>
                Sew With Us
              </a>
            </div>
            <div className={heroStyles.image_div}>
              <img
                src='../images/giwa.png'
                alt='fashion'
                className={heroStyles.image}
              />
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Hero;
