import { useState, useEffect } from "react";
import styles from "./nav.module.css";
import { motion } from "framer-motion";
import { menuSlide } from "../animation";
import Link from "./Link";
import Curve from "./Curve";
import Footer from "./Footer";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Noticias",
    href: "/noticias",
  },
  {
    title: "Nosotros",
    href: "/nosotros",
  },
  {
    title: "Contactanos",
    href: "/contacto",
  },
];

export default function Nav() {
  const [pathname, setPathname] = useState(window.location.pathname);

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

  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navegación</p>
            <span></span>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
