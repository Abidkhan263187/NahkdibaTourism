import axios from "axios"

export const SignupFunc=(SignUpData,gotoLogin)=>async(dispatch,)=>{
    // console.log(SignUpData)
    try {
        await axios.post(`process.env.REACT_APP_URL/touismReg/signup`,SignUpData,{
            headers:{
            'ContentType': 'application/json'
            }
        }).then((res)=>{
            // console.log(res.data)
        //    dispatch(userSignUp(true))
           gotoLogin()
        })
    } catch (error) {
        console.log(error)
        // dispatch(userSignUp(false))
  
    }
  
}

export const LoginFunc=async(loginData,gotoHome)=>{
    try {
        await axios.post(`${process.env.REACT_APP_URL}/touismReg/login`,loginData,{
            headers:{
            'ContentType': 'application/json'
            }
        }).then((res)=>{
            // console.log(res.data.token,res.data.user.firstName)
            sessionStorage.setItem('user',JSON.stringify(res.data.user.firstName))
            gotoHome()  
        })
        
    } catch (error) {
        alert('login failed')
    }
}

export const forgotPasword=async(email)=>{
try {
    await axios.post(`$${process.env.REACT_APP_URL}/password/forgot`,{
        email:email
    },{
        headers:{
            "Content-Type":"application/json"
        }
    }).then(({data})=>{
       alert(data.message)
        localStorage.setItem('token',JSON.stringify(data.token))
        // console.log(data);
    })
} catch (error) {
    alert("Invalid Email!")
    console.log("error whille forgot password", error)
}
}

export const updatePassword=async(gotoHome,token,password,confirmPassword)=>{
    // console.log("api point =====",password,confirmPassword,token);
    try {
        const response = await axios.post(`${process.env.REACT_APP_URL}/password/reset`, {
            password: password,
            confirmPassword: confirmPassword
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            params: {
                token: token
            }
        });
        localStorage.setItem('token',JSON.stringify(""))
        alert(response.data.mssg)
        gotoHome()

        // console.log(response.data);
    } catch (error) {
       
        console.log("error while resetting password", error);
    }
};
