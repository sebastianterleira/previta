import styles from "./content.module.css";
import Magnetic from "../../../subcomponents/MagneticElement";
import { slideUp, opacity } from "./animation";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { linksAbout, linksSocials } from "./Links";
import LogoBlank from "../../../../assets/img/Logos/logo-blank.png"

export default function Content() {
  return (
    <div className={styles.content}>
      <Section1 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  const refOpacityAnimation = useRef(null);
  const isInView = useInView(refOpacityAnimation);

  return (
    <div ref={refOpacityAnimation} className={styles.section2}>
      <img src={LogoBlank.src}/> 
      <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
        Copyright © 2024 PrevitaCare S.A.C
      </motion.p>
    </div>
  );
};

const Nav = () => {
  const colAboutRef = useRef(null);
  const isInViewColAbout = useInView(colAboutRef);
  const colSocialRef = useRef(null);
  const isInViewColSocial = useInView(colSocialRef);

  return (
    <div className={styles.nav}>
      <div className={styles.navColumns}>
        <div ref={colAboutRef} className={styles.navColumn}>
          <h3 className={styles.navHeading}>Nosotros</h3>
          {linksAbout.map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <Magnetic>
                  <motion.a
                    href={word.url}
                    variants={slideUp}
                    custom={index}
                    animate={isInViewColAbout ? "open" : "closed"}
                    key={index}
                  >
                    {word.text}
                  </motion.a>
                </Magnetic>
              </span>
            );
          })}
        </div>
        <div ref={colSocialRef} className={styles.navColumn}>
          <h3 className={styles.navHeading}>Social</h3>
          {linksSocials.map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <Magnetic>
                  <motion.a
                    href={word.url}
                    variants={slideUp}
                    custom={index}
                    animate={isInViewColSocial ? "open" : "closed"}
                    key={index}
                  >
                    {word.text}
                  </motion.a>
                </Magnetic>
              </span>
            );
          })}
        </div>
      </div>
      <Section2 />
    </div>
  );
};
