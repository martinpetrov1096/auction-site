import styles from '../styles/components/footer.module.css';
import info from '../config/site-info.json';

export default function Footer() {

   return (
      <div className={styles.wrapper}>
         <div className={styles.section}>
            <h4>Contact</h4>
            <p>Phone Number: {info.contact.phone}</p>
            <p>Email: {info.contact.email}</p>
            <p>Address: {info.contact.address}</p>
         </div>
         <div className={styles.section}>
            <h4>About</h4>
            <p>{info.about.description}</p>
         </div>

      </div>
   );
}