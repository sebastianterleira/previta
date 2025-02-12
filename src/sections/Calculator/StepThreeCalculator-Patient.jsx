import styles from "../../styles/Calculator/StepThreeCalculator-Patient.module.css";
import Ahorro from "../../assets/icons/Ahorro.png";
import Tiempo from "../../assets/icons/Tiempo.png";

import { categoriesData } from "../../utils/categoriesData";

function StepThreeCalculatorPatient({ formData, handleChange }) {
  const categorySelect = categoriesData.filter(
    (product) => product.name.toLowerCase() === formData.specialty,
  );

  const productSelect = categorySelect[0].products.filter(
    (product) => product.name === formData.product,
  );

  function calculateSavedDays(resultsPrevita, resultsOthers) {
    const previtaDays = parseInt(resultsPrevita);
    const othersDays = parseInt(resultsOthers);

    if (isNaN(previtaDays) || isNaN(othersDays)) {
      return "----";
    }

    const savedDays = othersDays - previtaDays;

    if (savedDays <= 0) {
      return "Sin ahorro";
    }

    const dayLabel = savedDays === 1 ? "día" : "días";
    return `${savedDays} ${dayLabel}`;
  }

  return (
    <section className={styles["section"]}>
      <h2>Beneficios para el paciente</h2>
      <div className={styles["section-container"]}>
        <select
          className={styles["select"]}
          name="product"
          id="product"
          onChange={handleChange}
          value={formData.product || ""}
        >
          <option value="" selected disabled>
            Seleccionar producto
          </option>
          {categorySelect[0].products.map((product) => (
            <option key={product.id} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
        <div className={styles["details-container"]}>
          <div className={styles["previta-details"]}>
            <h3 className={styles.h3}>Previta Care</h3>
            <div className={styles["content-details"]}>
              <div className={styles["detail-wrapper"]}>
                <p>Costo</p>
                <span>{`S/.${productSelect[0]?.cost.toFixed(2) || "----"}`}</span>
              </div>
              <div className={styles["detail-wrapper"]}>
                <p>Tiempo de entrega</p>
                <span>{productSelect[0]?.resultsPrevita || "----"}</span>
              </div>
            </div>
          </div>
          <div className={styles["labs-details"]}>
            <h3 className={styles.h3}>Laboratorios Clínicos</h3>
            <div className={styles["content-details"]}>
              <div className={styles["detail-wrapper"]}>
                <p>Costo</p>
                <span>{`S/.${productSelect[0]?.costOthers.toFixed(2) || "----"}`}</span>
              </div>
              <div className={styles["detail-wrapper"]}>
                <p>Tiempo de entrega</p>
                <span>{productSelect[0]?.resultsOthers || "----"}</span>
              </div>
            </div>
          </div>
        </div>
        <p className={styles["menssage-parraf"]}>
          *Costo laboratorio clínico: promedio de Lab. de la zona
        </p>
      </div>
      <div className={styles["icons-container"]}>
        <div className={styles["ahorro-container"]}>
          <img src={Ahorro.src} alt="" className={styles["img-ahorro"]} />
          <div className={styles["ahorro-wrapper"]}>
            <p>Ahorro</p>
            <span>
              {productSelect[0]?.cost || productSelect[0]?.costOthers
                ? `S/.${(productSelect[0]?.costOthers - productSelect[0]?.cost).toFixed(2)}`
                : "S/.----"}
            </span>
          </div>
        </div>
        <div className={styles["tiempo-container"]}>
          <img src={Tiempo.src} alt="" className={styles["img-tiempo"]} />
          <div className={styles["tiempo-wrapper"]}>
            <p>Ahorro Tiempo</p>
            <span>
              {calculateSavedDays(
                productSelect[0]?.resultsPrevita,
                productSelect[0]?.resultsOthers,
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepThreeCalculatorPatient;
