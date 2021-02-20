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
         console.log(i);
         return (
            <img 
               key={i}
               src={i}
               className={styles.thumbnail}
               onClick={() =>  setCurImageIdx(idx)}
            />);
      });
   });

   return(
      <div className={styles.wrapper}>
         <div className={styles.curImageWrapper}>
            <button onClick={() => setCurImageIdx((curImageIdx-1) % images.length)} className={styles.prevBtn}> </button>
            <img src={images[curImageIdx]} className={styles.curImage}/>
            <button onClick={() => setCurImageIdx((curImageIdx+1) % images.length)} className={styles.nextBtn}> </button>
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