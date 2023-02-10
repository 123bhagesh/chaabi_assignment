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

const handleInput=(e)=>{
   setName(e.target.value)
   
}

let count=0
let nn ='';
if(data.length > 0){
   nn = data[0].split('')
}

for(let a=0; a<nn.length; a++){
   if(nn[a] != name[a]){
      count++
   }
}
let accuracy = (nn.length - count )/nn.length *100
// console.log(accuracy,"ACCCCCCCCCCCCC",count)
// let newAcc= useRef(0)
if(name.length == nn.length){
   // newAcc =accuracy
   localStorage.setItem('Accc',JSON.stringify(accuracy))
}

// let cc = localStorage.getItem(JSON.parse('Accc'))
// console.log("NEWACC", cc)



return  (
   <div className={Style.container}>
      <h1>Typing Test App</h1>
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
        <input className={Style.inputField} value={name} type="text" placeholder='type word' onChange={handleInput} />
      </div>
      <div className={Style.bottomDiv}>
         <p>WPM:{}</p>
          <p>Accuracy : {}%</p>
      </div>

   </div>
)
}