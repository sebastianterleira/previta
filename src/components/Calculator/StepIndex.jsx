import { useState, useEffect } from "react";

import StepOneCalculator from "../../sections/Calculator/StepOneCalculator";
import StepTwoCalculator from "../../sections/Calculator/StepTwoCalculator";
import StepThreeCalculatorMedic from "../../sections/Calculator/StepThreeCalculator-Medic";
import StepThreeCalculatorPatient from "../../sections/Calculator/StepThreeCalculator-Patient";

export default function StepIndex() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    district: "",
    specialty: "",
    user: "",
    product: "",
  });

  // Detecta cambios en el formulario y avanza automáticamente si todos los campos están completos
  useEffect(() => {
    if (step === 1 && formData.district && formData.specialty) {
      setStep(2);
    }
    if (step === 2 && formData.user) {
      setStep(3);
    }

    console.log(formData);
    console.log(step);
  }, [formData, step]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleBenefit = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      {step === 1 && (
        <StepOneCalculator handleChange={handleChange} formData={formData} />
      )}
      {step === 2 && (
        <StepTwoCalculator handleBenefit={handleBenefit} formData={formData} />
      )}
      {step === 3 && formData.user === "medic" && (
        <StepThreeCalculatorMedic
          formData={formData}
          handleChange={handleChange}
        />
      )}
      {step === 3 && formData.user === "patient" && (
        <StepThreeCalculatorPatient
          formData={formData}
          handleChange={handleChange}
        />
      )}
    </>
  );
}
