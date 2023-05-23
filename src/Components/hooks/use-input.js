import React, { useReducer } from "react";

const initialStateValue = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  } else if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  } else if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  return initialStateValue;
};

const useInput = (validate) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialStateValue
  );

  const isValid = validate(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  function inputHandler(e) {
    dispatch({ type: "INPUT", value: e.target.value });
  }

  function inputBlurHandler() {
    dispatch({ type: "BLUR" });
  }

  function reset() {
    dispatch({ type: "RESET" });
  }

  return {
    value: inputState.value,
    isValid,
    error: hasError,
    inputHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
