import Content from "../Content/index";
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.fixedContent}>
        <Content />
      </div>
    </div>
  );
}
