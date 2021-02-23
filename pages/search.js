import auctions from '../config/auctions.json';
import { useRouter } from 'next/router';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////
export default function Search() {
   
   const router = useRouter();
   const { keyword } =  router.query;
   console.log(keyword);

   const vinResults = auctions.filter((a) => a.vehicleInfo.vin === parseInt(keyword));
   const lotResults = auctions.filter((a) => a.lotNumber === parseInt(keyword));

   if (vinResults.length == 0 && lotResults.length == 0) {
      return (
         <h1>No Cars Found with that VIN or Lot Number</h1>
      );
   }
   console.log(lotResults);
   console.log(vinResults);

   return (
      <h1>hello</h1>
   );
}