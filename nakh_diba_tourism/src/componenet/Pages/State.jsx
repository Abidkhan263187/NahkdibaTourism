import React from 'react'

import { useEffect,useState } from 'react'
import {useSelector,} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
export const State = () => {

  const {country}=useSelector((store)=>{
    return store
  })
  return (
    <div>{country}</div>
  )
}
