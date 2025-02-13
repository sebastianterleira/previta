import styles from "../../row.module.css";
import { useLayoutEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { slideUp } from "../../animation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import ImagenTest from "../../../../../assets/img/Body/img_2.jpg";

export default function Row1() {
  const textParraf1 =
    "Desde el principio, PrevitaCare se comprometió a ofrecer productos innovadores que no solo mejoren la calidad de vida, sino que también prevengan enfermedades crónicas y riesgos de salud, como embarazos no deseados y anemia.";
  const textParraf2 =
    "La empresa se enfoca en empoderar a los pacientes, trabajando como aliado de confianza junto a profesionales y autoridades de salud, con el objetivo de reducir la severidad y mortalidad de enfermedades en todas las etapas de la vida. Colaborando con el sector público y privado, PrevitaCare facilita diagnósticos accesibles y tratamientos oportunos, aliviando la carga del sistema sanitario.";
  const textParraf3 =
    "Con alianzas regionales, busca aportar innovación y fortalecer el sistema de salud, mejorando la vida de millones en la región mediante educación y prevención.";
  const parraf1 = useRef(null);
  const parraf2 = useRef(null);
  const parraf3 = useRef(null);
  const isInView1 = useInView(parraf1);
  const isInView2 = useInView(parraf2);
  const isInView3 = useInView(parraf3);
  const container = useRef(null);
  const imageContainer = useRef(null);
  const secondColumn = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: imageContainer.current,
      pin: true,
      start: "top-=10px", // La imagen se pinnea cuando su parte superior llega al top del viewport.
      // Se desactiva el pin cuando la parte superior del segundo párrafo alcanza el 80% del viewport.
      endTrigger: secondColumn.current,
      end: "top center",
    });
  }, []);

  return (
    <>
      <div className={styles.about}>
        <div ref={container} className={styles.aboutDescription}>
          <div className={styles.imageContainer}>
            <img
              ref={imageContainer}
              src={ImagenTest.src}
              alt="project image"
            />
          </div>
          <div className={styles.column}>
            <div>
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
            </div>
            <div>
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
            </div>
            <div ref={secondColumn}>
              <p ref={parraf3} className={styles.parraf}>
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
      </div>
    </>
  );
}
