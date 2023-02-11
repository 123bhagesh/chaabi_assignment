import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CountDown from './CountDown';
import TimerLimitInput from './TimerLimitInput';
import styles from '../Styles/timer.module.css';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';
// import { toast } from 'react-toastify';

const Timer = () => {
  const [status, setStatus] = useState('');
  const [timeLimit, setTimeLimit] = useState(0);
  const [start, setStart] = useState(false);

  const handleStart = () => {
    if (timeLimit === null) {
      // toast('Please Enter TimeLimit');
    } else {
      if (status === '') {
        setStart(true);
        setTimeout(() => {
          setStatus('PLAY');
        }, 1);
      } else {
        setStart(!start);
        setStatus('');
        setTimeLimit(null);
      }
    }
  };

  return (
    <div className={styles.timerContainer}>
      <h3>⧖ Timer</h3>
      <hr />
      {!start ? (
        <TimerLimitInput
          setTimeLimit={setTimeLimit}
          timeLimit={timeLimit}
        />
      ) : (
        <>
          <CountDown status={status} timeLimit={timeLimit} />
          <button
            className={styles.startBtn}
            onClick={() => {
              status === 'PAUSE'
                ? setStatus('PLAY')
                : status === 'PLAY'
                ? setStatus('PAUSE')
                : setStatus('PLAY');
            }}
          >
            {status == 'PAUSE'
              ? 'Resume'
              : status === 'PLAY'
              ? 'Pause'
              : 'Play'}
          </button>
        </>
      )}

      <button className={styles.resetBtn} onClick={handleStart}>
        {start ? 'Reset' : 'Play'}
      </button>
    </div>
  );
};

export default Timer;
