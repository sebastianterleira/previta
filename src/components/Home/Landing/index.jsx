import styles from "./landing.module.css";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import BackgroundImage from "../../../assets/img/PreLauncher/floating_1.jpg";

export default function Landing() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false });

  const slideLeft = {
    hidden: { x: -300, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      y: 0, 
      transition: {
        duration: 1,
        ease: [0.25, 1, 0.5, 1],
        delay: i * 0.25,
      },
    }),
  };

  return (
    <section className={styles.main}>
      <img src={"https://cdn.sanity.io/images/5w0zqrlb/production/d140ad4cf5b4894df5b90535f21bf38073e96ca2-2800x1200.jpg?w=2800&fm=webp&q=85"} alt="background" />

      <div ref={containerRef} className={styles.sliderContainer}>
        {["Pruebas de salud en ", "casa, cuando y", "donde las necesites"].map((text, i) => (
          <motion.p
            key={i}
            custom={i}
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
