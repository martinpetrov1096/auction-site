import styled from 'styled-components';
import SVGButton from '../svg-button';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function SearchBar() {


   return (
      <SearchForm> 
         <Input></Input>
         <SVGButton width="30" height="30" viewBox="0 0 33 32">
            <circle r="8.41332" transform="matrix(0.719489 -0.694504 0.719489 0.694504 13.1858 12.7279)" className="stroke" strokeWidth="1.5"/>
            <rect width="3" height="9.52986" rx="1.5" transform="matrix(0.719489 -0.694504 0.719489 0.694504 18 19.389)" className="fill"/>
         </SVGButton>
      </SearchForm>
   );
}


////////////////////////////////////////////////////
//////////////// STYLED COMPONENTS /////////////////
////////////////////////////////////////////////////

const SearchForm = styled.form.attrs({
   action: '/search'
})`
   flex: 250px 1 2;
   max-width: 300px;
   height: 30px;
   display: flex;
   flex-flow: row nowrap;
   align-items: stretch;
`;
const Input = styled.input.attrs({
   type: 'text',
   placeholder: 'Search Lot # or VIN',
   name: 'keyword'
})`
   flex: 150px 1 1;
   margin: 0;
   border: 1px solid ${({theme}) => theme.grey};
   border-radius: 5px;
   padding: 15px;
   font-family: ${({theme}) => theme.font};
   transition: ${({theme}) => theme.transition};
   :focus {
      outline: none;
      ::placeholder {
         color: ${({theme}) => theme.accentColor};
      } 
      border: 1px solid ${({theme}) => theme.accentColor};
   }
   :hover {
      border: 1px solid ${({theme}) => theme.accentColor};
   }
`;