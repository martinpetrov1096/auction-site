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
         <img src={auction.images[0]} className={styles.img}/>
         <div className={styles.details}>
            <ul className={styles.infoList}>
               <li>{auction.vehicleInfo.make + ' ' + auction.vehicleInfo.model}</li>
               <li>Auction: {auction.auctioneer}</li>
               <li>Lot Number: {auction.lotNumber}</li>
               <li>Condition: {auction.condition.status}</li>
               <li>Damage: {auction.condition.primaryDamage}</li>
               <li>Mileage: {auction.vehicleInfo.mileage}</li>
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