import React from 'react';
import latestBlogsStyles from '../styles/LatestBlogs.module.scss';

const LatestBlogs = () => {
    return (
      <>
        <section className={latestBlogsStyles.latestblogs}>
          <div className={latestBlogsStyles.container}>
            <div className={latestBlogsStyles.header_div}>
              <h1 className={latestBlogsStyles.header}>Latest Blogs</h1>
              <div className={latestBlogsStyles.more_article_div}>
                <a href='#' className={latestBlogsStyles.more_article_link}>
                  See More Articles{' '}
                  <span className={latestBlogsStyles.caret_span}>
                    <svg
                      width='8'
                      height='16'
                      className={latestBlogsStyles.caret_right}
                      viewBox='0 0 75 108'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M1 106.5L72 58.5L1 2'
                        stroke='#4a73e8'
                        strokeWidth='12'
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className={latestBlogsStyles.article_div}>
              <div className={latestBlogsStyles.card}>
                <div className={latestBlogsStyles.image_div}>
                  <img
                    src='../images/tamara-2.jpg'
                    alt='card_image'
                    className={latestBlogsStyles.image}
                  />
                </div>
                <h6 className={latestBlogsStyles.card_header}>
                  Lorem ipsum dolor sit amet consectetur.
                </h6>
                <small className={latestBlogsStyles.category}>Fashion</small>
                <p className={latestBlogsStyles.card_paragraph}>
                  Voluptatem pariatur dicta eius eligendi eum fugit at id
                  maxime!
                </p>
                <a href='#' className={latestBlogsStyles.card_btn}>
                  Read More{' '}
                  <span className={latestBlogsStyles.span_btn_svg}>
                    <svg
                      width='60'
                      height='8'
                      className={latestBlogsStyles.btn_svg}
                      viewBox='0 0 68 8'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M67.3536 4.35355C67.5488 4.15829 67.5488 3.84171 67.3536 3.64645L64.1716 0.464466C63.9763 0.269204 63.6597 0.269204 63.4645 0.464466C63.2692 0.659728 63.2692 0.976311 63.4645 1.17157L66.2929 4L63.4645 6.82843C63.2692 7.02369 63.2692 7.34027 63.4645 7.53553C63.6597 7.7308 63.9763 7.7308 64.1716 7.53553L67.3536 4.35355ZM0 4.5H67V3.5H0V4.5Z'
                        fill='#4554DD'
                      />
                    </svg>
                  </span>
                </a>
              </div>
              <div className={latestBlogsStyles.card}>
                <div className={latestBlogsStyles.image_div}>
                  <img
                    src='../images/micheile.jpg'
                    alt='card_image'
                    className={latestBlogsStyles.image}
                  />
                </div>
                <h6 className={latestBlogsStyles.card_header}>
                  Lorem ipsum dolor sit amet consectetur.
                </h6>
                <small className={latestBlogsStyles.category}>Fashion</small>
                <p className={latestBlogsStyles.card_paragraph}>
                  Voluptatem pariatur dicta eius eligendi eum fugit at id
                  maxime!
                </p>
                <a href='#' className={latestBlogsStyles.card_btn}>
                  Read More{' '}
                  <span className={latestBlogsStyles.span_btn_svg}>
                    <svg
                      width='60'
                      height='8'
                      className={latestBlogsStyles.btn_svg}
                      viewBox='0 0 68 8'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M67.3536 4.35355C67.5488 4.15829 67.5488 3.84171 67.3536 3.64645L64.1716 0.464466C63.9763 0.269204 63.6597 0.269204 63.4645 0.464466C63.2692 0.659728 63.2692 0.976311 63.4645 1.17157L66.2929 4L63.4645 6.82843C63.2692 7.02369 63.2692 7.34027 63.4645 7.53553C63.6597 7.7308 63.9763 7.7308 64.1716 7.53553L67.3536 4.35355ZM0 4.5H67V3.5H0V4.5Z'
                        fill='#4554DD'
                      />
                    </svg>
                  </span>
                </a>
              </div>
              <div className={latestBlogsStyles.card}>
                <div className={latestBlogsStyles.image_div}>
                  <img
                    src='../images/giwa.png'
                    alt='card_image'
                    className={latestBlogsStyles.image}
                  />
                </div>
                <h6 className={latestBlogsStyles.card_header}>
                  Lorem ipsum dolor sit amet consectetur.
                </h6>
                <small className={latestBlogsStyles.category}>Fashion</small>
                <p className={latestBlogsStyles.card_paragraph}>
                  Voluptatem pariatur dicta eius eligendi eum fugit at id
                  maxime!
                </p>
                <a href='#' className={latestBlogsStyles.card_btn}>
                  Read More{' '}
                  <span className={latestBlogsStyles.span_btn_svg}>
                    <svg
                      width='60'
                      height='8'
                      className={latestBlogsStyles.btn_svg}
                      viewBox='0 0 68 8'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M67.3536 4.35355C67.5488 4.15829 67.5488 3.84171 67.3536 3.64645L64.1716 0.464466C63.9763 0.269204 63.6597 0.269204 63.4645 0.464466C63.2692 0.659728 63.2692 0.976311 63.4645 1.17157L66.2929 4L63.4645 6.82843C63.2692 7.02369 63.2692 7.34027 63.4645 7.53553C63.6597 7.7308 63.9763 7.7308 64.1716 7.53553L67.3536 4.35355ZM0 4.5H67V3.5H0V4.5Z'
                        fill='#4554DD'
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default LatestBlogs
