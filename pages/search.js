import { useMemo } from 'react';
import { useRouter } from 'next/router';
import auctions from '../config/auctions.json';
import AuctionDetailsSmall from '../components/auction-details/small';
////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////
export default function Search() {
   
   const router = useRouter();
   const { keyword } =  router.query;
   console.log(keyword);

   if (!keyword) {
      return <h1>Invalid or Missing Lot Number/VIN</h1>;
   }

   const vinElement = useMemo(() => {
      const vinResult = auctions.find((a) => a.vehicleInfo.vin === keyword);
      if (!vinResult) {
         return null;
      }
      return (
         <>
            <h1>Results Matching VIN</h1>
            <AuctionDetailsSmall auction ={vinResult}/>
         </>
      );
   }, []);

   const lotNumberElement = useMemo(() => {
      const lotResult = auctions.find((a) => a.lotNumber === parseInt(keyword));
      if (!lotResult) {
         return null;
      }
      return (
         <>
            <h1>Results Matching Lot Number</h1>
            <AuctionDetailsSmall auction ={lotResult}/>
         </>
      );
   }, []);

   if (!vinElement && !lotNumberElement) {
      return (
         <h1>No Vehicles Found with Lot Number or VIN {keyword} </h1>
      );
   }
   return (
      <div>
         {lotNumberElement}
         {vinElement}
      </div>
   );
}