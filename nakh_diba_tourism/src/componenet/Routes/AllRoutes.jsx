import React, { useEffect, useState } from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Continent } from '../Pages/Continent'
import { Country } from '../Pages/Country'
import { State } from '../Pages/State'
import { Places } from '../Pages/Places'
import { Packages } from '../Pages/Packages'
import { Overview } from '../Pages/Overview'
import { Booking } from '../Pages/Booking'
import ContactPage from '../Pages/ContactPage'
import { Login } from '../Pages/Register/Login'
import { SignUp } from '../Pages/Register/SignUp'
import { useSelector } from 'react-redux'
import { ForgotPassword } from '../Pages/Register/ForgotPassword'
import { ResetPassword } from '../Pages/Register/ResetPassword'
import {SignupForm} from '../Pages/Register/SignupForm'
export const AllRoutes = () => {
  const {login}=useSelector((store)=>{
    return store
  })
  const [user,setUser]=useState();

  useEffect(()=>{
    const userData = JSON.parse(sessionStorage.getItem('user'));
    setUser(userData)
  },[])
  return (
    <div>
        <Routes>
          {/* {console.log(user)} */}
            <Route path='/' element={<Home/>}/>
            <Route path='/packages' element={user !==null  ?<Packages/>:<Navigate to={'/login'}/> }/>
            <Route path='/allcontinent' element={user !==null ?<Continent/>:<Navigate to={'/login'}/>}/>
            <Route path='/continent/:region' element={<Country/>}/>
            <Route path='/:region/:country'  element={<State/>} />
            <Route path='/:region/:country/:state'  element={<Places/>} />
            <Route path="/overview" element={<Overview/>} />
            <Route path='/book' element={user !==null ?<Booking/>:<Navigate to={'/login'}/>} />
            <Route path='/contact' element={<ContactPage/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/forgotPassword' element={<ForgotPassword/>}/>
            <Route path='/resetPassword' element={<ResetPassword/>}/>
            <Route path='/signupform' element={<SignupForm/>}/>
        </Routes>
    </div>
  )
}
