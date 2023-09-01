import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Continent } from '../Pages/Continent'
import { Country } from '../Pages/Country'
import { State } from '../Pages/State'
export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/continent' element={<Continent/>}/>
            <Route path='/country' element={<Country/>}/>
            <Route path='/state'  element={<State/>} />
        </Routes>
    </div>
  )
}
