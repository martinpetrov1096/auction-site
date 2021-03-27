import { useMemo } from 'react';
import styled from 'styled-components';
import { auctionProp } from '../../utils/prop-types';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function AuctionDetailsSmall({ auction }) {
   const link = useMemo(() => {
      return '/' + auction.vehicleInfo.make + '/'
         + auction.vehicleInfo.model + '/'
         + auction.id; 
   });

   return (
      <Wrapper href={link}>
         <Image src={auction.images[0]} />
         <MakeModel>{auction.vehicleInfo.make + ' ' + auction.vehicleInfo.model}</MakeModel>
         <DetailsList>
            <li>Auction: {auction.auctioneer || 'N/A'}</li>
            <li>Lot Number: {auction.lotNumber || 'N/A'}</li>
            <li>Sell Price: {auction.price || 'N/A'}</li>
            <li>Buyer: {auction.buyer || 'N/A'}</li>
            <li>VIN: {auction.vehicleInfo.vin || 'N/A'}</li>
            <li>Condition: {auction.condition.status || 'N/A'}</li>
            <li>Damage: {auction.condition.primaryDamage || 'N/A'}</li>
            <li>Mileage: {auction.vehicleInfo.mileage || 'N/A'}</li>
         </DetailsList>
         <MoreDetails>More Details</MoreDetails>
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
   :hover {
      box-shadow: ${({theme}) => theme.shadowLarge};
      transform: scale(1.01);
      > h3 {
         background-color: ${({theme}) => theme.teal};
      }
   }
   @media screen and (max-width: 500px) {
      margin: 40px 5px;
   }
   display: flex;
   flex-flow: column nowrap;
   align-items: center;
   justify-content: stretch;
`;
const Image = styled.img`
   height: 250px;
   width: 100%;
   object-fit: cover;
   border-radius: 20px 20px 0 0;

`;
const MakeModel = styled.h2`


`;
const DetailsList = styled.ul`
   flex-grow: 1;

`;
const MoreDetails = styled.h3`
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
