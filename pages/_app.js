import PropTypes from 'prop-types';
import Navbar from '../components/navbar/index';
import Footer from '../components/footer';
import '../styles/global.css';
import styles from '../styles/app.module.css';
import Head from 'next/head';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////
export default function MyApp({ Component, pageProps }) {
   return (
      <>
         <Head>
            <meta httpEquiv="content-type" content="text/html; charset=UTF-8"></meta>
         </Head>
         <div className={styles.wrapper} lang="en">
            <Navbar/>
            <main className={styles.contentWrapper}>
               <Component {...pageProps} />
            </main>
            <Footer/>
         </div>
      </>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

MyApp.propTypes = {
   Component: PropTypes.any,
   pageProps: PropTypes.any
}; 