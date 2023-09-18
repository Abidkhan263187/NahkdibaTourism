import React from 'react'
import { Nav } from './Nav'
import { Events_News } from './Events_News'
import { Footer } from './Footer'

export const Overview = () => {
  return (
    <div>
        <Nav/>
        <Events_News/>
        <Footer/>
    </div>
  )
}
