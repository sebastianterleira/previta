import styles from "../../row.module.css";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "../../animation";

import ImagenTest from "../../../../../assets/img/Body/img_2.jpg";

export default function Row1() {
  const textParraf1 =
    "Desde el principio, PrevitaCare se comprometió a ofrecer productos innovadores que no solo mejoren la calidad de vida, sino que también prevengan enfermedades crónicas y riesgos de salud, como embarazos no deseados y anemia.";
  const textParraf2 = "Resultados rápidos y precisos";
  const textParraf3 = "Resultados rápidos y precisos";
  const parraf1 = useRef(null);
  const parraf2 = useRef(null);
  const parraf3 = useRef(null);
  const isInView1 = useInView(parraf1);
  const isInView2 = useInView(parraf2);
  const isInView3 = useInView(parraf3);

  return (
    <>
      <div className={styles.about}>
        <div className={styles.aboutDescription}>
          <div className={styles.imageContainer}>
            <img src={ImagenTest.src} alt="project image" />
          </div>
          <div className={styles.column}>
            <p ref={parraf1} className={styles.parraf}>
              {textParraf1.split(" ").map((word, index) => {
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
            <p ref={parraf2} className={styles.parraf}>
              {textParraf2.split(" ").map((word, index) => {
                return (
                  <span key={index} className={styles.mask}>
                    <motion.span
                      variants={slideUp}
                      custom={index}
                      animate={isInView2 ? "open" : "closed"}
                      key={index}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
            <p ref={parraf2} className={styles.parraf}>
              {textParraf3.split(" ").map((word, index) => {
                return (
                  <span key={index} className={styles.mask}>
                    <motion.span
                      variants={slideUp}
                      custom={index}
                      animate={isInView3 ? "open" : "closed"}
                      key={index}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
