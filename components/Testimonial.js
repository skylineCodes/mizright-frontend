import { useRef } from 'react';
import testimonialStyles from '../styles/Testimonial.module.scss';

const Testimonial = () => {
  const testimonial = useRef('');
  const testimonial_slide = useRef('');
  const dot = useRef('');

  let counter = 1;
  // slideFun(counter);

  // let timer = setInterval(autoSlide, 8000);

  // const autoSlide = () => {
  //   counter += 1;
  //   slideFun(counter);
  // }

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
        <div className={testimonialStyles.section}>
          <h1 className={testimonialStyles.header}>
            What Our Clients Are Saying
          </h1>
          <div className={testimonialStyles.container}>
            <div
              className={testimonialStyles.testimonial_slide}
              ref={testimonial_slide}
            >
              <div
                className={testimonialStyles.testimonial_div}
                ref={testimonial}
              >
                <p className={testimonialStyles.paragraph}>
                  Ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  perferendis maiores, ipsam accusantium quidem accusamus itaque
                  molestias a atque minus dolore, aperiam cumque impedit odio
                  facilis suscipit at neque eaque.
                </p>
                <h5 className={testimonialStyles.name}>Korede O,</h5>
                <small className={testimonialStyles.state}>Osogbo</small>
              </div>
              <div
                className={testimonialStyles.testimonial_div}
                ref={testimonial}
              >
                <p className={testimonialStyles.paragraph}>
                  Dolor sit amet consectetur adipisicing elit. Fuga perferendis
                  maiores, ipsam accusantium quidem accusamus itaque molestias a
                  atque minus dolore, aperiam cumque impedit odio facilis
                  suscipit at neque eaque.
                </p>
                <h5 className={testimonialStyles.name}>Stephen O,</h5>
                <small className={testimonialStyles.state}>Abuja</small>
              </div>
              <div
                className={testimonialStyles.testimonial_div}
                ref={testimonial}
              >
                <p className={testimonialStyles.paragraph}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  perferendis maiores, ipsam accusantium quidem accusamus itaque
                  molestias a atque minus dolore, aperiam cumque impedit odio
                  facilis suscipit at neque eaque.
                </p>
                <h5 className={testimonialStyles.name}>Joy O,</h5>
                <small className={testimonialStyles.state}>Lagos</small>
              </div>
            </div>
            <div className={testimonialStyles.dots_div} ref={dot}>
              <span
                className={[testimonialStyles.dot, testimonialStyles.active].join(
                  ' '
                )}
                onClick={() => currentSlide(1)}
              ></span>
              <span
                className={[testimonialStyles.dot].join(' ')}
                onClick={() => currentSlide(2)}
              ></span>
              <span
                className={[testimonialStyles.dot].join(' ')}
                onClick={() => currentSlide(3)}
              ></span>
            </div>
          </div>
        </div>
        <svg
          width='75'
          height='108'
          className={testimonialStyles.prev}
          onClick={() => toggleSlide(-1)}
          viewBox='0 0 75 108'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M74 106.5L3 58.5L74 2' stroke='black' strokeWidth='3' />
        </svg>

        <svg
          width='75'
          height='108'
          className={testimonialStyles.next}
          onClick={() => toggleSlide(1)}
          viewBox='0 0 75 108'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M1 106.5L72 58.5L1 2' stroke='black' strokeWidth='3' />
        </svg>
      </section>
    </>
  );
};

export default Testimonial;
