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
            <title>{info.name}</title>
            <meta name="description" content={`${info.name} provides free information on the statistics of prices for wrecked and/or salvaged cars from the US after insurance claims.`}/>
         </Head>
         <Title>All Auctions</Title>
         <Filter/>
         <AuctionList auctions={auctions}/>
      </>
   );
}
////////////////////////////////////////////////////
//////////////// STYLED COMPONENTS /////////////////
////////////////////////////////////////////////////

const Title = styled.h1`
   margin: 0;
   margin-top: 5px;
   font-size: min(50px, 10vw);
   text-align: center;
   color: ${({theme}) => theme.darkGrey};
`;