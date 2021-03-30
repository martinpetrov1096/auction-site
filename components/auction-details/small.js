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

   const details =
      [
         {
            name: 'Auction',
            value: auction.auctioneer
         },
         {
            name: 'Lot Number',
            value: auction.lotNumber
         },
         {
            name: 'Sell Price',
            value: auction.price
         },
         {
            name: 'Buyer',
            value: auction.buyer
         },
         {
            name: 'VIN',
            value: auction.vin
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

      ];
      
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
   width: min(400px, 95%);
   margin: 40px;
   border-radius: 20px;
   box-shadow: ${({theme}) => theme.shadowSmall};
   color: inherit;
   text-decoration: inherit;
   transition: box-shadow .2s ease-in-out,
               transform .2s ease-in-out;
   /**
    * On hover, make the card and it's box shadow
    * bigger and make the more details button green
   */
   :hover {
      box-shadow: ${({theme}) => theme.shadowLarge};
      transform: scale(1.01);
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
   border-radius: 20px 20px 0 0;
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
   border-radius: 0 0 20px 20px;
   text-align: center;
   /* centers text vertically */
   line-height: 50px;
   color: white;
   font-size: 12px;
   background-color: ${({theme}) => theme.grey};
   transition: background-color .3s ease-in-out;
`;
