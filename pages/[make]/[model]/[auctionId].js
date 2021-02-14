import auctions from '../../../config/auctions.json';
import { auctionProp } from '../../../utils/prop-types';

export default function Auction({ auction }) {

   return (
      <div>
         <h1>AuctionID: {auction.id}</h1>
         <h2>Make: {auction.vehicleInfo.make}</h2>
         <h2>Model: {auction.vehicleInfo.model}</h2>
      </div>
   );
}
Auction.propTypes = {
   auction: auctionProp
};

export function getStaticProps({ params }) {
   return {
      props: {
         auction: auctions.find((a) => a.id.toString() === params.auctionId)
      }
   };
}

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