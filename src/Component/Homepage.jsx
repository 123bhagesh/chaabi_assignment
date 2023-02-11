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
  let [acc, setAcc] = useState(0)
   
  let data = useSelector((store)=> store.data)
//   console.log("DDDDDDD",data[0].split(''))
 

const getData=()=>{
    axios.get('https://random-word-api.herokuapp.com/word')
.then((res)=> dispatch(getDataSuccess(res.data)))
.catch((err)=> console.log(err))
}
useEffect(()=>{
   // getData()
      if(name== data){
      getData()
      setName('')
   }
},[name,data])


// const handleInput=(e)=>{
//    setName(e.target.value)
//    if(e.target.value.length == data.length ){
//       // handleAccuracy()
//       console.log("HELLLL")
//    }
//    else{
//       console.log("OKKK")
//    }
// }

const handleInput = (e) => {
   setUserInput(e.target.value);
       setAccuracy(
       (calculateAccuracy(word, userInput) / word.length) * 100
       );
    }
 

 const calculateAccuracy = (word, userInput) => {
   let count = 0;
   for (let i = 0; i < word.length; i++) {
     if (userInput[i] != word[i]) {
       count++;
     }
   
   }
   console.log("COUNT", count)
   let accuracy = word.length-count    
   return accuracy;
 };
// useEffect(()=>{

// },[name,data])

// setAcc([...acc,accuracy])
// console.log(acc,"AAAAAAAA")
// let cc = localStorage.getItem(JSON.parse('Accc'))
// console.log("NEWACC", cc)



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
        <input className={Style.inputField} type="text" placeholder='type word' onChange={handleInput} />
      </div>
      <div className={Style.bottomDiv}>
         <p>WPM:{}</p>
          <p>Accuracy : {acc}%</p>
      </div>

   </div>
)
}