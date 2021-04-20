import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import navStyles from '../styles/Nav.module.scss';

const Nav = () => {
    const nav = useRef('');
    const barIcon = useRef('');
    const timesIcon = useRef('');
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
    });

    const toggleNavBar = (value) => {
      if (window.matchMedia('(max-width: 989px)').matches && value === 'open') {
        nav.current.style.display = 'block';
        nav.current.style.transition = '5s';
        barIcon.current.style.display = 'none';
        timesIcon.current.style.display = 'block';
        timesIcon.current.style.transition = '10s';
      } else {
        nav.current.style.transition = '';
        nav.current.style.display = '';
        barIcon.current.style.display = 'block';
        timesIcon.current.style.display = 'none';
      }
    }

    const toggleLink = () => {
      nav.current.style.display = '';
      barIcon.current.style.display = 'block';
      timesIcon.current.style.display = 'none';
    };

    return (
      <header className={`${navStyles.header} && ${scrolled ? navStyles.scrolled : ''}`}>
        <h1 className={navStyles.logo}>
          <Link href='/'>
            <img
              src='../images/logos.jpg'
              alt='logo'
              className={navStyles.image}
            />
          </Link>
        </h1>
        <label className={navStyles.icon}>
          <span
            ref={barIcon}
            className={navStyles.bars}
            onClick={() => toggleNavBar('open')}
          >
            <FontAwesomeIcon icon={faBars} />
          </span>
          <span
            ref={timesIcon}
            className={navStyles.cancel}
            onClick={() => toggleNavBar('close')}
          >
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <ul className={navStyles.nav_buttons_mobile}>
          <li className={navStyles.nav_penultimate_item} onClick={toggleLink}>
            <Link href='#'>Log In</Link>
          </li>
          <li className={navStyles.nav_last_item} onClick={toggleLink}>
            <Link href='#'>Sign Up</Link>
          </li>
        </ul>
        <nav ref={nav} className={navStyles.nav}>
          <ul className={navStyles.nav_list}>
            <li className={navStyles.nav_item} onClick={toggleLink}>
              <Link href='#' className={navStyles.a}>
                How It Works
              </Link>
            </li>
            <li className={navStyles.nav_item} onClick={toggleLink}>
              <Link href='#'>Our Collections</Link>
            </li>
            <li className={navStyles.nav_item} onClick={toggleLink}>
              <Link href='#'>Blog</Link>
            </li>
          </ul>

          <ul className={navStyles.nav_buttons}>
            <li className={navStyles.nav_penultimate_item} onClick={toggleLink}>
              <Link href='#'>Log In</Link>
            </li>
            <li className={navStyles.nav_last_item} onClick={toggleLink}>
              <Link href='#'>Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Nav
