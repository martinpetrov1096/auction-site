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
         <DetailsTable>
            <DetailItem important>
               <th>Auction: </th>
               <td>{auction.auctioneer || 'N/A'}</td>
            </DetailItem>
            <DetailItem>
               <th>Lot Number:</th>
               <td> {auction.lotNumber || 'N/A'}</td>
            </DetailItem>
            <DetailItem>
               <th>Sell Price:</th>
               <td> {auction.price || 'N/A'}</td>
            </DetailItem>
            <DetailItem>
               <th>Buyer:</th>
               <td>{auction.buyer || 'N/A'}</td>
            </DetailItem>
            <DetailItem>
               <th>VIN:</th>
               <td> {auction.vehicleInfo.vin || 'N/A'}</td>
            </DetailItem>
            <DetailItem>
               <th>Condition:</th>
               <td> {auction.condition.status || 'N/A'}</td>
            </DetailItem>
            <DetailItem>
               <th>Damage:</th>
               <td> {auction.condition.primaryDamage || 'N/A'}</td>
            </DetailItem>
            <DetailItem>
               <th>Mileage:</th>
               <td> {auction.vehicleInfo.mileage || 'N/A'}</td>
            </DetailItem>
         </DetailsTable>
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
   justify-content: sDetailItemetch;
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
const DetailsTable = styled.table`
   width: 90%;
`;
const DetailItem = styled.tr`
   text-transform: capitalize;
   > th, td {
      font-weight: ${({important}) => important ? 'bold' : 'normal'};
   }
   /* :nth-of-type(odd) {
      background-color: light-grey;
   } */
   > th {
      text-align: left;
   }
   > td {
      text-align: right;

   }
   :hover {
      > td, th {
         border-bottom: solid 1px ${({theme}) => theme.grey};
      }
   }

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
