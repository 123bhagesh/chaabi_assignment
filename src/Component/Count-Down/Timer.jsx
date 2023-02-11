import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CountDown from './CountDown';
import styles from '../Styles/timer.module.css';
import { useSelector } from 'react-redux';


const Timer = ({wordPM}) => {
  const [status, setStatus] = useState('');
  const [timeLimit, setTimeLimit] = useState(0);
  const [start, setStart] = useState(false);
  let length = useSelector((store)=> store.length)

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
      <CountDown status={status} timeLimit={timeLimit} wordPM={wordPM} />
    </div>
  );
};

export default Timer;
