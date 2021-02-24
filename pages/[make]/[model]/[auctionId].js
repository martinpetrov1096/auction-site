import Head from 'next/head';
import auctions from '../../../config/auctions.json';
import { auctionProp } from '../../../utils/prop-types';
import LargeDetails from '../../../components/auction-details/large';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////
export default function Auction({ auction }) {

   return (
      <>
         <Head>
            <title>{auction.vehicleInfo.make.charAt(0).toUpperCase() + auction.vehicleInfo.make.slice(1)} {auction.vehicleInfo.model.charAt(0).toUpperCase() + auction.vehicleInfo.model.slice(1)} VIN {auction.vehicleInfo.vin} </title>            
            <meta name="description" content={`Listing for a ${auction.vehicleInfo.make.charAt(0).toUpperCase() + auction.vehicleInfo.make.slice(1)} ${auction.vehicleInfo.model.charAt(0).toUpperCase() + auction.vehicleInfo.model.slice(1)} with VIN ${auction.vehicleInfo.vin} that was sold by ${auction.seller} on ${auction.dateEnding} for ${auction.price} on ${auction.auctioneer}`} />
         </Head>
         <LargeDetails auction={auction}/>
      </>
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