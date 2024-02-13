import React from 'react'
import logo from '../../assets/images/logo.jpg'
import '../Header/Header.css'

export default function Header() {
  return (
    <div className='Header_logo'>
        <img src={logo} alt='logo' />
    </div>
  )
}
