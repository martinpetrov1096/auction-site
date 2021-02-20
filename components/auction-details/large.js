
import { auctionProp } from '../../utils/prop-types';
import VehicleInfo from './vehicle-info';
import AuctionInfo from './auction-info';
import styles from '../../styles/components/auction-details/large.module.css';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function AuctionDetailsLarge({ auction }) {

   // const imageElements = useMemo(() => {

   //    return auction.images.map((img) => {
   //       return (
   //          <Carousel.Item key={img}>
   //             <img src={img} alt="Vehicle Pictures" className="w-100" style={{overflow: 'hidden'}}>
   //             </img>
   //          </Carousel.Item>
   //       );
   //    });

   // });


   return (

      <div className={styles.wrapper}>
         <h2 className="text-center">{auction.vehicleInfo.make + ' ' + auction.vehicleInfo.model}</h2>
         <img src={auction.images[0]} className={styles.img}/>
         <div className={styles.details}>
            <ul className="">
               <li></li>
               <li>Auction: {auction.auctioneer}</li>
               <li>Lot Number: {auction.lotNumber}</li>
               <li>Date of Sale: {auction.dateEnding}</li>
               <li>Lot Number: {auction.lotNumber}</li>
               <li>Condition: {auction.condition.status}</li>
               <li>Damage: {auction.condition.primaryDamage}</li>
               <li>Mileage: {auction.vehicleInfo.mileage}</li>
            </ul>
            <VehicleInfo vehicleInfo={auction.vehicleInfo}/>
            <AuctionInfo auctionInfo={auction}/>
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
