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

   display: grid;
   gap: 1rem;
   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

`;