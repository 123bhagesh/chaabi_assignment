import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
import styles from '../Styles/countdown.module.css';

//Reusable Count-Down component
const CountDown = (props) => {
  const { status, timeLimit,wordPM } = props;

  const timerId = useRef(null);
  const [seconds, setSeconds] = useState(timeLimit.seconds || 0);
  const [minutes, setMinutes] = useState(timeLimit.minutes || 1);
  const [hour, setHour] = useState(timeLimit.hour || 0);
  let length = useSelector((store)=> store.length)

  const start = () => {
    if (!timerId.current) {
      timerId.current = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    }
    if (hour == 0 && minutes == 0 && seconds == 0) {
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
  let wpm;
  if(seconds==1 && minutes==0){

     wpm = length
    console.log("WPMMM",wpm)
    alert("STOP",{wpm})

  }


  useEffect(() => {
    start()
  }, [seconds, minutes, hour, status]);

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
      <div>
        <h4>Word length: {wpm}</h4>
      </div>
    </div>
  );
};

export default CountDown;
