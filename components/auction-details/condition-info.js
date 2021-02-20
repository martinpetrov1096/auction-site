import { conditionProp } from '../../utils/prop-types';
import styles from '../../styles/components/auction-details/info.module.css';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function ConditionInfo({ conditionInfo }){

   return (
      <div className={styles.wrapper}>
         <h5 className={styles.title}>Condition</h5>
         <ul className={styles.infoList}>
            <li>Status: {conditionInfo.status || 'N/A'}</li>
            <li>Primary Damage: {conditionInfo.primaryDamage || 'N/A'}</li>
            <li>Secondary Damage: {conditionInfo.secondaryDamage || 'N/A'}</li>
            <li>Estimated Retail Value: {conditionInfo.estimatedRetailValue || 'N/A'}</li>
            <li>Estimated Repair Cost: {conditionInfo.estimatedRepairCost || 'N/A'}</li>
         </ul>
      </div>
   );
}
////////////////////////////////////////////////////
/////////////// COMPONENT PROP TYPES ///////////////
////////////////////////////////////////////////////

ConditionInfo.propTypes = {
   conditionInfo: conditionProp
};
