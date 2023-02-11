import * as types from "./actionTypes";

const initalState = {
  data:[],
  length:Number(0),
  isLoading:false,
  isError:false
};

const reducer = (oldState = initalState, action) => {
  
  const {type,payload} = action

  switch (type) {
    case types.GET_REQUEST:{
      return{
        ...oldState,
        isLoading:true,
        isError:false
      }
    }
    case types.GET_SUCCESS:{
        return{
          ...oldState,
          isLoading:false,
          isError:false,
          data:[...payload]

        }
      }
    case types.GET_FAILURE:{
          return{
            ...oldState,
            isLoading:false,
            isError:true
          }
    }
    case types.GET_LENGHT:{
         return{
          ...oldState,
          length:oldState.length+ payload
         }
    }
    default:
      return oldState;
  }
};

export { reducer };