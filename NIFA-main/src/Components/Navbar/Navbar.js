import React from 'react'
import './Navbar.css'
import logo from '../images/nifa-new-logo.png'

const Navbar = () => {
  return (
    <div>
      <div className="navbarHeading">
        <h2>Welcome to the National Institute of Fine Arts</h2>
        <a href="tel:9555112200"><i class="fa-solid fa-phone"></i>9555112200</a>
        <a href="tel:9810130552"><i class="fa-solid fa-phone"></i>9810130552</a>
        <a href="mailto:admission@nifafinearts.com"><i class="fa-solid fa-envelope"></i>admission@nifafinearts.com</a>
        <div className="icons">
           <a href="http://"><i class="fab fa-facebook-f"></i></a>
           <a href="http://"><i class="fab fa-twitter"></i></a>
           <a href="http://"><i class="fab fa-instagram"></i></a>
           <a href="http://"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <nav className="navbar">
        <img src={logo} alt="logo"/>
        <ul className='navbar-ul'>
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Courses</a></li>
            <li><a href="/">Activities</a></li>
            <li><a href="/">Admission</a></li>
            <li><a href="/">Art Gallery</a></li>
            <li><a href="/">Franchise</a></li>
            <li><a href="/">Online Classes</a></li>
            <li><a href="/">Videos</a></li>
            <li><a href="/">Pay Fee</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
        <i class="fa-solid fa-bars"></i>
      </nav>
    </div>
  )
}

export default Navbar;
