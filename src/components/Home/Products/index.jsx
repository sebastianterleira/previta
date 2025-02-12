import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import styles from "./MarqueeCards.module.css";

import BgProducts from "../../../assets/img/About/Intro/img2.jpg";
import Product from "../../../assets/img/ProductosDestacados/Product1.webp";
import BtnRound from "../../subcomponents/BtnRound";

export default function MarqueeCards() {
  const marqueeRef = useRef(null);

  useLayoutEffect(() => {
    const marquee = marqueeRef.current;
    // La mitad del scrollWidth corresponde a una sola lista duplicada.
    const totalWidth = marquee.scrollWidth / 2;

    gsap.to(marquee, {
      x: -totalWidth,
      ease: "none",
      duration: 40, // Aumentado para que la animación vaya más despacio
      repeat: -1,
    });
  }, []);

  const cards = [
    {
      name: "Helicobacter",
      category: "Autotest",
      pathUrl: "productos/helicobacter",
      img: Product,
    },
    {
      name: "Embarazo",
      category: "Autotest",
      pathUrl: "productos/helicobacter",
      img: Product,
    },
    {
      name: "Ovulación",
      category: "Autotest",
      pathUrl: "productos/helicobacter",
      img: Product,
    },
    {
      name: "Clamidia",
      category: "Autotest",
      pathUrl: "productos/helicobacter",
      img: Product,
    },
    {
      name: "Clamidia",
      category: "Prueba de uso Profesional",
      pathUrl: "productos/helicobacter",
      img: Product,
    },
  ];

  return (
    <section className={styles.marqueeContainer}>
      <div className={styles.title_container}>
        <p>Productos Destacados</p>
      </div>
      <div className={styles.marquee} ref={marqueeRef}>
        {cards.map((card, i) => (
          <div key={`card1-${i}`} className={styles.card}>
            {/* <img src={BgProducts.src} className={styles.img}/> */}
            <div className={styles.info_card}>
              <p className={styles.title}>{card.name}</p>
              <p className={styles.category}>{card.category}</p>
            </div>
            <div className={styles.img_card}>
              <img src={card.img.src} />
            </div>
          </div>
        ))}
        {cards.map((card, i) => (
          <div key={`card1-${i}`} className={styles.card}>
            {/* <img src={BgProducts.src} className={styles.img}/> */}
            <div className={styles.info_card}>
              <p className={styles.title}>{card.name}</p>
              <p className={styles.category}>{card.category}</p>
            </div>
            <div className={styles.img_card}>
              <img src={card.img.src} />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.button_container}>
        <BtnRound>
          <a href="/productos" className={styles.btn}>
            Todos los productos
          </a>
        </BtnRound>
      </div>
    </section>
  );
}
