import React, { useEffect } from 'react'
import axios from 'axios';

export const Homepage=()=> {


    const options = {
      method: 'GET',
      url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
      params: {count: '5'},
      headers: {
        'X-RapidAPI-Key': '1ba1cfd69amsh1f2982a506326afp18aff0jsn2b1911e6d9f2',
        'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
// const getData=()=>{
//     axios.request(options)
// .then((res)=> console.log(res.data))
// .catch((err)=> console.log(err))
// }
// useEffect(()=>{
//    getData()
// },[])
// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
return  (
   <div>
      <h1>RANDOM API</h1>
   </div>
)
}