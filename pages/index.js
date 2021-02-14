import Head from 'next/head';
import auctions from '../config/auctions.json';
import AuctionDetailsSmall from '../components/auction-details-small';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function Home() {

   const allAuctions = auctions.map((a) => {
      return <AuctionDetailsSmall key={a.id} auction={a}/>;
   });

   return (
      <>
         <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main>
            {allAuctions}
         </main>
      </>
   );
}
