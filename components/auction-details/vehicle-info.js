import { vehicleInfoProp } from '../../utils/prop-types';
import styles from '../../styles/components/auction-details/info.module.css';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function VehicleInfo({ vehicleInfo }){

   return (
      <div className={styles.wrapper}>
         <h5 className={styles.title}>Vehicle Information</h5>
         <ul className={styles.infoList}>
            <li>Make: {vehicleInfo.make || 'N/A'}</li>
            <li>Model: {vehicleInfo.model || 'N/A'}</li>
            <li>Year: {vehicleInfo.year || 'N/A'}</li>
            <li>VIN: {vehicleInfo.vin || 'N/A'}</li>
            <li>Mileage: {vehicleInfo.mileage || 'N/A'}</li>
            <li>Transmission: {vehicleInfo.transmission || 'N/A'}</li>
            <li>Body Color: {vehicleInfo.bodyColor || 'N/A'}</li>
            <li>Interior Color: {vehicleInfo.interiorColor || 'N/A'}</li>
            <li>Fuel: {vehicleInfo.fuel || 'N/A'}</li>
         </ul>
      </div>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

VehicleInfo.propTypes = {
   vehicleInfo: vehicleInfoProp
};
