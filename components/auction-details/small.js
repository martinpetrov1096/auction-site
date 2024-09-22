import { useMemo } from 'react';
import styled from 'styled-components';
import { auctionProp } from '../../utils/prop-types';
import DetailsTable from './details-table';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function AuctionDetailsSmall({ auction }) {
   
   const link = useMemo(() => {
      return '/' + auction.vehicleInfo.make + '/'
         + auction.vehicleInfo.model + '/'
         + auction.id; 
   }, []);

   const details = useMemo(() => 
      [
         {
            name: 'Auction',
            value: auction.auctioneer,
            important: true
         },
         {
            name: 'Lot Number',
            value: auction.lotNumber
         },
         {
            name: 'Sell Price',
            value: auction.price,
            important: true            
         },
         {
            name: 'Buyer',
            value: auction.buyer,
            important: true
         },
         {
            name: 'VIN',
            value: auction.vehicleInfo.vin
         },
         {
            name: 'Condition',
            value: auction.condition.status
         },
         {
            name: 'Damage',
            value: auction.primaryDamage
         },
         {
            name: 'Mileage',
            value: auction.mileage
         }

      ], []);
      
   return (
      <Wrapper href={link}>
         <Image src={auction.images[0]} />
         <MakeModel>{auction.vehicleInfo.make + ' ' + auction.vehicleInfo.model}</MakeModel>
         <DetailsTable details={details}/>
         <MoreDetailsButton>More Details</MoreDetailsButton>
      </Wrapper>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

AuctionDetailsSmall.propTypes = {
   auction: auctionProp
};
////////////////////////////////////////////////////
//////////////// STYLED COMPONENTS /////////////////
////////////////////////////////////////////////////

const Wrapper = styled.a`
   //width: min(300px, 95%);
 
   flex: 0 0 300px;
   max-width: 400px;
   //padding: 5px;'
   margin: 5px;
   border-radius: 5px;
   box-shadow: 0 1px 2px rgba(0,0,0,0.19), 0 1px 1px rgba(0,0,0,0.23);
   color: inherit;
   text-decoration: inherit;
   transition: box-shadow .2s ease-in-out,
               transform .2s ease-in-out;
   /**
    * On hover, make the card and it's box shadow
    * bigger and make the more details button green
   */
   :hover { 
      > h3 {
         background-color: ${({theme}) => theme.teal};
      }
   }
   /* Make margins smaller on mobile */
   @media screen and (max-width: 500px) {
      margin: 40px 5px;
   }
   display: flex;
   flex-flow: column nowrap;
   align-items: center;
`;
const Image = styled.img`
   height: 250px;
   width: 100%;
   object-fit: cover;
   border-radius: 5px 5px 0 0;
`;
const MakeModel = styled.h2`
   width: 90%;
   text-align: center;
   text-transform: capitalize;
`;
const MoreDetailsButton = styled.h3`
   width: 100%;
   height: 50px;
   padding: auto;
   margin-bottom: auto;
   border-radius: 0 0 5px 5px;
   text-align: center;
   /* centers text vertically */
   line-height: 50px;
   color: white;
   font-size: 12px;
   background-color: ${({theme}) => theme.grey};
   transition: background-color .3s ease-in-out;
`;
