import React from "react";
import useInput from "./Components/hooks/use-input";
import "./App.css";

const App = () => {
  const {
    value: nameInputVal,
    isValid: nameIsValid,
    error: nameError,
    inputHandler: nameInputHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetName,
  } = useInput((value) => value !== "");

  const {
    value: lnameInputVal,
    isValid: lnameIsValid,
    error: lnameError,
    inputHandler: lnameInputHandler,
    inputBlurHandler: lnameInputBlurHandler,
    reset: resetLname,
  } = useInput((value) => value !== "");

  const {
    value: emailInputVal,
    isValid: emailIsValid,
    error: emailError,
    inputHandler: emailInputHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  let regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  const {
    value: passwordInputValue,
    isValid: passwordIsValid,
    error: passwordError,
    inputHandler: passwordInputHandler,
    inputBlurHandler: passwordInputBlurHandler,
    reset: resetPassword,
  } = useInput(
    (value) => value.trim() !== "" && passwordInputValue.match(regex)
  );

  //   FormValidity
  let formIsValid = false;

  if (nameIsValid && lnameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(nameInputVal, emailInputVal, lnameInputVal);

    if (!nameIsValid && !lnameIsValid && !emailIsValid && !passwordIsValid) {
      return;
    }

    resetName();
    resetLname();
    resetEmail();
    resetPassword();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Basic Form</h1>
        <div className="field" style={{ margin: "1rem 0" }}>
          <label>First Name</label>
          <input
            type="text"
            value={nameInputVal}
            onChange={nameInputHandler}
            onBlur={nameInputBlurHandler}
          />
          {nameError && <p className="text-error">No inut given.</p>}
        </div>
        <div className="field" style={{ margin: "1rem 0" }}>
          <label>Last name</label>
          <input
            type="text"
            value={lnameInputVal}
            onChange={lnameInputHandler}
            onBlur={lnameInputBlurHandler}
          />
          {lnameError && <p className="text-error">No inut given.</p>}
        </div>
        <div className="field" style={{ margin: "1rem 0" }}>
          <label>Email</label>
          <input
            type="email"
            value={emailInputVal}
            onChange={emailInputHandler}
            onBlur={emailInputBlurHandler}
          />
          {emailError && <p className="text-error">No inut given.</p>}
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            value={passwordInputValue}
            onChange={passwordInputHandler}
            onBlur={passwordInputBlurHandler}
          />
          {passwordError && (
            <p className="text-error">Please check your password.</p>
          )}
        </div>
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
