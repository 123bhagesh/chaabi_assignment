import React, { useState } from 'react';
import styles from '../Styles/timerLimitInputs.module.css';
const TimerLimitInput = (props) => {
  const { timeLimit, setTimeLimit } = props;

  const handleChange = (e) => {
    setTimeLimit({
      ...timeLimit,
      [e.target.name]: e.target.value,
    });
  };

  const validations = (e) => {
    if (e.target.value.length > 2)
      e.target.value = e.target.value.slice(0, e.target.maxLength);
  };

  return (
    <div className={styles.inputsContainer}>
      <div>
        <input
          onInput={validations}
          onChange={handleChange}
          placeholder="00"
          type="number"
          name="hour"
        />
        <p>h</p>
      </div>
      <div>
        <input
          onInput={validations}
          onChange={handleChange}
          placeholder="00"
          type="number"
          name="minutes"
        />
        <p>m</p>
      </div>
      <div>
        <input
          onInput={validations}
          onChange={handleChange}
          placeholder="00"
          type="number"
          name="seconds"
        />
        <p>s</p>
      </div>
    </div>
  );
};

export default TimerLimitInput;
