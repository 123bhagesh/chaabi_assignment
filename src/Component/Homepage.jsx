import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from'react-redux'
import axios from 'axios';
import { getDataSuccess } from '../Redux/action';
import Style from './Homepage.module.css'

export const Homepage=()=> {
   const dispatch = useDispatch()

  const [name, setName] = useState('')
  const data = useSelector((store)=> store)
  console.log("DDDDDDD",data)

const getData=()=>{
    axios.get('https://random-word-api.herokuapp.com/word')
.then((res)=> dispatch(getDataSuccess(res.data)))
.catch((err)=> console.log(err))
}
useEffect(()=>{
   getData()
},[])
// console.log(name,"NANNNNNN")


return  (
   <div>
      <h1>RANDOM API</h1>
      <div>
        <input className={Style.inputField} type="text" onChange={(e)=> setName(e.target.value)} />
      </div>
   </div>
)
}