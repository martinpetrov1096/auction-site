import auctions from '../../../config/auctions.json';
import PropTypes from 'prop-types';
import { auctionProp } from '../../../utils/prop-types';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////
export default function Model({ auctions }) {

   return (
      <h1>{auctions.length}</h1>
   );

}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

Model.propTypes = {
   auctions: PropTypes.arrayOf(auctionProp)
};
////////////////////////////////////////////////////
/////////////////// STATIC PROPS ///////////////////
////////////////////////////////////////////////////

export function getStaticProps({ params }) {
   return {
      props: {
         auctions: auctions.filter((a) => a.vehicleInfo.make === params.make 
                                      && a.vehicleInfo.model === params.model)
      }
   };
}
////////////////////////////////////////////////////
/////////////////// STATIC PATHS ///////////////////
////////////////////////////////////////////////////

export function getStaticPaths() {

   const makeModels = auctions.map((auction) => {
      return {
         make: auction.vehicleInfo.make,
         model: auction.vehicleInfo.model
      };
   });

   /**
    * Remove duplicates using filter & findIndex
    */
   const uniqueMakeModels = makeModels.filter((makeModel, index) => {
      const firstMatchIdx = makeModels.findIndex((mm) => {
         return mm.make === makeModel.make 
             && mm.model === makeModel.model;
      });
      return firstMatchIdx === index;
   });

   const paths = uniqueMakeModels.map((mm) => {
      return {
         params: {
            make: mm.make,
            model: mm.model
         }
      };
   });
   return {
      paths,
      fallback: false
   };
}