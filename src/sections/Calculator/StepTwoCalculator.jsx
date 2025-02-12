import styles from "../../styles/Calculator/StepTwoCalculator.module.css";
import Medico from "../../assets/icons/Medico.png";
import Paciente from "../../assets/icons/Paciente.png";

function StepTwoCalculator({ handleBenefit }) {
  return (
    <section className={styles["section"]}>
      <div className={styles["benefits-container"]}>
        <div
          className={styles["benefits-medic"]}
          onClick={() => handleBenefit("user", "medic")}
        >
          <h2>Beneficios para el medico</h2>
          <img src={Medico.src} alt="Icono de un doctor" />
        </div>
        <div
          className={styles["benefits-patient"]}
          onClick={() => handleBenefit("user", "patient")}
        >
          <h2>Beneficios para el paciente</h2>
          <img src={Paciente.src} alt="Icono de un paciente" />
        </div>
      </div>
      <div className={styles["textInfo"]}>
        <h2>
          *Las pruebas rápidas permiten una detección preliminar y rápida, y si
          el resultado es positivo las pruebas de laboratorio proveen un mayor
          detalle del diagnóstico y el origen de la enfermedad
        </h2>
      </div>
    </section>
  );
}

export default StepTwoCalculator;
