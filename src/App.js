import React from "react";

import styles from "./App.module.css";
import useInput from "./Components/hooks/use-input";
import BasicForm from "./Components/forms/BasicForm";

const App = () => {
  const {
    value: enteredName,
    hasError,
    inputHandler: nameInputHandler,
    blurHandler: nameBlurHandler,
    reset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredAge,
    hasError: ageHasError,
    inputHandler: ageInputHandler,
    blurHandler: ageBlurHandler,
    reset: resetAge,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredName && enteredAge) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!enteredName) {
      return;
    }
    reset();

    resetAge();
  };

  const nameHelperClasses = hasError
    ? `${styles.form_control} ${styles.notValid}`
    : styles.form_control;

  const ageHelperClasses = ageHasError
    ? `${styles.form_control} ${styles.notValid}`
    : styles.form_control;

  return (
    <div>
      {/* <form onSubmit={submitHandler}>
        <h1>Fill in your Name</h1>
        <div>
          <div className={nameHelperClasses}>
            <label>Name:</label>
            <input
              type="text"
              value={enteredName}
              onChange={nameInputHandler}
              onBlur={nameBlurHandler}
            />
            {hasError && <p>Please enter your name</p>}
          </div>
          <div className={ageHelperClasses}>
            <label>Age:</label>
            <input
              type="number"
              value={enteredAge}
              onChange={ageInputHandler}
              onBlur={ageBlurHandler}
            />
            {ageHasError && <p>Please enter your age</p>}
          </div>
        </div>
        <button disabled={!formIsValid}>Submit</button>
      </form> */}

      <BasicForm />
    </div>
  );
};

export default App;
