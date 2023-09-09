import React from 'react'
import { useParams } from 'react-router-dom'


export const Places = () => {
    const {state}=useParams()
  return (
    <div>{state}</div>
  )
}
