import { CONTINENT, COUNTRY } from "./actionTypes";

const initialState={
continent:'',
country:''
}
export const reducer=(store=initialState,action)=>{
    switch(action.type){

      case CONTINENT:{
        return{...store,continent:action.payload}
      }
      case COUNTRY:{
        return{...store,country:action.payload}
      }
      default:return store;
    }
}