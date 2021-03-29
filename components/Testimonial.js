import { useRef, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from 'react-bootstrap';
import testimonialStyles from '../styles/Testimonial.module.scss';

const Testimonial = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const testimonial_container = useRef('');
  const testimonial_slide = useRef('');
  const dot = useRef('');

  let counter = 1;

  const toggleSlide = (n) => {
    counter += n;

    let i;

    for (i = 0; i < testimonial_slide.current.children.length; i++) {
      testimonial_slide.current.children[i].style.display = 'none';
      dot.current.children[i].style.background = 'none';
    }
    
    for (i = 0; i < dot.current.children.length; i++) {
      dot.current.children[i].classList.remove('active');
    }

    if (counter > testimonial_slide.current.children.length) {
      counter = 1;
    }

    if (counter < 1) {
      counter = testimonial_slide.current.children.length;
    }

    testimonial_slide.current.children[counter - 1].style.display = 'flex';
    dot.current.children[counter - 1].classList.add('active');
    dot.current.children[counter - 1].style.background = '#404145';
  };
  
  const currentSlide = (n) => {
    let counter = n;

    let i;
    
    for (i = 0; i < testimonial_slide.current.children.length; i++) {
      testimonial_slide.current.children[i].style.display = 'none';
      dot.current.children[i].style.background = 'none';
    }

    for (i = 0; i < dot.current.children.length; i++) {
      dot.current.children[i].classList.remove('active');
    }

    if (counter > testimonial_slide.current.children.length) {
      counter = 1;
    }

    if (counter < 1) {
      counter = testimonial_slide.current.children.length;
    }

    dot.current.children[counter - 1].classList.add('active');
    dot.current.children[counter - 1].style.background = '#404145';
    testimonial_slide.current.children[counter - 1].style.display = 'flex';
  };

  return (
    <>
      <section className={testimonialStyles.testimonial}>
        <svg
          width=''
          height=''
          className={testimonialStyles.svg_background}
          viewBox='0 0 1367 1652'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.999994 1L1366 1651M0.999994 122.624L1271.66 1651M0.999994 258.706L1184.11 1651M0.999994 379.479L1086.37 1651'
            stroke='#C4C4C4'
            stroke-opacity='0.5'
            strokeWidth='2'
          />
        </svg>
        <div data-aos='fade-in' className={testimonialStyles.section}>
          <h1 className={testimonialStyles.header}>
            What Our Clients Are Saying
          </h1>
          <Carousel
            className={testimonialStyles.testimonial_slide}
            nextIcon={
              <svg
                width='75'
                height='108'
                className={testimonialStyles.next}
                viewBox='0 0 75 108'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M1 106.5L72 58.5L1 2' stroke='black' strokeWidth='3' />
              </svg>
            }
            prevIcon={
              <svg
                width='75'
                height='108'
                className={testimonialStyles.prev}
                viewBox='0 0 75 108'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M74 106.5L3 58.5L74 2'
                  stroke='black'
                  strokeWidth='3'
                />
              </svg>
            }
          >
            <Carousel.Item>
              <div className={testimonialStyles.testimonial_div}>
                <p className={testimonialStyles.paragraph}>
                  Ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  perferendis maiores, ipsam accusantium quidem accusamus itaque
                  molestias a atque minus dolore, aperiam cumque impedit odio
                  facilis suscipit at neque eaque.
                </p>
                <h5 className={testimonialStyles.name}>Korede O,</h5>
                <small className={testimonialStyles.state}>Osogbo</small>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={testimonialStyles.testimonial_div}>
                <p className={testimonialStyles.paragraph}>
                  Dolor sit amet consectetur adipisicing elit. Fuga perferendis
                  maiores, ipsam accusantium quidem accusamus itaque molestias a
                  atque minus dolore, aperiam cumque impedit odio facilis
                  suscipit at neque eaque.
                </p>
                <h5 className={testimonialStyles.name}>Stephen O,</h5>
                <small className={testimonialStyles.state}>Abuja</small>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={testimonialStyles.testimonial_div}>
                <p className={testimonialStyles.paragraph}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  perferendis maiores, ipsam accusantium quidem accusamus itaque
                  molestias a atque minus dolore, aperiam cumque impedit odio
                  facilis suscipit at neque eaque.
                </p>
                <h5 className={testimonialStyles.name}>Joy O,</h5>
                <small className={testimonialStyles.state}>Lagos</small>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
