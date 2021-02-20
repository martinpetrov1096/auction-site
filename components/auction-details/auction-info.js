import { auctionProp } from '../../utils/prop-types';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function AuctionInfo({ auctionInfo }) {

   return (
      <>
         <h3>Auction Information</h3>
         <ul>
            <li>ID: {auctionInfo.id}</li>
            <li>Auctioneer: {auctionInfo.auctioneer}</li>
            <li>Lot Number: {auctionInfo.lotNumber}</li>
            <li>Date Ending: {auctionInfo.dateEnding}</li>
            <li>Seller: {auctionInfo.seller}</li>
            <li>Location: {auctionInfo.location}</li>
         </ul>
      </>
   );

}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

AuctionInfo.propTypes = {
   auctionInfo: auctionProp
};
