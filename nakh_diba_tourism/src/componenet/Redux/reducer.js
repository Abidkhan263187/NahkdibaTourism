import { CITY_NAME, CONTINENT, COUNTRY, LATITUDE, LOGIN, LONGITUDE, SIGNUP } from "./actionTypes";

const initialState={
continent:'',
country:'',
login:false,
longi:'',
lati:'',
city:'',

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
      case LATITUDE:{
        return {...store,lati:action.payload}
      }
      case LONGITUDE:{
        return {...store,longi:action.payload}
      }
      case CITY_NAME:{
        return {...store,city:action.payload}
      }
      default:return store;
    }
}