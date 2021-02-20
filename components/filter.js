import { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import auctions from '../config/auctions.json';

import styles from '../styles/components/filter.module.css';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function filter() {
   const [curMake, setCurMake] = useState();
   const [curModel, setCurModel] = useState();
   const router = useRouter();

   const makeElements = useMemo(() => {
      const makes = auctions.map((a) => {
         return a.vehicleInfo.make;
      });
      const uniqueMakes = makes.filter((make, index) => {
         return makes.indexOf(make) === index;
      });
      return uniqueMakes.map((m) => {
         return <option key={m} className="text-capitalize">{m}</option>;
      });
   }, [auctions]);

   const modelElements = useMemo(() => {

      const models = auctions.reduce((curModels, auction) => {
         if (auction.vehicleInfo.make != curMake) {
            return curModels;
         }
         if (curModels.includes(auction.vehicleInfo.model)) {
            return curModels;
         } else {
            return [...curModels, auction.vehicleInfo.model];
         }
      }, []);

      return models.map((m) => {
         return <option key={m} className="text-capitalize">{m}</option>;
      });
   }, [auctions, curMake]);


   const filter = useCallback(() => {
      // router.push(filterLink);
      if (!curMake) {
         return;
      }
      if (!curModel) {
         router.push('/' + curMake);
         return;
      }
      router.push('/' + curMake + '/' + curModel);
   }, [curMake, curModel]);


   return (
      <div className={styles.wrapper}>
         <form>
            <select name="Make" id="make" value={curMake} onChange={() => setCurMake(event.target.value)} className={styles.select}>
               <option>make</option>
               {makeElements}
            </select>
            <select name="Model" id="model" value={curModel} onChange={() => setCurModel(event.target.value)} className={styles.select}>
               <option>model</option>
               {modelElements}
            </select>
         </form>
         <button variant="primary" type="submit" onClick={() => filter()}>Filter</button>
      </div>
   );
}