import { useState } from "react";

import style from "../../styles/Calculator/StepThreeCalculator-Medic.module.css";
import Profits from "../../assets/icons/Profits.png";
import { categoriesData } from "../../utils/categoriesData";

function StepThreeCalculatorMedic({ formData, handleChange }) {
  const [rentabilidad, setRentabilidad] = useState(15);
  const [totalPatients, setTotalPatients] = useState(0);

  const categorySelect = categoriesData.filter(
    (product) => product.name.toLowerCase() === formData.specialty,
  );

  const productSelect = categorySelect[0].products.filter(
    (product) => product.name === formData.product,
  );

  const rentabilidadFinal = (
    (productSelect[0]?.cost * rentabilidad) / 100 +
    productSelect[0]?.cost
  ).toFixed(2);

  const totalProfit = (
    totalPatients *
    (rentabilidadFinal - productSelect[0]?.cost)
  ).toFixed(2);

  return (
    <section className={style["section"]}>
      <h2>Beneficios para el médico</h2>
      <div className={style["select-container"]}>
        <select
          className={style["select"]}
          name="product"
          id="product"
          onChange={handleChange}
          value={formData.product || ""}
        >
          <option value="" disabled>
            Seleccionar producto
          </option>
          {categorySelect[0].products.map((product) => (
            <option key={product.id} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
        <h3 className={style["h3"]}>Detalles</h3>
        <div className={style["details-container"]}>
          <div className={style["details"]}>
            <p>Nro de pacientes por mes</p>
            <input
              type="number"
              placeholder="----"
              value={totalPatients}
              onChange={(e) => setTotalPatients(e.target.value)}
              className={style["input-totalPatients"]}
            />
          </div>
          <div className={style["details"]}>
            <p>Costo por prueba</p>
            <span>{`S/.${productSelect[0]?.cost || "----"}`}</span>
          </div>
          <div className={style["details"]}>
            <p>Precio a paciente</p>
            <span>
              {productSelect[0]?.cost ? `S/.${rentabilidadFinal}` : "S/.----"}
            </span>
          </div>
        </div>
        {productSelect.length !== 0 && (
          <p className={style["price-suggested"]}>
            *Precio venta sugerido S/.
            {rentabilidadFinal}
          </p>
        )}
      </div>
      <div className={style["results-container"]}>
        <div className={style["profit-container"]}>
          <img
            src={Profits.src}
            alt="Imagen para mostrar la rentabilidad"
            className={style["img-profit"]}
          />
          <div className={style["profitability-container"]}>
            <p>Rentabilidad</p>
            <div className={style["input-container"]}>
              <span className={style["percentage-char"]}>%</span>
              <input
                type="number"
                placeholder="----"
                value={rentabilidad || 15}
                onChange={(e) => setRentabilidad(e.target.value)}
                className={style["input-rentabilidad"]}
              />
            </div>
          </div>
        </div>
        <div className={style["profit-container"]}>
          <img
            src={Profits.src}
            alt="Imagen para mostrar la rentabilidad"
            className={style["img-profit"]}
          />
          <div className={style["profitability-container"]}>
            <p>Rentabilidad</p>
            <span className={style["total-profit"]}>
              {"S/." + productSelect.length !== 0 ? "----" : totalProfit}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepThreeCalculatorMedic;
