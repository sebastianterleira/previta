import styles from "./product-destacados.module.css";
import { useState, useEffect, useRef } from "react";
import Product from "./products/index";
import gsap from "gsap";
import { motion } from "framer-motion";
import BtnRound from "../../subcomponents/BtnRound";
import Product1 from "../../../assets/img/ProductosDestacados/Product1.webp";

const products = [
  {
    title: "Helicobacter",
    src: Product1,
    color: "#455CE9",
    subtitle: "Autotest",
    urlPath: "/productos/helicobacter",
  },
  {
    title: "Embarazo",
    src: Product1,
    color: "#8C8C8C",
    subtitle: "Autotest",
    urlPath: "/productos/helicobacter",
  },
  {
    title: "Ovulación",
    src: Product1,
    color: "#EFE8D3",
    subtitle: "Autotest",
    urlPath: "/productos/Ovulación",
  },
  {
    title: "Clamidia",
    src: Product1,
    color: "#706D63",
    subtitle: "Prueba de uso Profesional",
    urlPath: "/productos/Clamidia",
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };

  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <section
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className={styles.projects}
    >
      <p className={styles.title}>Nuestros productos destacados</p>
      <div className={styles.body}>
        {products.map((product, index) => {
          return (
            <Product
              index={index}
              title={product.title}
              manageModal={manageModal}
              subtitle={product.subtitle}
              urlPath={product.urlPath}
              key={index}
            />
          );
        })}
      </div>
      <BtnRound>
        <a href="/productos" className={styles.btn}>
          Todos los productos
        </a>
      </BtnRound>

      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={styles.modalContainer}
        >
          <div
            style={{ top: index * -100 + "%" }}
            className={styles.modalSlider}
          >
            {products.map((product, index) => {
              const { src, color } = product;
              return (
                <div
                  className={styles.modal}
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}
                >
                  <img src={src.src} width={300} height={0} alt="image" />
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className={styles.cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          View
        </motion.div>
      </>
    </section>
  );
}
