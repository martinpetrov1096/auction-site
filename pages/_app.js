import PropTypes from 'prop-types';
import Navbar from '../components/navbar';
import Filter from '../components/filter';
import '../styles/global.css';
import styles from '../styles/app.module.css';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////
export default function MyApp({ Component, pageProps }) {
   return (
      <div className={styles.wrapper}>
         <Navbar/>
         <Filter/>
         <div className={styles.contentWrapper}>

            <Component {...pageProps} />
         </div>
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