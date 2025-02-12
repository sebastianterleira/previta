import styles from "../../row.module.css";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "../../animation";

import ImagenTest from "../../../../../assets/img/Body/img_2.jpg";

export default function Row1() {
  const title = "Resultados rápidos y precisos";
  const parraf1 = useRef(null);
  const parraf2 = useRef(null);
  const isInView1 = useInView(parraf1);
  const isInView2 = useInView(parraf2);

  return (
    <>
      <div className={styles.about}>
        <div className={styles.aboutDescription}>
          <div className={styles.imageContainer}>
            <img src={ImagenTest.src} alt="project image" />
          </div>
          <div className={styles.column_parraf}>
            <p
              ref={parraf1}
              className={`${styles.parraf_1} ${styles.reverse_parraf}`}
            >
              {title.split(" ").map((word, index) => {
                return (
                  <span key={index} className={styles.mask}>
                    <motion.span
                      variants={slideUp}
                      custom={index}
                      animate={isInView1 ? "open" : "closed"}
                      key={index}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
            <motion.p
              ref={parraf2}
              variants={opacity}
              animate={isInView2 ? "open" : "closed"}
              className={styles.parraf_2}
            >
              Nuestro equipo emplea tecnología de vanguardia y metodologías
              innovadoras para asegurar resultados precisos, confiables y
              eficientes, optimizando cada proceso para ofrecerte la mejor
              calidad en el menor tiempo posible.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}
