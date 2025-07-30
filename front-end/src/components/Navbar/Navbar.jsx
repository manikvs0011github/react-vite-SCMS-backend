import React, { useState } from 'react'
import "./Navbar.css"
import emblem_img from '.././../assets/image.png'
import { Link } from "react-router-dom"; 

function Navbar() {
  return (
    <nav className='sectionNavbar'>
      <div className='startSection'>
        <img className='emblemImage' src={emblem_img}/>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"end"}}>
          <h1>Commission of Student Federation of India</h1>
        </div>
      </div>
      <div className='midSection'>
        <div className='midSection-part'>
          <Link to="/">Header</Link>
          <Link to="/body">Body</Link>
          <Link to="/footer">Footer</Link>
        </div>
      </div>
      <Link to='/SignIn'>
        <button  type='button' className='endSection'>Sign Up</button>
      </Link>
    </nav>
  )
}

export default Navbar
