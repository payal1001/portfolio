import React from 'react'
import './navbar.css'
import logo from '../assets/logo-2.png';
import{ Link } from 'react-scroll';
import contactImg from '../assets/contact.png';
import menu from '../assets/menu.png'


const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt= "logo" className="logo" style={{widht:"30%", height:'30%'}}/>
      <div className="desktopMenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>

        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} 
className="desktopMenuListItem">About</Link>

        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem">Portfolio</Link>

        <Link activeClass="active" to="Projetcs" spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem">Projects</Link>


      </div> 
      <button className= "desktopMenuBtn" onClick={() => {      document.getElementById('contact').scrollIntoView({behaviour: 'smooth'});
      }} >
        <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me  
      </button>

      <img src={menu} alt= "Menu" className="mobMenu" style={{widht:"30%", height:'30%'}}/>
      <div className="navMenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>

        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} 
className="desktopMenuListItem">About</Link>

        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem">Portfolio</Link>

        <Link activeClass="active" to="Projetcs" spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem">Projects</Link>

        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem">Contact</Link>

      </div>


    </nav> 
  ) 
}

export default Navbar;
