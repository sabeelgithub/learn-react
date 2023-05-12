import React from "react";
import './Heder.css';

function Header({onMenuSelect}) {

    return (
        <div className='app-header'>
        <span className='header-title'>learn react</span>
        <span onClick={()=>{
          onMenuSelect('home')
        }}>Home</span>
        <span onClick={()=>{
          onMenuSelect('usage')
        }}>Usage</span>
        <span onClick={()=>{
          onMenuSelect('settings')
        }}>Settings</span>
        <span onClick={()=>{
          onMenuSelect('logout')
        }}>Logout</span>
        <span onClick={()=>{
          onMenuSelect('counter')
        }}>Counter</span>
        <span onClick={()=>{
          onMenuSelect('test')
        }}>Test</span>
      
      </div>
 
    )
}
export default Header