import { auctionProp } from '../../utils/prop-types';
import styled from 'styled-components';
import DetailsTable from './details-table';
import ImageGallery from './image-gallery';
import { useMemo } from 'react';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////
export default function AuctionDetailsLarge({ auction }) {

   const auctionDetails = useMemo(() => [
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
         name: 'Seller',
         value: auction.seller,
      },
      {
         name: 'Location',
         value: auction.location,
         important: true
      },
      {
         name: 'Date of Sale',
         value: auction.dateEnding,
      },
   ], []);
   const vehicleDetails = useMemo(() => [
      {
         name: 'Make',
         value: auction.vehicleInfo.make,
      },
      {
         name: 'Model',
         value: auction.vehicleInfo.model
      },
      {
         name: 'Year',
         value: auction.vehicleInfo.year,
      },
      {
         name: 'VIN',
         value: auction.vehicleInfo.vin,
         important: true
      },
      {
         name: 'mileage',
         value: auction.vehicleInfo.mileage
      },
      {
         name: 'Engine',
         value: auction.vehicleInfo.engine,
      },
      {
         name: 'Transmission',
         value: auction.vehicleInfo.transmission,
      },      
      {
         name: 'Wheels Driven',
         value: auction.vehicleInfo.wheelsDriven,
      },
      {
         name: 'Body Color',
         value: auction.vehicleInfo.bodyColor,
         important: true
      },
      {
         name: 'Interior Color',
         value: auction.vehicleInfo.interiorColor,
         important: true
      },
      {
         name: 'Fuel',
         value: auction.vehicleInfo.fuel
      }
   ], []);
   const conditionDetails = useMemo(() => [
      {
         name: 'Status',
         value: auction.condition.status,

      },
      {
         name: 'Primary Damage',
         value: auction.condition.primaryDamage,
         important: true
      },      
      {
         name: 'Secondary Damage',
         value: auction.condition.secondaryDamage,
      },
      {
         name: 'Estimated Retail Value',
         value: auction.condition.estimatedRetailValue,
      },
      {
         name: 'Estimated Repair Cost',
         value: auction.condition.estimatedRepairCost,
      },
      {
         name: 'Keys',
         value: auction.condition.keys,
      },
   ], []);



   return (
      <Wrapper>
         <MyImageGallery images={auction.images}/>
         <DetailsWrapper>
            <DetailsTable details={auctionDetails}/>
            <DetailsTable details={vehicleDetails}/>
            <DetailsTable details={conditionDetails}/>
         </DetailsWrapper>
         <MakeModel>{auction.vehicleInfo.make + ' ' + auction.vehicleInfo.model}</MakeModel>
      </Wrapper>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

AuctionDetailsLarge.propTypes = {
   auction: auctionProp
};
////////////////////////////////////////////////////
//////////////// STYLED COMPONENTS /////////////////
////////////////////////////////////////////////////

const Wrapper = styled.div`
   width: min(1300px, 80%);
   border-radius: 20px;
   padding: 5%;
   box-shadow: ${({theme}) => theme.shadowSmall};

   display: flex;
   flex-flow: row wrap-reverse;
   justify-content: space-around;
   align-items: flex-start;
`;
const MakeModel = styled.h2`
   text-transform: capitalize;
   text-align: center;
`;
const DetailsWrapper = styled.div`
   flex: 1 3 30%;
   min-width: 200px;

   margin-left: 10px;
   display: flex;
   flex-flow: row wrap;
   justify-content: stretch;
`;

const MyImageGallery = styled(ImageGallery)`
   flex: 1 1 25%;
   height: min(600px, 100%);
`;