import auctions from '../../../config/auctions.json';
import { auctionProp } from '../../../utils/prop-types';
import LargeDetails from '../../../components/auction-details/large';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////
export default function Auction({ auction }) {

   return (
      <LargeDetails auction={auction}/>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

Auction.propTypes = {
   auction: auctionProp
};
////////////////////////////////////////////////////
/////////////////// STATIC PROPS ///////////////////
////////////////////////////////////////////////////

export function getStaticProps({ params }) {
   return {
      props: {
         auction: auctions.find((a) => a.id.toString() === params.auctionId)
      }
   };
}
////////////////////////////////////////////////////
/////////////////// STATIC PATHS ///////////////////
////////////////////////////////////////////////////

export function getStaticPaths() {
   const paths = auctions.map((a) => {
      return {
         params: {
            make: a.vehicleInfo.make,
            model: a.vehicleInfo.model,
            auctionId: a.id.toString()
         }
      };
   });

   return {
      paths,
      fallback: false
   };
}