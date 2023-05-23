import React from "react";
import useInput from "./Components/hooks/use-input";

const App = () => {
  const {
    value: nameInputVal,
    isValid: nameIsValid,
    error: nameError,
    inputHandler: nameInputHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameReset,
  } = useInput((value) => value !== "");

  const {
    value: lnameInputVal,
    isValid: lnameIsValid,
    error: lnameError,
    inputHandler: lnameInputHandler,
    inputBlurHandler: lnameInputBlurHandler,
    reset: lnameReset,
  } = useInput((value) => value !== "");

  const {
    value: emailInputVal,
    isValid: emailIsValid,
    error: emailError,
    inputHandler: emailInputHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  //   FormValidity
  let formIsValid = false;

  if (nameIsValid && lnameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(nameInputVal, emailInputVal, lnameInputVal);

    if (!nameIsValid && !lnameIsValid && !emailIsValid) {
      return;
    }

    nameReset();
    lnameReset();
    emailReset();
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Basic Form</h1>
      <div className="field" style={{ margin: "1rem 0" }}>
        <label style={{ display: "block" }}>Name:</label>
        <input
          type="text"
          value={nameInputVal}
          onChange={nameInputHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameError && <p style={{ color: "red" }}>No inut given.</p>}
      </div>
      <div className="field" style={{ margin: "1rem 0" }}>
        <label style={{ display: "block" }}>Last name:</label>
        <input
          type="text"
          value={lnameInputVal}
          onChange={lnameInputHandler}
          onBlur={lnameInputBlurHandler}
        />
        {lnameError && <p style={{ color: "red" }}>No inut given.</p>}
      </div>
      <div className="field" style={{ margin: "1rem 0" }}>
        <label style={{ display: "block" }}>Email:</label>
        <input
          type="email"
          value={emailInputVal}
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailError && <p style={{ color: "red" }}>No inut given.</p>}
      </div>
      <button type="submit" disabled={!formIsValid}>
        Submit
      </button>
    </form>
  );
};

export default App;
