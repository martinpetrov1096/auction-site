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
         important: true
      },
      {
         name: 'Model',
         value: auction.vehicleInfo.model,
         important: true

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
         <StyledImageGallery images={auction.images} hideThumbnail={false}/>
         <DetailsWrapper>
            {/* <MakeModel>{auction.vehicleInfo.make + ' ' + auction.vehicleInfo.model}</MakeModel> */}
            
            <DetailHeader>Auction Details</DetailHeader>
            <DetailsTable details={auctionDetails}/>

            <DetailHeader>Vehicle Details</DetailHeader>
            <DetailsTable details={vehicleDetails}/>

            <DetailHeader>Condition</DetailHeader>
            <DetailsTable details={conditionDetails}/>
         </DetailsWrapper>

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
   padding: min(50px, 5%);
   padding-top: 0px;
   box-shadow: ${({theme}) => theme.shadowSmall};
   display: flex;
   /* Reverse wrap so image gallery is at the end on mobile */
   flex-flow: row wrap-reverse;
   justify-content: space-around;
   align-items: flex-end;
`;
const StyledImageGallery = styled(ImageGallery)`
   flex: 1 1 60%;
   height: min(600px, 100%);
   padding: min(30px, 5%);

`;
const DetailsWrapper = styled.div`
   flex: 1 3 30%;
   min-width: 200px;


   display: flex;
   flex-flow: column nowrap;
   justify-content: stretch;
`;
const DetailHeader = styled.h3`
   text-align: center;
   border-bottom: solid 1px grey;
`;
