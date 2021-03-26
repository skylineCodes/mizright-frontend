import serviceStyles from '../styles/Service.module.scss';

const Service = () => {
  return (
    <>
      <section className={serviceStyles.services}>
        <svg
          width=''
          height=''
          className={serviceStyles.svg_background}
          viewBox='0 0 1366 1652'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1366 1L1 1651M1366 122.624L95.3431 1651M1366 258.706L182.887 1651M1366 379.479L280.63 1651'
            stroke='#C4C4C4'
            stroke-opacity='0.5'
            strokeWidth='2'
          />
        </svg>

        <div className={serviceStyles.svg}>
          <img
            src='../images/dress.png'
            alt='dress'
            className={serviceStyles.image}
          />
        </div>
        <div className={serviceStyles.section_header}>
          <h1 className={serviceStyles.mainText}>Our Services</h1>
          <p className={serviceStyles.subText}>
            We pay detailed attention to deliverying our services
          </p>
        </div>
        <div className={serviceStyles.serviceone}>
          <div className={serviceStyles.card}>
            <h3 className={serviceStyles.card_header}>Coutures</h3>
            <ul className={serviceStyles.card_list}>
              <li className={serviceStyles.card_list_item}>
                <span className={serviceStyles.span}>
                  <svg
                    width='16'
                    height='16'
                    className={serviceStyles.span_svg}
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z'></path>
                    <path d='M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z'></path>
                  </svg>
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
              </li>
              <li className={serviceStyles.card_list_item}>
                <span className={serviceStyles.span}>
                  <svg
                    width='16'
                    height='16'
                    className={serviceStyles.span_svg}
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z'></path>
                    <path d='M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z'></path>
                  </svg>
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
              </li>
              <li className={serviceStyles.card_list_item}>
                <span className={serviceStyles.span}>
                  <svg
                    width='16'
                    height='16'
                    className={serviceStyles.span_svg}
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z'></path>
                    <path d='M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z'></path>
                  </svg>
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
              </li>
              <li className={serviceStyles.card_list_item}>
                <span className={serviceStyles.span}>
                  <svg
                    width='16'
                    height='16'
                    className={serviceStyles.span_svg}
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z'></path>
                    <path d='M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z'></path>
                  </svg>
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
              </li>
            </ul>
          </div>
          <div className={serviceStyles.image}></div>
        </div>

        <div className={serviceStyles.servicetwo}>
          <div className={serviceStyles.card}>
            <h3 className={serviceStyles.card_header}>Ready to wear</h3>
            <ul className={serviceStyles.card_list}>
              <li className={serviceStyles.card_list_item}>
                <span className={serviceStyles.span}>
                  <svg
                    width='16'
                    height='16'
                    className={serviceStyles.span_svg}
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z'></path>
                    <path d='M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z'></path>
                  </svg>
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
              </li>
              <li className={serviceStyles.card_list_item}>
                <span className={serviceStyles.span}>
                  <svg
                    width='16'
                    height='16'
                    className={serviceStyles.span_svg}
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z'></path>
                    <path d='M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z'></path>
                  </svg>
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
              </li>
              <li className={serviceStyles.card_list_item}>
                <span className={serviceStyles.span}>
                  <svg
                    width='16'
                    height='16'
                    className={serviceStyles.span_svg}
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z'></path>
                    <path d='M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z'></path>
                  </svg>
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
              </li>
              <li className={serviceStyles.card_list_item}>
                <span className={serviceStyles.span}>
                  <svg
                    width='16'
                    height='16'
                    className={serviceStyles.span_svg}
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z'></path>
                    <path d='M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z'></path>
                  </svg>
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
              </li>
            </ul>
          </div>
          <div className={serviceStyles.image}></div>
        </div>
      </section>
    </>
  );
};

export default Service;
