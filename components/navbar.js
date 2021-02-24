import info from '../config/site-info.json';
import styles from '../styles/components/navbar.module.css';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function NavigationBar() {

   return (
      <nav className={styles.wrapper}>
         <div className={styles.links}>
            <a href="/" className={styles.title}>{info.name}</a>
         </div>
         <div className={styles.search}>
            <form action="/search">
               <input type="text" placeholder="Search Lot # or VIN" name="keyword" ></input>
               <button type="submit" >Search</button>
            </form>
         </div>
      </nav>
   );
}