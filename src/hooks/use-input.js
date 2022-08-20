import { useState } from "react";

function useInput(validateInput) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateInput(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = function (e) {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = function () {
    setIsTouched(true);
  };

  const reset = function () {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
}

export default useInput;
