import Link from 'next/link';
import { motion } from 'framer-motion';
import heroStyles from '../styles/Hero.module.scss';

const Hero = () => {
  const fadeRight = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 }
  }

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  }

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
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className={heroStyles.item_title}
              >
                Sew Well Tailored Outfits in{' '}
                <span className={heroStyles.span}>3 simple steps</span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className={heroStyles.scissors_div}
              >
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
              </motion.div>
              <motion.p
                variants={fadeLeft}
                initial='hidden'
                animate='visible'
                transition={{ duration: 1 }}
                className={heroStyles.item_description}
              >
                We sew coutures and ready made fabrics tailored to your taste.
              </motion.p>
              <Link href='/booking' scroll={false}>
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, border: 'none' }} href='' className={heroStyles.item_btn}>
                  Sew With Us
                </motion.a>
              </Link>
            </div>
            <motion.div
              className={heroStyles.image_div}
              variants={fadeRight}
              initial='hidden'
              animate='visible'
              transition={{ duration: 1 }}
            >
              <img
                src='../images/blouse2.png'
                alt='fashion'
                className={heroStyles.image}
              />
            </motion.div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Hero;
