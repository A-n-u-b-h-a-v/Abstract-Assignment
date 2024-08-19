// src/components/Header.js
import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <nav className='navbar'>
        <div className='section1'>
        <img width={"30px"} className='logo' src="../images/Screenshot 2024-08-17 200546.png" alt="Abstract Logo"/>
        <NavLink to='/' style={{color:'#ffffff',fontWeight:'400'}}>Abstract | Help Center</NavLink>
        </div>
        <NavLink to='/submit_req' type='button' className='requestButton'>Submit a request</NavLink>
      </nav>
    </header>
  );
}

export default Header;
