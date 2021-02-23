
import { auctionProp } from '../../utils/prop-types';
import VehicleInfo from './vehicle-info';
import AuctionInfo from './auction-info';
import ConditionInfo from './condition-info';
import ImageGallery from './image-gallery';
import styles from '../../styles/components/auction-details/large.module.css';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function AuctionDetailsLarge({ auction }) {


   return (
      <div className={styles.wrapper}>
         <h1 className={styles.title}>{auction.vehicleInfo.make + ' ' + auction.vehicleInfo.model}</h1>
         <ImageGallery images={auction.images}/>
         <div className={styles.details}>
            <AuctionInfo auctionInfo={auction}/>
            <VehicleInfo vehicleInfo={auction.vehicleInfo}/>
            <ConditionInfo conditionInfo={auction.condition}/>
         </div>
      </div>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

AuctionDetailsLarge.propTypes = {
   auction: auctionProp
};