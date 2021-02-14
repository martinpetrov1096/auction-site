import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import '../styles/globals.css';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////
export default function MyApp({ Component, pageProps }) {
   return (
      <div>
         <Navbar/>
         <Component {...pageProps} />
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