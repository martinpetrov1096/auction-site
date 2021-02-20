import { useMemo } from 'react';
import { auctionProp } from '../../utils/prop-types';
import styles from '../../styles/components/auction-details/small.module.css';


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
      <div className={styles.wrapper}>
         <div className={styles.imgWrapper}>
            <img src={auction.images[0]} className={styles.img}/>
         </div>
         <div className={styles.details}>
            <h5 className={styles.title}>{auction.vehicleInfo.make + ' ' + auction.vehicleInfo.model}</h5>
            <ul className={styles.infoList}>
               <li>Auction: {auction.auctioneer || 'N/A'}</li>
               <li>Lot Number: {auction.lotNumber || 'N/A'}</li>
               <li>VIN: {auction.vehicleInfo.vin || 'N/A'}</li>
               <li>Condition: {auction.condition.status || 'N/A'}</li>
               <li>Damage: {auction.condition.primaryDamage || 'N/A'}</li>
               <li>Mileage: {auction.vehicleInfo.mileage || 'N/A'}</li>
            </ul>
            <a href={link} className={styles.detailsBtn}>More Details</a>
         </div>
      </div>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

AuctionDetailsSmall.propTypes = {
   auction: auctionProp
}; 