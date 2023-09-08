import { CONTINENT, COUNTRY } from "./actionTypes"

export  const continentInfo=(payload)=>{
return{
    type:CONTINENT,
    payload
}
}
export  const countryInfo=(payload)=>{
    return{
        type:COUNTRY,
        payload
    }
    }