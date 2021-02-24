import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import auctions from '../config/auctions.json';

import styles from '../styles/components/filter.module.css';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function filter() {
   const router = useRouter();
   const [curMake, setCurMake] = useState();
   const [curModel, setCurModel] = useState();

   useEffect(() => {
      const { make, model } = router.query;
      setCurMake(make);
      setCurModel(model);
   }, []);

   const makeElements = useMemo(() => {
      const makes = auctions.map((a) => {
         return a.vehicleInfo.make;
      });
      const uniqueMakes = makes.filter((make, index) => {
         return makes.indexOf(make) === index;
      });
      return uniqueMakes.map((m) => {
         return <option key={m}>{m}</option>;
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
         return <option key={m}>{m}</option>;
      });
   }, [auctions, curMake]);

   const filter = useCallback(() => {
      if (curMake === 'any' && curModel === 'any') {
         router.push('/');
         return;
      }
      if (!curMake || curMake === 'any') {
         return;
      }
      if (!curModel || curModel === 'any') {
         router.push('/' + curMake);
         return;
      }
      router.push('/' + curMake + '/' + curModel);
   }, [curMake, curModel]);


   return (
      <form className={styles.wrapper}> 
         <select name="Make" id="make" value={curMake} onChange={() => {setCurMake(event.target.value); setCurModel('any');}} className={styles.select}>
            <option defaultValue>any</option>
            {makeElements}
         </select>
         <select name="Model" id="model" value={curModel} onChange={() => setCurModel(event.target.value)} className={styles.select}>
            <option defaultValue>any</option>
            {modelElements}
         </select>
         <button onClick={(e) => {e.preventDefault(); filter();}}>Filter</button>
      </form>
   );
}