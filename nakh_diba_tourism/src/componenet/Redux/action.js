import { Login } from "../Pages/Register/Login"
import { CONTINENT, COUNTRY, LOGIN, SIGNUP } from "./actionTypes"

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
