import styles from "./description.module.css";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import BtnRound from "../../subcomponents/BtnRound";

export default function Description() {
  const phrase =
    "Líderes en soluciones de diagnóstico. Ofrecemos pruebas médicas confiables para cuidar de tu salud y la de los tuyos.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
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
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          Con un enfoque en la precisión y la rapidez, nuestras pruebas están
          diseñadas para brindarte la tranquilidad que necesitas
        </motion.p>
        <a href="/nosotros" data-scroll data-scroll-speed={0.1}>
          <BtnRound className={styles.button}>
            <p>About me</p>
          </BtnRound>
        </a>
      </div>
    </div>
  );
}
