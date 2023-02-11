import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector} from'react-redux'
import axios from 'axios';
import { getDataSuccess } from '../Redux/action';
import Style from './Homepage.module.css'

export const Homepage=()=> {
   const dispatch = useDispatch()

  const [name, setName] = useState('')
//   const[timer, setTimer] = useState(0)
  const [time, setTime] = useState(0)
  const [ wordPM, setWordPM] = useState(40)
  const [userInput, setUserInput] = useState("");
  const [accuracy, setAccuracy] = useState(0);

  const getData=()=>{
   axios.get('https://random-word-api.herokuapp.com/word')
.then((res)=> dispatch(getDataSuccess(res.data[0])))
.catch((err)=> console.log(err))
} 



  let data = useSelector((store)=> store.data.join(''))
  console.log("DDDDDDD",data)
useEffect(() => {
   if(data.length == userInput.length){
    getData()
    setUserInput('')
    
    // setAccuracy(100);
   }
}, [data,userInput]);

const handleInput = (e) => {
  setUserInput(e.target.value);
      setAccuracy(
      (calculateAccuracy(data, userInput) / data.length) * 100);
   }


const calculateAccuracy = (data, userInput) => {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (userInput[i] != data[i]) {
      count++;
    }
  
  }
  console.log("COUNT", count)
  let accuracy = data.length-count    
  return accuracy;
};

let fixedAccuracy = accuracy.toFixed(2)




return  (
   <div className={Style.container}>
      <p>Typing Speed Test App</p>
      {/* <h2>{timer}</h2> */}
            {/* <button onClick={onClickReset}>Reset</button>
            <button onClick={pause}>Pause</button> */}
      <div className={Style.fristDiv}>
         <label htmlFor="">WPM</label>
         <input type="number" value={wordPM} onChange={(e)=> setWordPM(e.target.value)}  />
      </div>
      <div className={Style.wordContainer}>
         <h2>{data}</h2>
      </div>
      <div>
        <input className={Style.inputField} type="text" placeholder='type word' value={userInput} onChange={handleInput} />
      </div>
      <div className={Style.bottomDiv}>
         <p>WPM:{}</p>
          <p>Accuracy : {fixedAccuracy}%</p>
      </div>

   </div>
)
}