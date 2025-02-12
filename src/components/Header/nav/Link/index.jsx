import styles from "./link.module.css";
import { motion } from "framer-motion";
import { slide, scale } from "../../animation";
import Magnetic from "../../../subcomponents/MagneticElement";

export default function Link({ data, isActive, setSelectedIndicator }) {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <Magnetic>
        <a href={href}>{title}</a>
      </Magnetic>
    </motion.div>
  );
}
