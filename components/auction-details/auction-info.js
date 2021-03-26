import { auctionProp } from '../../utils/prop-types';
import styles from '../../styles/components/auction-details/info.module.css';


////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function AuctionInfo({ auctionInfo }) {

   return (
      <div className={styles.wrapper}>
         <h5 className={styles.title}>Auction Information</h5>
         <ul className={styles.infoList}>
            <li>ID: {auctionInfo.id || 'N/A'}</li>
            <li>Auctioneer: {auctionInfo.auctioneer || 'N/A'}</li>
            <li>Lot Number: {auctionInfo.lotNumber || 'N/A'}</li>
            <li>Sell Price: {auctionInfo.price || 'N/A'}</li>
            <li>Buyer: {auctionInfo.buyer || 'N/A'}</li>
            <li>Seller: {auctionInfo.seller || 'N/A'}</li>
            <li>Location: {auctionInfo.location || 'N/A'}</li>
            <li>Date Of Sale: {auctionInfo.dateEnding || 'N/A'}</li>
         </ul>
      </div>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

AuctionInfo.propTypes = {
   auctionInfo: auctionProp
};
