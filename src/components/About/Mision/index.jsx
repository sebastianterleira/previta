import styles from "./mision.module.css";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "./animation";

import ImagenTest from "../../../assets/img/Body/img_1.jpg";

export default function Mision() {
  const phrase =
    "Nuestra misión es brindar productos y servicios innovadores que promuevan un estilo de vida saludable y fortalezcan a los pacientes a través de la educación.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <section ref={description} className={styles.section}>
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
      <img data-scroll data-scroll-speed={0.1} src={ImagenTest.src} alt="img" />
    </section>
  );
}
