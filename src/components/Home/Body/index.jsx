import styles from "./body.module.css";
import Row1 from "./rows/row1";
import Row2 from "./rows/row2";
import Row3 from "./rows/row3";

export default function Body() {
  return (
    <section className={styles.section}>
      <div className={styles.container_title}>
        <p className={styles.title}>{"¿Por qué elegirnos?"}</p>
        <span>Confiabilidad y calidad en cada paso</span>
      </div>

      <>
        <Row1 />
        <Row2 />
        <Row3 />
      </>
    </section>
  );
}
