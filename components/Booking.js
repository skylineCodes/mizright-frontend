import { useState, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@material-ui/core';
import { TextField, InputLabel } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { KeyboardBackspace, Add } from '@material-ui/icons';
import { faAngleDown, faUpload } from '@fortawesome/free-solid-svg-icons';
import bookingStyles from '../styles/Booking.module.scss';

const Booking = () => {
  const hide = useRef("");
  const hideMobile = useRef('');
  const hideAddButton = useRef('');
  const hideMobileAddButton = useRef('');
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
  const uploadMobileOne = useRef("");
  const uploadMobileTwo = useRef("");
  const uploadMobileThree = useRef("");
  const uploadMobileFour = useRef("");
  const uploadMobileFive = useRef('');

  const [clothStateOne, setClothStateOne] = useState({
    cloth: '',
    name: 'hai',
  });

  const handleClothChangeOne = (event) => {
    const name = event.target.name;
    setClothStateOne({
      ...clothStateOne,
      [name]: event.target.value,
    });
  };

  const [clothStateTwo, setClothStateTwo] = useState({
    cloth: '',
    name: 'hai',
  });

  const handleClothChangeTwo = (event) => {
    const name = event.target.name;
    setClothStateTwo({
      ...clothStateTwo,
      [name]: event.target.value,
    });
  };

  const [clothStateThree, setClothStateThree] = useState({
    cloth: '',
    name: 'hai',
  });

  const handleClothChangeThree = (event) => {
    const name = event.target.name;
    setClothStateThree({
      ...clothStateThree,
      [name]: event.target.value,
    });
  };

  const [clothStateFour, setClothStateFour] = useState({
    cloth: '',
    name: 'hai',
  });

  const handleClothChangeFour = (event) => {
    const name = event.target.name;
    setClothStateFour({
      ...clothStateFour,
      [name]: event.target.value,
    });
  };

  const [clothStateFive, setClothStateFive] = useState({
    cloth: '',
    name: 'hai',
  });

  const handleClothChangeFive = (event) => {
    const name = event.target.name;
    setClothStateFive({
      ...clothStateFive,
      [name]: event.target.value,
    });
  };
  
  const [quantityStateOne, setQuantityStateOne] = useState({
    quantity: '',
    name: 'hai',
  });

  const handleQuantityChangeOne = (event) => {
    const name = event.target.name;
    setQuantityStateOne({
      ...quantityStateOne,
      [name]: event.target.value,
    });
  };

  const [quantityStateTwo, setQuantityStateTwo] = useState({
    quantity: '',
    name: 'hai',
  });

  const handleQuantityChangeTwo = (event) => {
    const name = event.target.name;
    setQuantityStateTwo({
      ...quantityStateTwo,
      [name]: event.target.value,
    });
  };

  const [quantityStateThree, setQuantityStateThree] = useState({
    quantity: '',
    name: 'hai',
  });

  const handleQuantityChangeThree = (event) => {
    const name = event.target.name;
    setQuantityStateThree({
      ...quantityStateThree,
      [name]: event.target.value,
    });
  };

  const [quantityStateFour, setQuantityStateFour] = useState({
    quantity: '',
    name: 'hai',
  });

  const handleQuantityChangeFour = (event) => {
    const name = event.target.name;
    setQuantityStateFour({
      ...quantityStateFour,
      [name]: event.target.value,
    });
  };

  const [quantityStateFive, setQuantityStateFive] = useState({
    quantity: '',
    name: 'hai',
  });

  const handleQuantityChangeFive = (event) => {
    const name = event.target.name;
    setQuantityStateFive({
      ...quantityStateFive,
      [name]: event.target.value,
    });
  };

  const [logisticsStateOne, setLogisticsStateOne] = useState({
    logistics: '',
    name: 'hai',
  });

  const handleLogisticsChangeOne = (event) => {
    const name = event.target.name;
    setLogisticsStateOne({
      ...logisticsStateOne,
      [name]: event.target.value,
    });
  };

  const [logisticsStateTwo, setLogisticsStateTwo] = useState({
    logistics: '',
    name: 'hai',
  });

  const handleLogisticsChangeTwo = (event) => {
    const name = event.target.name;
    setLogisticsStateTwo({
      ...logisticsStateTwo,
      [name]: event.target.value,
    });
  };

  const [logisticsStateThree, setLogisticsStateThree] = useState({
    logistics: '',
    name: 'hai',
  });

  const handleLogisticsChangeThree = (event) => {
    const name = event.target.name;
    setLogisticsStateThree({
      ...logisticsStateThree,
      [name]: event.target.value,
    });
  };

  const [logisticsStateFour, setLogisticsStateFour] = useState({
    logistics: '',
    name: 'hai',
  });

  const handleLogisticsChangeFour = (event) => {
    const name = event.target.name;
    setLogisticsStateFour({
      ...logisticsStateFour,
      [name]: event.target.value,
    });
  };

  const [logisticsStateFive, setLogisticsStateFive] = useState({
    logistics: '',
    name: 'hai',
  });

  const handleLogisticsChangeFive = (event) => {
    const name = event.target.name;
    setLogisticsStateFive({
      ...logisticsStateFive,
      [name]: event.target.value,
    });
  };

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

  const hideMobileDiv = () => {
    for (let i = 3; i < hideMobile.current.children.length; i++) {
      if (hideMobile.current.children[i].style.display === '') {
        hideMobile.current.children[i].style.display = 'flex';
        break;
      }
      if (i === hideMobile.current.children.length - 3) {
        hideMobileAddButton.current.style.display = 'none';
      }
    }
  }

  const [uploadOneValue, setUploadOneValue] = useState('');

  const uploadImageMobileOne = () => {
    uploadMobileOne.current.click();

    uploadMobileOne.current.addEventListener("change", (e) => {
      const file = e.target.files[0];
      
      if (file) {
        setUploadOneValue(file.name);
      }
    });
  }

  const [uploadTwoValue, setUploadTwoValue] = useState('');

  const uploadImageMobileTwo = () => {
    uploadMobileTwo.current.click();

    uploadMobileTwo.current.addEventListener("change", (e) => {
      const file = e.target.files[0];
      
      if (file) {
        setUploadTwoValue(file.name);
      }
    });
  }

  const [uploadThreeValue, setUploadThreeValue] = useState('');

  const uploadImageMobileThree = () => {
    uploadMobileThree.current.click();

    uploadMobileThree.current.addEventListener("change", (e) => {
      const file = e.target.files[0];
      
      if (file) {
        setUploadThreeValue(file.name);
      }
    });
  }

  const [uploadFourValue, setUploadFourValue] = useState('');

  const uploadImageMobileFour = () => {
    uploadMobileFour.current.click();

    uploadMobileFour.current.addEventListener("change", (e) => {
      const file = e.target.files[0];
      
      if (file) {
        setUploadFourValue(file.name);
      }
    });
  }

  const [uploadFiveValue, setUploadFiveValue] = useState('');

  const uploadImageMobileFive = () => {
    uploadMobileFive.current.click();

    uploadMobileFive.current.addEventListener("change", (e) => {
      const file = e.target.files[0];
      
      if (file) {
        setUploadFiveValue(file.name);
      }
    });
  }

  return (
    <>
      <section className={bookingStyles.booking}>
        <div className={bookingStyles.card_mobile}>
          <div className={bookingStyles.card_mobile_header}>
            <div className={bookingStyles.card_mobile_icon}>
              <div className={bookingStyles.card_mobile_arrow_back}>
                <Link href='/' scroll={false}>
                  <IconButton>
                    <KeyboardBackspace
                      style={{ fontSize: 40, color: '#000' }}
                    />
                  </IconButton>
                </Link>
              </div>
              <div className={bookingStyles.card_mobile_header_div}>
                <h5 className={bookingStyles.card_mobile_header_text}>
                  Fabric Details
                </h5>
              </div>
            </div>
            <div className={bookingStyles.card_mobile_progress_bar}>
              <div className={bookingStyles.card_mobile_progress_bar_text}>
                1 0f 3
              </div>
              <svg className={bookingStyles.card_mobile_progress_bar_svg}>
                <circle
                  className={bookingStyles.card_mobile_svg_circle}
                  cx='40'
                  cy='40'
                  r='37'
                ></circle>
                <circle
                  className={bookingStyles.card_mobile_svg_progress}
                  cx='40'
                  cy='40'
                  r='37'
                ></circle>
              </svg>
            </div>
          </div>
          <div ref={hideMobile} className={bookingStyles.card_mobile_body}>
            <div className={bookingStyles.card_mobile_div_one}>
              <div className={bookingStyles.first_row}>
                <div className={bookingStyles.cloth_type}>
                  <FormControl className={bookingStyles.formControl}>
                    <InputLabel htmlFor='age-native-simple'>
                      Cloth Type
                    </InputLabel>
                    <Select
                      native
                      value={clothStateOne.cloth}
                      onChange={handleClothChangeOne}
                      inputProps={{
                        name: 'cloth',
                        id: 'age-native-simple',
                      }}
                    >
                      <option aria-label='None' value='' />
                      <option value={10}>Short Gown</option>
                      <option value={20}>Long Gown</option>
                      <option value={30}>Pant</option>
                    </Select>
                  </FormControl>
                </div>
                <div
                  className={bookingStyles.upload_image}
                  onClick={() => {
                    uploadImageMobileOne();
                  }}
                >
                  <input
                    type='file'
                    className={bookingStyles.upload_image_input_file}
                    placeholder='Upload Image'
                    ref={uploadMobileOne}
                    hidden
                  />
                  <TextField
                    id='standard-basic'
                    label='Upload Image'
                    value={uploadOneValue}
                    className={bookingStyles.upload_image_input}
                  />
                  <span className={bookingStyles.upload}>
                    <FontAwesomeIcon
                      icon={faUpload}
                      className={bookingStyles.upload_icon}
                    />
                  </span>
                </div>
              </div>
              <div className={bookingStyles.second_row}>
                <div className={bookingStyles.quantity}>
                  <FormControl className={bookingStyles.quantityFormControl}>
                    <InputLabel htmlFor='quantity-native-simple'>
                      Quantity
                    </InputLabel>
                    <Select
                      native
                      value={quantityStateOne.quantity}
                      onChange={handleQuantityChangeOne}
                      inputProps={{
                        name: 'quantity',
                        id: 'quantity-native-simple',
                      }}
                    >
                      <option aria-label='None' value='' />
                      <option value={1}>1 {''}</option>
                      <option value={2}>2 {''}</option>
                      <option value={3}>3 {''}</option>
                      <option value={4}>4 {''}</option>
                      <option value={5}>5 {''}</option>
                    </Select>
                  </FormControl>
                </div>
                <div className={bookingStyles.logistics}>
                  <FormControl className={bookingStyles.formControl}>
                    <InputLabel htmlFor='logistics-native-simple'>
                      Logistics
                    </InputLabel>
                    <Select
                      native
                      value={logisticsStateOne.logistics}
                      onChange={handleLogisticsChangeOne}
                      inputProps={{
                        name: 'logistics',
                        id: 'logistics-native-simple',
                      }}
                    >
                      <option aria-label='None' value='' />
                      <option value={1}>Sort fabric {''}</option>
                      <option value={2}>I have fabric {''}</option>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className={bookingStyles.card_mobile_div_two}>
              <div className={bookingStyles.first_row}>
                <div className={bookingStyles.cloth_type}>
                  <FormControl className={bookingStyles.formControl}>
                    <InputLabel htmlFor='age-native-simple'>
                      Cloth Type
                    </InputLabel>
                    <Select
                      native
                      value={clothStateTwo.cloth}
                      onChange={handleClothChangeTwo}
                      inputProps={{
                        name: 'cloth',
                        id: 'age-native-simple',
                      }}
                    >
                      <option aria-label='None' value='' />
                      <option value={10}>Short Gown</option>
                      <option value={20}>Long Gown</option>
                      <option value={30}>Pant</option>
                    </Select>
                  </FormControl>
                </div>
                <div
                  className={bookingStyles.upload_image}
                  onClick={() => {
                    uploadImageMobileTwo();
                  }}
                >
                  <input
                    type='file'
                    className={bookingStyles.upload_image_input_file}
                    placeholder='Upload Image'
                    ref={uploadMobileTwo}
                    hidden
                  />
                  <TextField
                    id='standard-basic'
                    label='Upload Image'
                    value={uploadTwoValue}
                    className={bookingStyles.upload_image_input}
                  />
                  <span className={bookingStyles.upload}>
                    <FontAwesomeIcon
                      icon={faUpload}
                      className={bookingStyles.upload_icon}
                    />
                  </span>
                </div>
              </div>
              <div className={bookingStyles.second_row}>
                <div className={bookingStyles.quantity}>
                  <FormControl className={bookingStyles.quantityFormControl}>
                    <InputLabel htmlFor='quantity-native-simple'>
                      Quantity
                    </InputLabel>
                    <Select
                      native
                      value={quantityStateTwo.quantity}
                      onChange={handleQuantityChangeTwo}
                      inputProps={{
                        name: 'quantity',
                        id: 'quantity-native-simple',
                      }}
                    >
                      <option aria-label='None' value='' />
                      <option value={1}>1 {''}</option>
                      <option value={2}>2 {''}</option>
                      <option value={3}>3 {''}</option>
                      <option value={4}>4 {''}</option>
                      <option value={5}>5 {''}</option>
                    </Select>
                  </FormControl>
                </div>
                <div className={bookingStyles.logistics}>
                  <FormControl className={bookingStyles.formControl}>
                    <InputLabel htmlFor='logistics-native-simple'>
                      Logistics
                    </InputLabel>
                    <Select
                      native
                      value={logisticsStateTwo.logistics}
                      onChange={handleLogisticsChangeTwo}
                      inputProps={{
                        name: 'logistics',
                        id: 'logistics-native-simple',
                      }}
                    >
                      <option aria-label='None' value='' />
                      <option value={1}>Sort fabric {''}</option>
                      <option value={2}>I have fabric {''}</option>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className={bookingStyles.card_mobile_div_three}>
              <div className={bookingStyles.first_row}>
                <div className={bookingStyles.cloth_type}>
                  <FormControl className={bookingStyles.formControl}>
                    <InputLabel htmlFor='age-native-simple'>
                      Cloth Type
                    </InputLabel>
                    <Select
                      native
                      value={clothStateThree.cloth}
                      onChange={handleClothChangeThree}
                      inputProps={{
                        name: 'cloth',
                        id: 'age-native-simple',
                      }}
                    >
                      <option aria-label='None' value='' />
                      <option value={10}>Short Gown</option>
                      <option value={20}>Long Gown</option>
                      <option value={30}>Pant</option>
                    </Select>
                  </FormControl>
                </div>
                <div
                  className={bookingStyles.upload_image}
                  onClick={() => {
                    uploadImageMobileThree();
                  }}
                >
                  <input
                    type='file'
                    className={bookingStyles.upload_image_input_file}
                    placeholder='Upload Image'
                    ref={uploadMobileThree}
                    hidden
                  />
                  <TextField
                    id='standard-basic'
                    label='Upload Image'
                    value={uploadThreeValue}
                    className={bookingStyles.upload_image_input}
                  />
                  <span className={bookingStyles.upload}>
                    <FontAwesomeIcon
                      icon={faUpload}
                      className={bookingStyles.upload_icon}
                    />
                  </span>
                </div>
              </div>
              <div className={bookingStyles.second_row}>
                <div className={bookingStyles.quantity}>
                  <FormControl className={bookingStyles.quantityFormControl}>
                    <InputLabel htmlFor='quantity-native-simple'>
                      Quantity
                    </InputLabel>
                    <Select
                      native
                      value={quantityStateThree.quantity}
                      onChange={handleQuantityChangeThree}
                      inputProps={{
                        name: 'quantity',
                        id: 'quantity-native-simple',
                      }}
                    >
                      <option aria-label='None' value='' />
                      <option value={1}>1 {''}</option>
                      <option value={2}>2 {''}</option>
                      <option value={3}>3 {''}</option>
                      <option value={4}>4 {''}</option>
                      <option value={5}>5 {''}</option>
                    </Select>
                  </FormControl>
                </div>
                <div className={bookingStyles.logistics}>
                  <FormControl className={bookingStyles.formControl}>
                    <InputLabel htmlFor='logistics-native-simple'>
                      Logistics
                    </InputLabel>
                    <Select
                      native
                      value={logisticsStateThree.logistics}
                      onChange={handleLogisticsChangeThree}
                      inputProps={{
                        name: 'logistics',
                        id: 'logistics-native-simple',
                      }}
                    >
                      <option aria-label='None' value='' />
                      <option value={1}>Sort fabric {''}</option>
                      <option value={2}>I have fabric {''}</option>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className={bookingStyles.card_mobile_div_four}>
              <div className={bookingStyles.first_row}>
                <div className={bookingStyles.cloth_type}>
                  <FormControl className={bookingStyles.formControl}>
                    <InputLabel htmlFor='age-native-simple'>
                      Cloth Type
                    </InputLabel>
                    <Select
                      native
                      value={clothStateFour.cloth}
                      onChange={handleClothChangeFour}
                      inputProps={{
                        name: 'cloth',
                        id: 'age-native-simple',
                      }}
                    >
                      <option aria-label='None' value='' />
                      <option value={10}>Short Gown</option>
                      <option value={20}>Long Gown</option>
                      <option value={30}>Pant</option>
                    </Select>
                  </FormControl>
                </div>
                <div
                  className={bookingStyles.upload_image}
                  onClick={() => {
                    uploadImageMobileFour();
                  }}
                >
                  <input
                    type='file'
                    className={bookingStyles.upload_image_input_file}
                    placeholder='Upload Image'
                    ref={uploadMobileFour}
                    hidden
                  />
                  <TextField
                    id='standard-basic'
                    label='Upload Image'
                    value={uploadFourValue}
                    className={bookingStyles.upload_image_input}
                  />
                  <span className={bookingStyles.upload}>
                    <FontAwesomeIcon
                      icon={faUpload}
                      className={bookingStyles.upload_icon}
                    />
                  </span>
                </div>
              </div>
              <div className={bookingStyles.second_row}>
                <div className={bookingStyles.quantity}>
                  <FormControl className={bookingStyles.quantityFormControl}>
                    <InputLabel htmlFor='quantity-native-simple'>
                      Quantity
                    </InputLabel>
                    <Select
                      native
                      value={quantityStateFour.quantity}
                      onChange={handleQuantityChangeFour}
                      inputProps={{
                        name: 'quantity',
                        id: 'quantity-native-simple',
                      }}
                    >
                      <option aria-label='None' value='' />
                      <option value={1}>1 {''}</option>
                      <option value={2}>2 {''}</option>
                      <option value={3}>3 {''}</option>
                      <option value={4}>4 {''}</option>
                      <option value={5}>5 {''}</option>
                    </Select>
                  </FormControl>
                </div>
                <div className={bookingStyles.logistics}>
                  <FormControl className={bookingStyles.formControl}>
                    <InputLabel htmlFor='logistics-native-simple'>
                      Logistics
                    </InputLabel>
                    <Select
                      native
                      value={logisticsStateFour.logistics}
                      onChange={handleLogisticsChangeFour}
                      inputProps={{
                        name: 'logistics',
                        id: 'logistics-native-simple',
                      }}
                    >
                      <option aria-label='None' value='' />
                      <option value={1}>Sort fabric {''}</option>
                      <option value={2}>I have fabric {''}</option>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className={bookingStyles.card_mobile_div_four}>
              <div className={bookingStyles.first_row}>
                <div className={bookingStyles.cloth_type}>
                  <FormControl className={bookingStyles.formControl}>
                    <InputLabel htmlFor='age-native-simple'>
                      Cloth Type
                    </InputLabel>
                    <Select
                      native
                      value={clothStateFive.cloth}
                      onChange={handleClothChangeFive}
                      inputProps={{
                        name: 'cloth',
                        id: 'age-native-simple',
                      }}
                    >
                      <option aria-label='None' value='' />
                      <option value={10}>Short Gown</option>
                      <option value={20}>Long Gown</option>
                      <option value={30}>Pant</option>
                    </Select>
                  </FormControl>
                </div>
                <div
                  className={bookingStyles.upload_image}
                  onClick={() => {
                    uploadImageMobileFive();
                  }}
                >
                  <input
                    type='file'
                    className={bookingStyles.upload_image_input_file}
                    placeholder='Upload Image'
                    ref={uploadMobileFive}
                    hidden
                  />
                  <TextField
                    id='standard-basic'
                    label='Upload Image'
                    value={uploadFiveValue}
                    className={bookingStyles.upload_image_input}
                  />
                  <span className={bookingStyles.upload}>
                    <FontAwesomeIcon
                      icon={faUpload}
                      className={bookingStyles.upload_icon}
                    />
                  </span>
                </div>
              </div>
              <div className={bookingStyles.second_row}>
                <div className={bookingStyles.quantity}>
                  <FormControl className={bookingStyles.quantityFormControl}>
                    <InputLabel htmlFor='quantity-native-simple'>
                      Quantity
                    </InputLabel>
                    <Select
                      native
                      value={quantityStateFive.quantity}
                      onChange={handleQuantityChangeFive}
                      inputProps={{
                        name: 'quantity',
                        id: 'quantity-native-simple',
                      }}
                    >
                      <option aria-label='None' value='' />
                      <option value={1}>1 {''}</option>
                      <option value={2}>2 {''}</option>
                      <option value={3}>3 {''}</option>
                      <option value={4}>4 {''}</option>
                      <option value={5}>5 {''}</option>
                    </Select>
                  </FormControl>
                </div>
                <div className={bookingStyles.logistics}>
                  <FormControl className={bookingStyles.formControl}>
                    <InputLabel htmlFor='logistics-native-simple'>
                      Logistics
                    </InputLabel>
                    <Select
                      native
                      value={logisticsStateFive.logistics}
                      onChange={handleLogisticsChangeFive}
                      inputProps={{
                        name: 'logistics',
                        id: 'logistics-native-simple',
                      }}
                    >
                      <option aria-label='None' value='' />
                      <option value={1}>Sort fabric {''}</option>
                      <option value={2}>I have fabric {''}</option>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div
              ref={hideMobileAddButton}
              className={bookingStyles.add_button_div}
            >
              <div className={bookingStyles.add_button}>
                <IconButton>
                  <Add
                    style={{ fontSize: 40, borderRadius: '50%' }}
                    className={bookingStyles.add_button_icon}
                    onClick={() => {
                      hideMobileDiv();
                    }}
                  />
                </IconButton>
              </div>
            </div>
          </div>
          <div className={bookingStyles.card_mobile_footer}>
            <div className={bookingStyles.next_button_div}>
              <a href='#' className={bookingStyles.next_button}>
                Next{' '}
                <span>
                  <svg
                    width='60'
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
                  <IconButton>
                    <Add
                      style={{ fontSize: 40 }}
                      className={bookingStyles.add_button_icon}
                      onClick={() => {
                        hideDiv();
                      }}
                    />
                  </IconButton>
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
