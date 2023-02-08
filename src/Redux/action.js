import * as types from "./actionTypes";


const getDataRequest =() =>{
  return{
    type: types.GET_REQUEST
  }
}

const getDataSuccess =(payload) =>{
  return{
    type: types.GET_SUCCESS,
    payload,
  }
}
const getDataFailure =() =>{
  return{
    type: types.GET_FAILURE
  }
}

export { getDataRequest,getDataSuccess,getDataFailure};