import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Continent } from '../Pages/Continent'
import { Country } from '../Pages/Country'
import { State } from '../Pages/State'
import { Places } from '../Pages/Places'
import { Packages } from '../Pages/Packages'
import { Overview } from '../Pages/Overview'
import { Booking } from '../Pages/Booking'
import ContactPage from '../Pages/ContactPage'
export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/packages' element={<Packages/>}/>
            <Route path='/allcontinent' element={<Continent/>}/>
            <Route path='/continent/:region' element={<Country/>}/>
            <Route path='/:region/:country'  element={<State/>} />
            <Route path='/:region/:country/:state'  element={<Places/>} />
            <Route path="/overview" element={<Overview/>} />
            <Route path='/book' element={<Booking/>} />
            <Route path='/contact' element={<ContactPage/>} />
        </Routes>
    </div>
  )
}
