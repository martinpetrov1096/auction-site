import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBar from './searchbar';
////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function NavigationBar() {

   /**
    * @scroll is the pageYOffset from the top
    * of the page (given in pixels)
    */
   const [scroll, setScroll] = useState(0);
   useEffect(() => {
      const getScroll = () => setScroll(window.pageYOffset);
      window.addEventListener('scroll', getScroll);
      return () => window.removeEventListener('scroll', getScroll);
   }, []);


   return (
      <Nav scroll={scroll}>
         <HomeLink>
            <Logo/>
         </HomeLink>
         <SearchBar/>
      </Nav>
   );
}
////////////////////////////////////////////////////
//////////////// STYLED COMPONENTS /////////////////
////////////////////////////////////////////////////

const Nav = styled.nav`
   z-index: 100;
   position: fixed;
   top: 0;
   box-sizing: border-box;
   width: 100%;
   background-color: white;
   transition: ${({theme}) => theme.transition};
   transition: padding .3s ease-in-out,
               box-shadow .3s ease-in-out;
   padding-left: 30px;
   padding-right: 30px;
   /**
   * If @props.scroll isn't 0, then make the
   * navbar have a shadow and make it smaller
   */
   ${(props) => {
      if (props.scroll) {
         return `
            box-shadow: ${props.theme.shadowLarge};
            padding-top: 15px;
            padding-bottom: 15px;
         `;
      } else {
         return `
            box-shadow: 'none';
            padding-top: 60px;
            padding-bottom: 60px;
         `;
      }
   }}
   /**
    * Mobile Styling
    */
   @media screen and (max-width: 500px) {
      padding-left: 10px;
      padding-right: 10px;
   }
   display: flex;
   flex-flow: row nowrap;
   align-items: center;
   justify-content: space-between;
`;
const HomeLink = styled.a.attrs({
   'href': '/'
})`
   height: 100%;
`;
const Logo = styled.img.attrs({
   'src': '/logo.svg'
})`
   height: 70px;
   width: auto;
   @media screen and (max-width: 500px) {
      height: 50px;
      width: auto;
      margin-right: 10px;
   }
`;