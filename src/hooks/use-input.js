import { useState } from "react";

export const useInput = (config = { max: 0, min: 0, isEmail: false }) => {
  const [value, setValue] = useState('');
  const [errors, setErrors] = useState([]);


  const change = (event) => {
    const newValue = event.target.value;
    if (config.max !== 0) {
      event.target.value.length <= config.max && setValue(event.target.value)
    }
    else {
      config.max && setValue(event.target.value)
    }
    runValidations(newValue);
  }

  const runValidations = (newValue) => {
    let errores = [];
    if (config.min !== 0 && newValue.length < config.min)
      errores.push(`Por favor ingresa al menos ${config.min} caracteres`)
    if (config.isEmail && !newValue.includes("@"))
      errores.push(`Por favor ingresa una dirección de email válida`)
    setErrors(errores);
  }

  return { props: {value, change, errors}}
}