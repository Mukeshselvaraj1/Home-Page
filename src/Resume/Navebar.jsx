import React from 'react' ;
import {  Outlet, Link } from "react-router-dom";
import "./Resume.css";
function Navebar() {
  return (
    // Navebar section
    <section className='container header mb-md-2'> 
    <div className=' bg-color p-2'>
      <div className='float-md-start justify-content-evenly'>
        <div className='heading-name'><h2 >
          MUKESHKUMAR SELVARAJ</h2>
          <p className='description float-lg-end'>Developer</p>  
          </div>

      </div>
      <nav className='nav nav-pills float-md-end justify-content-evenly'>
        <Link className='nav-link 'to='/featurette'>Home</Link>
        <Link className='nav-link' to='#'>Projects</Link>
        <Link className='nav-link' to='#'>Contact Us</Link>
      </nav>
      <hr /><Outlet/>
    </div>
    </section>
  )
}

export default Navebar