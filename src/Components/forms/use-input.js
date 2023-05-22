import React, { useState } from "react";

const useInput = (validate) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validate(enteredValue);
  const hasError = !isValid && isTouched;

  function inputHandler(e) {
    setEnteredValue(e.target.value);
  }

  function inputBlurHandler() {
    setIsTouched(true);
  }

  function reset() {
    setEnteredValue("");
    setIsTouched(false);
  }

  return {
    value: enteredValue,
    isValid,
    error: hasError,
    inputHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
