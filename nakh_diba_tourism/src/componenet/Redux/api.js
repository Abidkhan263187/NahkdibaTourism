import axios from "axios"

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

export const forgotPasword=async(email)=>{
try {
    await axios.post(`http://localhost:5000/password/forgot`,{
        email:email
    },{
        headers:{
            "Content-Type":"application/json"
        }
    }).then(({data})=>{
       alert(data.mssg)
        localStorage.setItem('token',JSON.stringify(data.token))
        // console.log(data);
    })
} catch (error) {
    alert("Invalid Email!")
    console.log("error whille forgot password", error)
}
}

export const updatePassword=async(token,password,confirmPassword)=>{
    // console.log("api point =====",password,confirmPassword,token);
    try {
        const response = await axios.post('http://localhost:5000/password/reset', {
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

        // console.log(response.data);
    } catch (error) {
       
        console.log("error while resetting password", error);
    }
};
