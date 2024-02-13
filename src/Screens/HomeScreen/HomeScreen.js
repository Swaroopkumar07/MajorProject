import React from 'react'
import Home from '../../Components/Home/Home'
import DashBoard from '../../Components/DashBoard/DashBoard'
import '../HomeScreen/HomeScreen.css'

export default function HomeScreen() {
  return (
    <div>
      <DashBoard />
      <div className='Home_screen_box'>
        <Home />
      </div>
    </div>
  )
}
