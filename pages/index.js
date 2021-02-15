import Head from 'next/head';
import auctions from '../config/auctions.json';
import AuctionList from '../components/auction-list';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function Home() {



   return (
      <>
         <Head>
         </Head>
         <AuctionList auctions={auctions}/>
      </>
   );
}
