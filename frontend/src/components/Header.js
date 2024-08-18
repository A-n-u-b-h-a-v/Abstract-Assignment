// src/components/Header.js
import React from 'react';
import './Header.css'

function Header() {
  return (
    <header className='header'>
      <nav className='navbar'>
        <div className='section1'>
        <img width={"30px"} className='logo' src="../images/Screenshot 2024-08-17 200546.png" alt="Abstract Logo"/>
        <h3 style={{color:'#ffffff',fontWeight:'400'}}>Abstract | Help Center</h3>
        </div>
        <button type='button' className='requestButton'>Submit a request</button>
      </nav>
    </header>
  );
}

export default Header;
