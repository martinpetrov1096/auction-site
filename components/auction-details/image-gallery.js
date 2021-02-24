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
               alt={`Image #${i} for vehicle`}
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
            <button aria-label="Previous Image" onClick={() => setCurImageIdx(modulo((curImageIdx-1), images.length))} className={styles.prevBtn}></button>
            <img src={images[curImageIdx]} alt="Main Image for vehicle" className={styles.curImage}/>
            <button aria-label="Next Image" onClick={() => setCurImageIdx(modulo((curImageIdx+1), images.length))} className={styles.nextBtn}></button>
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