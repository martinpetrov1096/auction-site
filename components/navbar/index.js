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
      const getScroll = () => {
         setScroll(window.pageYOffset);
      };
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

   /**
    * On screens with > 500 width, make it
    * fixed, else assume mobile
    */
   @media screen and (min-width: 500px) {
   z-index: 100;
   position: fixed;
   top: 0;
   width: calc(100% - 60px);
   height: 80px;
   background-color: white;
   transition: ${({theme}) => theme.transition};
   transition: padding .3s ease-in-out,
               box-shadow .3s ease-in-out;
   /**
   * If @props.scroll isn't 0, then make the
   * navbar have a shadow and make it smaller
   */
   ${(props) => {
      if (props.scroll) {
         return `
            box-shadow: ${props.theme.shadowLarge};
            padding: 15px 30px;
         `;
      } else {
         return `
            box-shadow: 'none';
            padding: 60px 30px;
         `;
      }
   }}
   display: flex;
   flex-flow: row wrap;
   align-items: center;
   justify-content: space-between;
   }
   @media screen and (max-width: 499px) {
      position: absolute;
      width: calc(100% - 60px);
      padding: 30px;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;

   }
`;

const HomeLink = styled.a.attrs({
   'href': '/'
})`
   height: 100%;
`;

const Logo = styled.img.attrs({
   'src': '/logo.svg'
})`
   height: 100%;
   @media screen and (max-width: 499px) {
      padding: 30px;
      height: 150px;
   }
`;
