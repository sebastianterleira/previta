import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./header.module.css";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BtnRound from "../subcomponents/BtnRound";
import Magnetic from "../subcomponents/MagneticElement";

import LogoPrevita from "../../assets/img/Logos/logo-blank.png";
import LogoPrevitaFullColor from "../../assets/img/Logos/LogoFullColor.png";

export default function index({ theme = true }) {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [pathname, setPathname] = useState(window.location.pathname);
  const button = useRef(null);

  useEffect(() => {
    const handlePathChange = () => setPathname(window.location.pathname);

    window.addEventListener("popstate", handlePathChange);
    window.addEventListener("pushState", handlePathChange);
    window.addEventListener("replaceState", handlePathChange);

    return () => {
      window.removeEventListener("popstate", handlePathChange);
      window.removeEventListener("pushState", handlePathChange);
      window.removeEventListener("replaceState", handlePathChange);
    };
  }, []);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false),
          );
        },
      },
    });
  }, []);

  return (
    <>
      <div ref={header} className={styles.header}>
        <div className={styles.logo}>
          <Magnetic>
            <a href="/">
              {theme ? (
                <img src={LogoPrevita.src} alt="logo previta" />
              ) : (
                <img src={LogoPrevitaFullColor.src} alt="logo previta black" />
              )}
            </a>
          </Magnetic>
        </div>
        <div className={styles.nav}>
          <Magnetic>
            <div className={styles.el}>
              <a className={theme ? styles.blank : styles.black} href="/nosotros">Nosotros</a>
              <div className={theme ? styles.indicator : styles.indicator_black }></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a className={theme ? styles.blank : styles.black} href="/noticias">Noticias</a>
              <div className={theme ? styles.indicator : styles.indicator_black }></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <a className={theme ? styles.blank : styles.black} href="/contacto">Contactanos</a>
              <div className={theme ? styles.indicator : styles.indicator_black }></div>
            </div>
          </Magnetic>
        </div>
      </div>
      <div ref={button} className={styles.headerButtonContainer}>
        <BtnRound
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
          ></div>
        </BtnRound>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      {/* <div className={`${styles.maskBg} ${styles.overlay} ${isActive ? styles["fixed-nav-back"] : ""}`}></div> */}
    </>
  );
}
