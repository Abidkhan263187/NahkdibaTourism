import axios from "axios"
import { userSignUp } from "./action"



export const SignupFunc=(SignUpData,gotoLogin)=>async(dispatch,)=>{
    try {
        await axios.post(`https://tired-cormorant.cyclic.app/touismReg/signup`,SignUpData,{
            headers:{
            'ContentType': 'application/json'
            }
        }).then((res)=>{
            // console.log(res.data)
        //    dispatch(userSignUp(true))
           gotoLogin()
        })
    } catch (error) {
        // dispatch(userSignUp(false))
  
    }
  
}

export const LoginFunc=async(loginData,gotoHome)=>{
    try {
        await axios.post(`https://tired-cormorant.cyclic.app/touismReg/login`,loginData,{
            headers:{
            'ContentType': 'application/json'
            }
        }).then((res)=>{
            console.log(res.data.token,res.data.user.firstName)
            sessionStorage.setItem('user',JSON.stringify(res.data.user.firstName))
            gotoHome()  
        })
        
    } catch (error) {
        alert('login failed')
    }
}