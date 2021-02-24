import Head from 'next/head';
import auctions from '../../../config/auctions.json';
import PropTypes from 'prop-types';
import Filter from '../../../components/filter';
import { auctionProp } from '../../../utils/prop-types';
import AuctionList from '../../../components/auction-list';
import info from '../../../config/site-info.json';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////
export default function Model({ auctions }) {

   return (
      <>
         <Head>
            <title>{auctions[0].vehicleInfo.make.charAt(0).toUpperCase() + auctions[0].vehicleInfo.make.slice(1)} {auctions[0].vehicleInfo.model.charAt(0).toUpperCase() + auctions[0].vehicleInfo.model.slice(1)} Listings </title>            
            <meta name="description" content={`All of the listings for ${auctions[0].vehicleInfo.make.slice(1)} ${auctions[0].vehicleInfo.model.charAt(0).toUpperCase() + auctions[0].vehicleInfo.model.slice(1)}  vehicles that the site ${info.name} has free information for`}/>
         </Head>
         <Filter/>
         <AuctionList auctions={auctions}/>
      </>
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