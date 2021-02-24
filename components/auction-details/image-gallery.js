import { arrayOf, string } from 'prop-types';
import { useMemo, useState } from 'react';
import styles from '../../styles/components/auction-details/image-gallery.module.css';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function ImageGallery({ images }) {

   const [curImageIdx, setCurImageIdx] = useState(0);

   const thumbnails = useMemo(() => {
      return images.map((i, idx) => {
         return (
            <img 
               key={i}
               src={i}
               className={`${styles.thumbnail} ${curImageIdx === idx ? styles.thumbnailSelected : ''}`}
               onClick={() => setCurImageIdx(idx)}
            />);
      });
   });

   return (
      <div className={styles.wrapper}>
         <div className={styles.curImageWrapper}>
            <button onClick={() => setCurImageIdx(modulo((curImageIdx-1), images.length))} className={styles.prevBtn}> </button>
            <img src={images[curImageIdx]} className={styles.curImage}/>
            <button onClick={() => setCurImageIdx(modulo((curImageIdx+1), images.length))} className={styles.nextBtn}></button>
         </div>
         <div className={styles.thumbnailWrapper}>
            {thumbnails}
         </div>
      </div>
   );
}

////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

ImageGallery.propTypes = {
   images: arrayOf(string)
};


function modulo(a, n) {
   return ((a % n ) + n ) % n;
}