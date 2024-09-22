import { arrayOf } from 'prop-types';
import { auctionProp } from '../utils/prop-types';
import AuctionDetailsSmall from './auction-details/small';
import styled from 'styled-components';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function AuctionList({ auctions }) {

   const auctionElements = auctions.map((a) => {
      return <AuctionDetailsSmall key={a.id} auction={a}/>;
   });

   return (
      <Wrapper>
         {auctionElements}
      </Wrapper>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

AuctionList.propTypes = {
   auctions: arrayOf(auctionProp)
};
////////////////////////////////////////////////////
//////////////// STYLED COMPONENTS /////////////////
////////////////////////////////////////////////////

const Wrapper = styled.div`
   width: 95%;
   /* display: flex;
   flex-flow: row wrap;
   align-items: stretch;
   justify-content: flex-start; */

   display: grid;
   gap: 1rem;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

`;