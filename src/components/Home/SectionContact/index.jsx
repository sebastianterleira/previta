import styles from "./section-contact.module.css";
import BtnRound from "../../subcomponents/BtnRound";

export default function SectionContact() {
  return (
    <section className={styles.section}>
      <p
        className={styles.contactPhrase}
        data-scroll
        data-scroll-speed={0.1}
      >
        ¿Listo para tomar el control de tu salud? Contacta con nosotros
      </p>
      <a href="/contact" data-scroll data-scroll-speed={0.1}>
        <BtnRound style={{ border: "1px solid #5e7099", overflow: "hidden" }}>
          <p className={styles.btn_contact}>CONTACTANOS</p>
        </BtnRound>
      </a>
    </section>
  );
}
