import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
import theme from '../config/theme.json';
import Navbar from '../components/navbar/index';
import Footer from '../components/footer';
import '../styles/global.css';
import Head from 'next/head';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////
export default function MyApp({ Component, pageProps }) {

   /**
    * Google Analytics Config Section
    */
   useEffect(() => {
      const trackingId = 'UA-192775957-1';
      ReactGA.initialize(trackingId);
      ReactGA.pageview(window.location.pathname + window.location.search);
   }, []);


   return (
      <>
         <Head>
            <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
            <meta httpEquiv="content-type" content="text/html; charset=UTF-8"></meta>
         </Head>
         <ThemeProvider theme={theme}>
            <Wrapper lang="en">
               <Navbar/>
               <Main>
                  <Component {...pageProps} />
               </Main>
               <Footer/>
            </Wrapper>
         </ThemeProvider>
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
////////////////////////////////////////////////////
//////////////// STYLED COMPONENTS /////////////////
////////////////////////////////////////////////////

const Wrapper = styled.div`
   min-height: calc(100vh);
   width: 100%;
   display: flex;
   flex-flow: column nowrap;
   justify-content: space-between;
   align-items: center;
`;
const Main = styled.main`
   margin-top: 200px;
   padding-top: 80px;
   width: 100%;
   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;
`;