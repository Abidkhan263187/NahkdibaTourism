import { CONTINENT, COUNTRY, LOGIN, SIGNUP } from "./actionTypes";

const initialState={
continent:'',
country:'',
login:false,

}
export const reducer=(store=initialState,action)=>{
    switch(action.type){

      case CONTINENT:{
        return{...store,continent:action.payload}
      }
      case COUNTRY:{
        return{...store,country:action.payload}
      }
      case LOGIN:{
        return{...store,login:action.payload}
      }
      default:return store;
    }
}