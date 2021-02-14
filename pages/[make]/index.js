import auctions from '../../config/auctions.json';
import PropTypes from 'prop-types';
import { auctionProp } from '../../utils/prop-types';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function Make({ auctions }) {

   const auctionElements = auctions.map((auction) => {
      return (
         <div key={auction.auctionId}>
            <h3>{auction.vehicleInfo.make + ' ' +  auction.vehicleInfo.model} </h3>
         </div>
      );
   });
   return (
      <>
         {auctionElements}
      </>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

Make.propTypes = {
   auctions: PropTypes.arrayOf(auctionProp)
};
////////////////////////////////////////////////////
/////////////////// STATIC PROPS ///////////////////
////////////////////////////////////////////////////

export function getStaticProps({ params }) {

   /**
    * Get all auctions that match the queried
    * make.
    */
   const makeAuctions = auctions.filter((auction) => {
      return auction.vehicleInfo.make == params.make;
   });

   return {
      props: { auctions: makeAuctions }
   };
}
////////////////////////////////////////////////////
/////////////////// STATIC PATHS ///////////////////
////////////////////////////////////////////////////

export function getStaticPaths() {

   /**
    * Grab all of the makes of cars from auctions.json
    * Put them in a map and then destructure it to
    * make sure they're unique
    */
   const uniqueMakes = [...new Set(auctions.map((auction) => {
      return auction.vehicleInfo.make;
   }))];

   const paths = uniqueMakes.map((m) => {
      return { params: {make: m }};
   });

   return {
      paths,
      fallback: false
   };
}