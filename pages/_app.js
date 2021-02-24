import PropTypes from 'prop-types';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../styles/global.css';
import styles from '../styles/app.module.css';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////
export default function MyApp({ Component, pageProps }) {
   return (
      <div className={styles.wrapper}>
         <Navbar/>
         <main className={styles.contentWrapper}>
            <Component {...pageProps} />
         </main>
         <Footer/>
      </div>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

MyApp.propTypes = {
   Component: PropTypes.any,
   pageProps: PropTypes.any
}; 