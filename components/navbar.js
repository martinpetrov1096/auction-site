import styles from '../styles/components/navbar.module.css';

////////////////////////////////////////////////////
//////////////////// COMPONENT /////////////////////
////////////////////////////////////////////////////

export default function NavigationBar() {

   return (
      <nav className={styles.wrapper}>
         <div className={styles.links}>
            <a href="/" className={styles.title}>Home</a>
            <a href="/contact">Contact</a>   
            <a href="/about">About</a>  
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