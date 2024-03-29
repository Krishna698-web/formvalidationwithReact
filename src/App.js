import React, { useState } from "react";
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

  const {
    value: passwordInputValue,
    isValid: passwordIsValid,
    error: passwordError,
    inputHandler: passwordInputHandler,
    inputBlurHandler: passwordInputBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.trim() !== "");

  //   FormValidity
  let formIsValid = false;

  if (nameIsValid && lnameIsValid && emailIsValid && passwordIsValid) {
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

  const [passwordType, setPasswordType] = useState("password");
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordHandler = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      setShowPassword(true);
    } else {
      setPasswordType("password");
      setShowPassword(false);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Test Form</h1>
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
        <div className="field pwd-field">
          <label>Password</label>
          <div className="passwordSpace">
            <input
              type={passwordType}
              value={passwordInputValue}
              onChange={passwordInputHandler}
              onBlur={passwordInputBlurHandler}
            />
            <button className="eye" onClick={showPasswordHandler}>
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </button>
          </div>
          {passwordError && (
            <p className="text-error">Please check your password.</p>
          )}
        </div>
        <button type="submit" className="submit_button" disabled={!formIsValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
