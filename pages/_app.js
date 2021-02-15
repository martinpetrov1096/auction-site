import PropTypes from 'prop-types';
import Navbar from '../components/navbar';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from '../components/filter';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////
export default function MyApp({ Component, pageProps }) {
   return (
      <div>
         <Navbar/>
         <Container fluid="md" className="mt-5 pt-5">
            <Row>
               <Filter/>
            </Row>
            <Row>
               <Component {...pageProps} />
            </Row>
         </Container>
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