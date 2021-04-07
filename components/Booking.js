import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faUpload, faPlus } from '@fortawesome/free-solid-svg-icons';
import bookingStyles from '../styles/Booking.module.scss';

const Booking = () => {
  const hide = useRef("");
  const hideAddButton = useRef('');
  const uploadOne = useRef('');
  const uploadTwo = useRef('');
  const uploadThree = useRef('');
  const uploadFour = useRef('');
  const uploadFive = useRef('');
  const uploadInputOne = useRef("");
  const uploadInputTwo = useRef("");
  const uploadInputThree = useRef("");
  const uploadInputFour = useRef("");
  const uploadInputFive = useRef("");

  const openFileOne = () => {
    uploadOne.current.click();

    uploadOne.current.addEventListener('change', (e) => {
      const file = e.target.files[0];

      if (file) {
        uploadInputOne.current.value = file.name;
      }
    });
  }

  const openFileTwo = () => {
    uploadTwo.current.click();

    uploadTwo.current.addEventListener('change', (e) => {
      const file = e.target.files[0];

      if (file) {
        uploadInputTwo.current.value = file.name;
      }
    });
  }

  const openFileThree = () => {
    uploadThree.current.click();

    uploadThree.current.addEventListener('change', (e) => {
      const file = e.target.files[0];

      if (file) {
        uploadInputThree.current.value = file.name;
      }
    });
  }

  const openFileFour = () => {
    uploadFour.current.click();

    uploadFour.current.addEventListener("change", (e) => {
      const file = e.target.files[0];

      if (file) {
        uploadInputFour.current.value = file.name;
      }
    });
  }

  const openFileFive = () => {
    uploadFive.current.click();

    uploadFive.current.addEventListener("change", (e) => {
      const file = e.target.files[0];

      if (file) {
        uploadInputFive.current.value = file.name;
      }
    });
  }

  const hideDiv = () => {
    for (let i = 3; i < hide.current.children.length; i++) {
      if (hide.current.children[i].style.display === "") {
        hide.current.children[i].style.display = 'grid';
        break;
      }
      if (i === hide.current.children.length - 3) {
         hideAddButton.current.style.display = 'none';   
      }
    }
  }

  return (
    <>
      <section className={bookingStyles.booking}>
        <div className={bookingStyles.card}>
          <div className={bookingStyles.header}>
            <span className={bookingStyles.fabric_header}>Fabric Details</span>
            <span className={bookingStyles.measurements_header}>
              Measurements
            </span>
            <span className={bookingStyles.payment_header}>Payment</span>
          </div>
          <div className={bookingStyles.card_body}>
            <div className={bookingStyles.body_header}>
              <span className={bookingStyles.cloth_type}>Cloth Type</span>
              <span className={bookingStyles.sample_style}>Sample Style</span>
              <span className={bookingStyles.quantity}>Quantity</span>
              <span className={bookingStyles.logistics}>Logistics</span>
            </div>
            <div ref={hide} className={bookingStyles.body_content}>
              <div className={bookingStyles.div_one}>
                <div className={bookingStyles.cloth_type}>
                  <select className={bookingStyles.cloth_type_select}>
                    <option disabled selected>
                      Select type
                    </option>
                    <option value='top'>Top</option>
                    <option value='short_skirt'>Short Skirt</option>
                    <option value='short_gown'>Short Gown</option>
                    <option value='long_gown'>Long Gown</option>
                  </select>
                  <span className={bookingStyles.caret}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={bookingStyles.caret_icon}
                    />
                  </span>
                </div>
                <div className={bookingStyles.upload_image}>
                  <input
                    type='file'
                    className={bookingStyles.upload_image_input_file}
                    placeholder='Upload Image'
                    ref={uploadOne}
                    hidden
                  />
                  <input
                    type='text'
                    className={bookingStyles.upload_image_input}
                    placeholder='Upload Image'
                    ref={uploadInputOne}
                  />
                  <span className={bookingStyles.upload}>
                    <FontAwesomeIcon
                      icon={faUpload}
                      className={bookingStyles.upload_icon}
                      onClick={() => {
                        openFileOne();
                      }}
                    />
                  </span>
                </div>
                <div className={bookingStyles.quantity}>
                  <select className={bookingStyles.quantity_select}>
                    <option selected value='one'>
                      1
                    </option>
                    <option value='two'>2</option>
                    <option value='three'>3</option>
                    <option value='four'>4</option>
                  </select>
                  <span className={bookingStyles.caret}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={bookingStyles.caret_icon}
                    />
                  </span>
                </div>
                <div className={bookingStyles.logistics}>
                  <select className={bookingStyles.logistics_select}>
                    <option selected value='sort_fabric'>
                      Sort Fabric
                    </option>
                    <option value='have_fabric'>I have Fabric</option>
                  </select>
                  <span className={bookingStyles.caret}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={bookingStyles.caret_icon}
                    />
                  </span>
                </div>
              </div>
              <div className={bookingStyles.div_two}>
                <div className={bookingStyles.cloth_type}>
                  <select className={bookingStyles.cloth_type_select}>
                    <option disabled selected>
                      Select type
                    </option>
                    <option value='top'>Top</option>
                    <option value='short_skirt'>Short Skirt</option>
                    <option value='short_gown'>Short Gown</option>
                    <option value='long_gown'>Long Gown</option>
                  </select>
                  <span className={bookingStyles.caret}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={bookingStyles.caret_icon}
                    />
                  </span>
                </div>
                <div className={bookingStyles.upload_image}>
                  <input
                    type='file'
                    className={bookingStyles.upload_image_input_file}
                    placeholder='Upload Image'
                    ref={uploadTwo}
                    hidden
                  />
                  <input
                    type='text'
                    className={bookingStyles.upload_image_input}
                    placeholder='Upload Image'
                    ref={uploadInputTwo}
                  />
                  <span className={bookingStyles.upload}>
                    <FontAwesomeIcon
                      icon={faUpload}
                      className={bookingStyles.upload_icon}
                      onClick={() => {
                        openFileTwo();
                      }}
                    />
                  </span>
                </div>
                <div className={bookingStyles.quantity}>
                  <select className={bookingStyles.quantity_select}>
                    <option selected value='one'>
                      1
                    </option>
                    <option value='two'>2</option>
                    <option value='three'>3</option>
                    <option value='four'>4</option>
                  </select>
                  <span className={bookingStyles.caret}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={bookingStyles.caret_icon}
                    />
                  </span>
                </div>
                <div className={bookingStyles.logistics}>
                  <select className={bookingStyles.logistics_select}>
                    <option selected value='sort_fabric'>
                      Sort Fabric
                    </option>
                    <option value='have_fabric'>I have Fabric</option>
                  </select>
                  <span className={bookingStyles.caret}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={bookingStyles.caret_icon}
                    />
                  </span>
                </div>
              </div>
              <div className={bookingStyles.div_three}>
                <div className={bookingStyles.cloth_type}>
                  <select className={bookingStyles.cloth_type_select}>
                    <option disabled selected>
                      Select type
                    </option>
                    <option value='top'>Top</option>
                    <option value='short_skirt'>Short Skirt</option>
                    <option value='short_gown'>Short Gown</option>
                    <option value='long_gown'>Long Gown</option>
                  </select>
                  <span className={bookingStyles.caret}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={bookingStyles.caret_icon}
                    />
                  </span>
                </div>
                <div className={bookingStyles.upload_image}>
                  <input
                    type='file'
                    className={bookingStyles.upload_image_input_file}
                    placeholder='Upload Image'
                    ref={uploadThree}
                    hidden
                  />
                  <input
                    type='text'
                    className={bookingStyles.upload_image_input}
                    placeholder='Upload Image'
                    ref={uploadInputThree}
                  />
                  <span className={bookingStyles.upload}>
                    <FontAwesomeIcon
                      icon={faUpload}
                      className={bookingStyles.upload_icon}
                      onClick={() => {
                        openFileThree();
                      }}
                    />
                  </span>
                </div>
                <div className={bookingStyles.quantity}>
                  <select className={bookingStyles.quantity_select}>
                    <option selected value='one'>
                      1
                    </option>
                    <option value='two'>2</option>
                    <option value='three'>3</option>
                    <option value='four'>4</option>
                  </select>
                  <span className={bookingStyles.caret}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={bookingStyles.caret_icon}
                    />
                  </span>
                </div>
                <div className={bookingStyles.logistics}>
                  <select className={bookingStyles.logistics_select}>
                    <option selected value='sort_fabric'>
                      Sort Fabric
                    </option>
                    <option value='have_fabric'>I have Fabric</option>
                  </select>
                  <span className={bookingStyles.caret}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={bookingStyles.caret_icon}
                    />
                  </span>
                </div>
              </div>
              <div className={bookingStyles.div_four}>
                <div className={bookingStyles.cloth_type}>
                  <select className={bookingStyles.cloth_type_select}>
                    <option disabled selected>
                      Select type
                    </option>
                    <option value='top'>Top</option>
                    <option value='short_skirt'>Short Skirt</option>
                    <option value='short_gown'>Short Gown</option>
                    <option value='long_gown'>Long Gown</option>
                  </select>
                  <span className={bookingStyles.caret}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={bookingStyles.caret_icon}
                    />
                  </span>
                </div>
                <div className={bookingStyles.upload_image}>
                  <input
                    type='file'
                    className={bookingStyles.upload_image_input_file}
                    placeholder='Upload Image'
                    ref={uploadFour}
                    hidden
                  />
                  <input
                    type='text'
                    className={bookingStyles.upload_image_input}
                    placeholder='Upload Image'
                    ref={uploadInputFour}
                  />
                  <span className={bookingStyles.upload}>
                    <FontAwesomeIcon
                      icon={faUpload}
                      className={bookingStyles.upload_icon}
                      onClick={() => {
                        openFileFour();
                      }}
                    />
                  </span>
                </div>
                <div className={bookingStyles.quantity}>
                  <select className={bookingStyles.quantity_select}>
                    <option selected value='one'>
                      1
                    </option>
                    <option value='two'>2</option>
                    <option value='three'>3</option>
                    <option value='four'>4</option>
                  </select>
                  <span className={bookingStyles.caret}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={bookingStyles.caret_icon}
                    />
                  </span>
                </div>
                <div className={bookingStyles.logistics}>
                  <select className={bookingStyles.logistics_select}>
                    <option selected value='sort_fabric'>
                      Sort Fabric
                    </option>
                    <option value='have_fabric'>I have Fabric</option>
                  </select>
                  <span className={bookingStyles.caret}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={bookingStyles.caret_icon}
                    />
                  </span>
                </div>
              </div>
              <div className={bookingStyles.div_five}>
                <div className={bookingStyles.cloth_type}>
                  <select className={bookingStyles.cloth_type_select}>
                    <option disabled selected>
                      Select type
                    </option>
                    <option value='top'>Top</option>
                    <option value='short_skirt'>Short Skirt</option>
                    <option value='short_gown'>Short Gown</option>
                    <option value='long_gown'>Long Gown</option>
                  </select>
                  <span className={bookingStyles.caret}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={bookingStyles.caret_icon}
                    />
                  </span>
                </div>
                <div className={bookingStyles.upload_image}>
                  <input
                    type='file'
                    className={bookingStyles.upload_image_input_file}
                    placeholder='Upload Image'
                    ref={uploadFive}
                    hidden
                  />
                  <input
                    type='text'
                    className={bookingStyles.upload_image_input}
                    placeholder='Upload Image'
                    ref={uploadInputFive}
                  />
                  <span className={bookingStyles.upload}>
                    <FontAwesomeIcon
                      icon={faUpload}
                      className={bookingStyles.upload_icon}
                      onClick={() => {
                        openFileFive();
                      }}
                    />
                  </span>
                </div>
                <div className={bookingStyles.quantity}>
                  <select className={bookingStyles.quantity_select}>
                    <option selected value='one'>
                      1
                    </option>
                    <option value='two'>2</option>
                    <option value='three'>3</option>
                    <option value='four'>4</option>
                  </select>
                  <span className={bookingStyles.caret}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={bookingStyles.caret_icon}
                    />
                  </span>
                </div>
                <div className={bookingStyles.logistics}>
                  <select className={bookingStyles.logistics_select}>
                    <option selected value='sort_fabric'>
                      Sort Fabric
                    </option>
                    <option value='have_fabric'>I have Fabric</option>
                  </select>
                  <span className={bookingStyles.caret}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={bookingStyles.caret_icon}
                    />
                  </span>
                </div>
              </div>
              <div className={bookingStyles.div_five}>
                <div className={bookingStyles.cloth_type}>
                  <select className={bookingStyles.cloth_type_select}>
                    <option disabled selected>
                      Select type
                    </option>
                    <option value='top'>Top</option>
                    <option value='short_skirt'>Short Skirt</option>
                    <option value='short_gown'>Short Gown</option>
                    <option value='long_gown'>Long Gown</option>
                  </select>
                  <span className={bookingStyles.caret}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={bookingStyles.caret_icon}
                    />
                  </span>
                </div>
                <div className={bookingStyles.upload_image}>
                  <input
                    type='file'
                    className={bookingStyles.upload_image_input_file}
                    placeholder='Upload Image'
                    ref={uploadFive}
                    hidden
                  />
                  <input
                    type='text'
                    className={bookingStyles.upload_image_input}
                    placeholder='Upload Image'
                    ref={uploadInputFive}
                  />
                  <span className={bookingStyles.upload}>
                    <FontAwesomeIcon
                      icon={faUpload}
                      className={bookingStyles.upload_icon}
                      onClick={() => {
                        openFileFive();
                      }}
                    />
                  </span>
                </div>
                <div className={bookingStyles.quantity}>
                  <select className={bookingStyles.quantity_select}>
                    <option selected value='one'>
                      1
                    </option>
                    <option value='two'>2</option>
                    <option value='three'>3</option>
                    <option value='four'>4</option>
                  </select>
                  <span className={bookingStyles.caret}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={bookingStyles.caret_icon}
                    />
                  </span>
                </div>
                <div className={bookingStyles.logistics}>
                  <select className={bookingStyles.logistics_select}>
                    <option selected value='sort_fabric'>
                      Sort Fabric
                    </option>
                    <option value='have_fabric'>I have Fabric</option>
                  </select>
                  <span className={bookingStyles.caret}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={bookingStyles.caret_icon}
                    />
                  </span>
                </div>
              </div>
              <div className={bookingStyles.div_five}>
                <div className={bookingStyles.cloth_type}>
                  <select className={bookingStyles.cloth_type_select}>
                    <option disabled selected>
                      Select type
                    </option>
                    <option value='top'>Top</option>
                    <option value='short_skirt'>Short Skirt</option>
                    <option value='short_gown'>Short Gown</option>
                    <option value='long_gown'>Long Gown</option>
                  </select>
                  <span className={bookingStyles.caret}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={bookingStyles.caret_icon}
                    />
                  </span>
                </div>
                <div className={bookingStyles.upload_image}>
                  <input
                    type='file'
                    className={bookingStyles.upload_image_input_file}
                    placeholder='Upload Image'
                    ref={uploadFive}
                    hidden
                  />
                  <input
                    type='text'
                    className={bookingStyles.upload_image_input}
                    placeholder='Upload Image'
                    ref={uploadInputFive}
                  />
                  <span className={bookingStyles.upload}>
                    <FontAwesomeIcon
                      icon={faUpload}
                      className={bookingStyles.upload_icon}
                      onClick={() => {
                        openFileFive();
                      }}
                    />
                  </span>
                </div>
                <div className={bookingStyles.quantity}>
                  <select className={bookingStyles.quantity_select}>
                    <option selected value='one'>
                      1
                    </option>
                    <option value='two'>2</option>
                    <option value='three'>3</option>
                    <option value='four'>4</option>
                  </select>
                  <span className={bookingStyles.caret}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={bookingStyles.caret_icon}
                    />
                  </span>
                </div>
                <div className={bookingStyles.logistics}>
                  <select className={bookingStyles.logistics_select}>
                    <option selected value='sort_fabric'>
                      Sort Fabric
                    </option>
                    <option value='have_fabric'>I have Fabric</option>
                  </select>
                  <span className={bookingStyles.caret}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={bookingStyles.caret_icon}
                    />
                  </span>
                </div>
              </div>

              <div ref={hideAddButton} className={bookingStyles.add_button_div}>
                <div className={bookingStyles.add_button}>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className={bookingStyles.add_button_icon}
                    onClick={() => {
                      hideDiv();
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={bookingStyles.body_footer}>
              <div className={bookingStyles.next_button_div}>
                <a href='#' className={bookingStyles.next_button}>
                  Next{' '}
                  <span>
                    <svg
                      width='86'
                      height='38'
                      className={bookingStyles.next_button_svg}
                      viewBox='0 0 146 38'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M144.768 20.7678C145.744 19.7914 145.744 18.2085 144.768 17.2322L128.858 1.32232C127.882 0.346009 126.299 0.346009 125.322 1.32232C124.346 2.29863 124.346 3.88154 125.322 4.85785L139.464 19L125.322 33.1421C124.346 34.1184 124.346 35.7013 125.322 36.6777C126.299 37.654 127.882 37.654 128.858 36.6777L144.768 20.7678ZM2.18557e-07 21.5L143 21.5L143 16.5L-2.18557e-07 16.5L2.18557e-07 21.5Z'
                        fill='white'
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
