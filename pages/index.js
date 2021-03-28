import Head from 'next/head';
import auctions from '../config/auctions.json';
import info from '../config/site-info.json';
import AuctionList from '../components/auction-list';
import Filter from '../components/filter';
import styled from 'styled-components';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function Home() {

   return (
      <>
         <Head>
            <title>Free history of sales, prices and damage</title>
            <meta name="description" content={`The site ${info.name} provides free information on the statistics of prices for wrecked and/or salvaged cars from the US after insurance claims.`}/>
         </Head>
         <Test>All Auctions</Test>
         <Filter/>
         <AuctionList auctions={auctions}/>
      </>
   );
}


const Test = styled.h1`
   color: ${({theme}) => theme.darkGrey};
`;