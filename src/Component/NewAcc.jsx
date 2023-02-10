import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataSuccess } from '../Redux/action'

export const NewAcc = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [acc, setAcc] = useState(0)
    
    let data = useSelector((store)=> store.data)
    let newData = data.join('')
    console.log(newData)
    
    const getData=()=>{
        axios.get('https://random-word-api.herokuapp.com/word')
    .then((res)=> dispatch(getDataSuccess(res.data[0])))
    .catch((err)=> console.log(err))
    }
    useEffect(()=>{
       // getData()
          if(name== newData){
          getData()
          setName('')
          
       }
       if(name.length == newData.length){
           handleAcc()
       }
    },[name,newData])

    const handleAcc=()=>{
        let c= 0
        for(let a=0; a<newData.length; a++){
           if(name[a] == newData[a]){
            c++
           }
        }
        // setAcc(((name.length-c)/name.length)*100)
        const accuracy = ((name.length-c)/name.length)*100
        // setAcc(accuracy)
        console.log("ACCCCCC",accuracy)
    }

    console.log("DATA", newData, name,"AC", acc)

  return (
    <div>
        <h2>{data}</h2>
        <input type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)} />
        <h1>{acc}</h1>
    </div>
  )
}
