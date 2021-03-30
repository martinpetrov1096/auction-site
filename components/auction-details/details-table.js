import { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function DetailsTable({ details }) {
   const detailElements = useMemo(() =>
      details.map(({ name, value }) => 
         (
            <Detail key={name}>
               <Name>{ name }</Name>
               <Value>{ value ?? 'N/A' }</Value>
            </Detail>
         )
      )
   );
   return (
      <Wrapper>
         { detailElements }
      </Wrapper>
   );
}

////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////
DetailsTable.propTypes = {
   details: PropTypes.arrayOf(
      PropTypes.shape({
         name: PropTypes.string,
         value: PropTypes.oneOfType(
            PropTypes.string,
            PropTypes.number
         )
      })
   ).isRequired
};

////////////////////////////////////////////////////
//////////////// STYLED COMPONENTS /////////////////
////////////////////////////////////////////////////
const Wrapper = styled.ul`
   width: inherit;
   margin: 0;
   padding: 0;

   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;
`;
const Detail = styled.li`
   width: 90%;
   font-family: 'Jura', sans-serif;
   display: flex;
   flex-flow: row nowrap;
   justify-content: space-between;
`;
const Name = styled.p`

`;
const Value = styled.p`

`;