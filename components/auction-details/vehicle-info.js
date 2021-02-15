import { ListGroup } from 'react-bootstrap';

import { vehicleInfoProp } from '../../utils/prop-types';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function VehicleInfo({ vehicleInfo }){

   return (
      <>
         <h3>Vehicle Information</h3>
         <ListGroup>
            <ListGroup.Item ></ListGroup.Item>
            <ListGroup.Item>Make: {vehicleInfo.make ?? 'N/A'}</ListGroup.Item>
            <ListGroup.Item>Model: {vehicleInfo.model ?? 'N/A'}</ListGroup.Item>
            <ListGroup.Item>Year: {vehicleInfo.year ?? 'N/A'}</ListGroup.Item>
            <ListGroup.Item>VIN: {vehicleInfo.vin ?? 'N/A'}</ListGroup.Item>
            <ListGroup.Item>Mileage: {vehicleInfo.mileage ?? 'N/A'}</ListGroup.Item>
            <ListGroup.Item>Transmission: {vehicleInfo.transmission ?? 'N/A'}</ListGroup.Item>
            <ListGroup.Item>Body Color: {vehicleInfo.bodyColor ?? 'N/A'}</ListGroup.Item>
            <ListGroup.Item>Interior Color: {vehicleInfo.interiorColor ?? 'N/A'}</ListGroup.Item>
            <ListGroup.Item>Fuel: {vehicleInfo.fuel ?? 'N/A'}</ListGroup.Item>
         </ListGroup>
      </>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

VehicleInfo.propTypes = {
   vehicleInfo: vehicleInfoProp
};
