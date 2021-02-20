import { vehicleInfoProp } from '../../utils/prop-types';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function VehicleInfo({ vehicleInfo }){

   return (
      <>
         <h3>Vehicle Information</h3>
         <ul>
            <li ></li>
            <li>Make: {vehicleInfo.make ?? 'N/A'}</li>
            <li>Model: {vehicleInfo.model ?? 'N/A'}</li>
            <li>Year: {vehicleInfo.year ?? 'N/A'}</li>
            <li>VIN: {vehicleInfo.vin ?? 'N/A'}</li>
            <li>Mileage: {vehicleInfo.mileage ?? 'N/A'}</li>
            <li>Transmission: {vehicleInfo.transmission ?? 'N/A'}</li>
            <li>Body Color: {vehicleInfo.bodyColor ?? 'N/A'}</li>
            <li>Interior Color: {vehicleInfo.interiorColor ?? 'N/A'}</li>
            <li>Fuel: {vehicleInfo.fuel ?? 'N/A'}</li>
         </ul>
      </>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

VehicleInfo.propTypes = {
   vehicleInfo: vehicleInfoProp
};
