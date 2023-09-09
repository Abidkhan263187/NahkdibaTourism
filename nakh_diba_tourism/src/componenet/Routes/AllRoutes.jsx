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
            <Route path='/allcontinent' element={<Continent/>}/>
            <Route path='/continent/:region' element={<Country/>}/>
            <Route path='/:region/:country'  element={<State/>} />
        </Routes>
    </div>
  )
}
