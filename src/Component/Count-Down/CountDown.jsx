import React from 'react';
import { useState, useRef, useEffect } from 'react';
// import { toast } from 'react-toastify';
import styles from '../Styles/countdown.module.css';

//Reusable Count-Down component
const CountDown = (props) => {
  const { status, timeLimit } = props;

  const timerId = useRef(null);
  const [seconds, setSeconds] = useState(timeLimit.seconds || 0);
  const [minutes, setMinutes] = useState(timeLimit.minutes || 0);
  const [hour, setHour] = useState(timeLimit.hour || 0);

  const start = () => {
    if (!timerId.current) {
      timerId.current = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
    if ( minutes == 5 && seconds == 0) {
      clearInterval(timerId.current);
      // toast('⏰ Time is Expired');
    }
    if (seconds == 0 && minutes > 0) {
      setMinutes((minutes) => minutes - 1);
      setSeconds(59);
    }
    if (seconds == 0 && minutes == 0 && hour > 0) {
      setHour((hour) => hour - 1);
      setMinutes(59);
      setSeconds(59);
    }
  };
  const pause = () => {
    clearInterval(timerId.current);
    timerId.current = null;
  };
  const reset = () => {
    clearInterval(timerId.current);
    timerId.current = null;
    setSeconds(0);
    setMinutes(0);
    setHour(0);
  };

  useEffect(() => {
    if (status == 'PLAY') {
      start();
    }
    if (status == 'PAUSE') {
      pause();
    }
  }, [seconds, minutes, hour, status]);

  //Clean Up Function
  //becouse whenever our component is unmounted then it reset this four value
  //1 - timerId.current = null;
  //2 - setSeconds(0);
  //3 - setMinutes(0);
  //4 -  setHour(0);

  useEffect(() => {
    return () => {
      clearInterval(timerId.current);
    };
  }, []);
  return (
    <div className={styles.countDown}>
      {/* <div>
        <h4>{hour ? hour : '00'}</h4>
        <p>h</p>
      </div> */}
      <div>
        <h4>{minutes ? minutes : '00'}</h4>
        <p>m</p>
      </div>
      <div>
        <h4>{seconds ? seconds : '00'}</h4>
        <p>s</p>
      </div>
    </div>
  );
};

export default CountDown;
