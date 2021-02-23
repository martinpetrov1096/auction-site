import Head from 'next/head';
import auctions from '../config/auctions.json';
import AuctionList from '../components/auction-list';
import Filter from '../components/filter';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function Home() {



   return (
      <>
         <Head>
         </Head>
         <Filter/>
         <AuctionList auctions={auctions}/>
      </>
   );
}
