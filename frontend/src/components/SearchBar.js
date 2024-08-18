import React from 'react';
import './SearchBar.css'

function SearchBar() {
  return (
    <div className='search'>
        <h1 className='heading'>How can we help? </h1>
        <div className='searchbar'><input className='input1' type="text" placeholder='Search'></input><button type='submit' className='btn1'><i className="fa-solid fa-arrow-right" style={{color:'#00000'}}></i></button></div>
        
    </div>
  );
}

export default SearchBar;
