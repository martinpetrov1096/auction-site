import { arrayOf } from 'prop-types';
import { auctionProp } from '../utils/prop-types';
import AuctionDetailsSmall from './auction-details/small';
import styles from '../styles/auction-list.module.css';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function AuctionList({ auctions }) {

   const auctionElements = auctions.map((a) => {
      return <AuctionDetailsSmall key={a.id} auction={a}/>;
   });

   return (
      <main className={styles.wrapper}>
         {auctionElements}
      </main>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

AuctionList.propTypes = {
   auctions: arrayOf(auctionProp)
};