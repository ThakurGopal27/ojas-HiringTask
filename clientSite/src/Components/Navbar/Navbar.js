import React from 'react'
import logo from '../../../src/assets/logo.png'
import user from '../../../src/assets/user.png'
import arrow from '../../../src/assets/arrow.png'
import menu from '../../../src/assets/menu.png'

import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">
            <img src={logo} alt="logo" height={60} width={60}/>
            <input type="text" id='explore' placeholder='#  Explore' />
        </div>
        <div className="right">
            <div className="user">
            <img src={user} alt="logo" height={30} width={30}/>
            <p>User Sharma</p>
            <img src={arrow} alt="" height={10} width={10} />
            </div>
            <img src={menu} alt=""  height={20} width={20}  />
        </div>
    </div>
  )
}

export default Navbar