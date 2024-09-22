import { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function DetailsTable({ details }) {
   const detailElements = useMemo(() =>
      details.map(({ name, value, important }) => 
         (
            <Detail key={name} important={important}>
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
         value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
         ]),
         important: PropTypes.bool
      })
   ).isRequired
};
////////////////////////////////////////////////////
//////////////// STYLED COMPONENTS /////////////////
////////////////////////////////////////////////////
const Wrapper = styled.ul`
   width: calc(100% - 20px);
   margin: 0;
   padding: 10px;
   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;
`;
const Detail = styled.li`
   width: 100%;
   border-bottom: 1px dotted grey;
   /* border-bottom: solid 1px grey; */
   padding-bottom: 0px;
   list-style-type: none;
   font-family: ${({theme}) => theme.font};
   font-size: 12px;
   font-weight: ${({important}) => important ? 'bold' : 'normal'};
   text-transform: capitalize;
   display: flex;
   flex-flow: row nowrap;
   justify-content: space-between;
`;
const Name = styled.p`
   padding: 13px 5px 1px 5px;
   margin: 0;
`;
const Value = styled(Name)`

`;