import styles from '../../styles/components/navbar/index.module.css';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function NavigationBar() {

   return (
      <nav className={styles.wrapper}>
         <div className={styles.links}>
         </div>
         <div className={styles.search}>
            <form action="/search">
               <input type="text" placeholder="Search Lot # or VIN" name="keyword" ></input>
               <button aria-label="Search" type="submit" >Search</button>
            </form>
         </div>
      </nav>
   );
}