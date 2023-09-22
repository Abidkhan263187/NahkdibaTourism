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
export const AllRoutes = () => {
  const {login}=useSelector((store)=>{
    return store
  })
  const [user,setUser]=useState();

  useEffect(()=>{
    const userData = JSON.parse(sessionStorage.getItem('user'));
    setUser(userData)
  },[user])
  return (
    <div>
        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/packages' element={user||login?<Packages/>:<Navigate to={'/login'}/> }/>
            <Route path='/allcontinent' element={user||login?<Continent/>:<Navigate to={'/login'}/>}/>
            <Route path='/continent/:region' element={<Country/>}/>
            <Route path='/:region/:country'  element={<State/>} />
            <Route path='/:region/:country/:state'  element={<Places/>} />
            <Route path="/overview" element={<Overview/>} />
            <Route path='/book' element={user||login?<Booking/>:<Navigate to={'/login'}/>} />
            <Route path='/contact' element={<ContactPage/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    </div>
  )
}
