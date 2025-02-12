import style from "../../styles/Calculator/StepOneCalculator.module.css";
import { districtsLima } from "../../utils/districts.js";
import { categoriesData } from "../../utils/categoriesData.js";

function StepOneCalculator({ handleChange, formData }) {
  return (
    <section className={style["section-selection"]}>
      <h2>Selección de características</h2>
      <div className={style["options"]}>
        <div className={style["district"]}>
          <p>Elige el territorio</p>
          <select
            onChange={handleChange}
            className={style["select"]}
            name="district"
            id="district"
            value={formData.district || ""}
          >
            <option value="" disabled>
              Seleccionar distrito
            </option>
            {districtsLima.map((district) => (
              <option key={district.id} value={district.name}>
                {district.name}
              </option>
            ))}
          </select>
        </div>
        <div className={style["especialidad"]}>
          <p>Elige la especialidad</p>
          <select
            onChange={handleChange}
            className={style["select"]}
            name="specialty"
            id="specialty"
            value={formData.specialty || ""}
          >
            <option value="" disabled>
              Seleccionar especialidad
            </option>
            {categoriesData.map((category) => (
              <option key={category.id} value={category.name.toLowerCase()}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}

export default StepOneCalculator;
