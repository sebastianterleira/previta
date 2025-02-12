import styles from "./footer.module.css";
import Magnetic from "../../../subcomponents/MagneticElement";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <h2>SOCIAL</h2>
      <div className={styles.footer}>
        <Magnetic>
          <a href="">Facebook</a>
        </Magnetic>
        <Magnetic>
          <a href="">Instagram</a>
        </Magnetic>
        <Magnetic>
          <a href="">Whatsapp</a>
        </Magnetic>
        <Magnetic>
          <a href="">LinkedIn</a>
        </Magnetic>
      </div>
    </footer>
  );
}
