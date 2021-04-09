import Nav from './Nav';
import Footer from '../components/Footer';
import styles from '../styles/Layout.module.scss';

const Layout = ({ children }) => {
    return (
      <>
        <Nav />
        <div className={styles.container}>
          <main className={styles.main}>{children}</main>
        </div>
        {/* <Footer /> */}
      </>
    );
}

export default Layout
