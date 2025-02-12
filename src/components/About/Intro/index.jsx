import { useLayoutEffect, useRef } from "react";
import styles from "./intro.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BackgroundImg from "../../../assets/img/About/Intro/img1.jpg";
import IntroImg from "../../../assets/img/About/Intro/img2.jpg";

export default function Index() {
  const background = useRef(null);
  const introImage = useRef(null);
  const title = useRef(null); // Nueva referencia para el h1

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: "+=500px",
      },
    });

    timeline
      // Animación de fondo: cambia el clipPath
      .from(background.current, { clipPath: "inset(15%)" })
      // Animación de la imagen: reduce su altura a 200px
      .to(introImage.current, { height: "200px" }, 0)
      // Animación del título: se mueve hacia arriba (por ejemplo, -50px) y luego regresa al volver a hacer scroll
      .fromTo(
        title.current,
        { y: 0 },
        { y: -50, ease: "none" },
        0
      );
  }, []);

  return (
    <div className={styles.homeHeader}>
      <div className={styles.backgroundImage} ref={background}>
        <img
          src={BackgroundImg.src}
          alt="background image"
          /* Puedes eliminar fill y priority si no aplican en tu setup */
        />
      </div>
      <div className={styles.intro}>
        <div ref={introImage} className={styles.introImage}>
          <img
            src={IntroImg.src}
            alt="intro image"
          />
        </div>
        <h1 ref={title}>
          PREVITA CARE
        </h1>
      </div>
    </div>
  );
}
