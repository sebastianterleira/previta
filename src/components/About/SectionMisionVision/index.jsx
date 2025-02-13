import styles from "./index.module.css";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "./animation";

import ImagenTest from "../../../assets/img/Body/img_1.jpg";
import ImagenTest2 from "../../../assets/img/Body/img_4.jpg";

export default function SectionMisionVision() {
  const mision =
    "Nuestra misión es brindar productos y servicios innovadores que promuevan un estilo de vida saludable y fortalezcan a los pacientes a través de la educación.";
  const vision = "Convertirnos en la referencia de Latinoamérica en soluciones de salud y bienestar, destacando por nuestra innovación y dedicación a la prevención como pilares de una vida plena."
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <section
      data-scroll
      data-scroll-speed={0.1}
      ref={description}
      className={styles.section}
    >
      <div className={styles.column_left}>
        <div className={styles.content_container}>
          <h2>Misión</h2>
          <p>
            {mision.split(" ").map((word, index) => {
              return (
                <span key={index} className={styles.mask}>
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? "open" : "closed"}
                    key={index}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
        </div>
        <img src={ImagenTest.src} alt="img" />
        <div className={styles.layer}></div>
      </div>
      <div className={styles.column_right}>
        <div className={styles.content_container}>
          <h2>Visión</h2>
          <p>
            {vision.split(" ").map((word, index) => {
              return (
                <span key={index} className={styles.mask}>
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? "open" : "closed"}
                    key={index}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
        </div>
        <img src={ImagenTest2.src} alt="img" />
        <div className={styles.layer}></div>
      </div>
    </section>
  );
}
