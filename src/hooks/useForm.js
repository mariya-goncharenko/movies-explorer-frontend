import { useState, useCallback } from "react";

//Хук useForm для управления состоянием формы,
//упрощает управление состоянием и валидацией формы в React-компонентах.
const useForm = () => {
  const [enteredValues, setEnteredInputValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChangeInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setEnteredInputValues({
      ...enteredValues,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: event.target.validationMessage,
    });

    setIsFormValid(event.target.closest("#form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsFormValid = false) => {
      setEnteredInputValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsFormValid);
    },
    [setEnteredInputValues, setErrors, setIsFormValid]
  );

  return {
    enteredValues,
    handleChangeInput,
    isFormValid,
    errors,
    resetForm,
  };
};

export default useForm;
