import { Login } from "../Pages/Register/Login"
import { CITY_NAME, CONTINENT, COUNTRY, LATITUDE, LOGIN, LONGITUDE, SIGNUP } from "./actionTypes"

export const continentInfo = (payload) => {
    return {
        type: CONTINENT,
        payload
    }
}
export const countryInfo = (payload) => {
    return {
        type: COUNTRY,
        payload
    }
}

export const userLogin = (payload) => {
    return {
        type: LOGIN,
        payload
    }
}

export const setLatitide=(payload)=>{
  return{
    type:LATITUDE,
    payload
  }
}
export const  setLongitide=(payload)=>{
    return {
        type:LONGITUDE,
        payload
    }

}
export const  cityName=(payload)=>{
    return {
        type:CITY_NAME,
        payload
    }

}
