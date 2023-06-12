import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from '../../assets/img/logo.png'

function Header(){
      return (
      <div className='header'>
            <div className='header_logo-box'>
                  <img className='logo' src={logo} alt='logo'/>
                  <span>MARIA ROUDIER</span>
            </div>
            <nav className='header_links'>
                  <li><Link className='header_link' to="about"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={800}>
                        ABOUT
                  </Link></li>
                  <li><Link className='header_link' to="projects"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}>
                        PROJECTS
                  </Link></li>
                  <li><Link className='header_link' to="contact"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={800}>
                        CONTACT
                  </Link></li>
            </nav>
            <div className='header_mob-nav'>
                  <nav className='header_mob-nav-links'>
                  <li><Link className='header_link' to="about"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}>
                        ABOUT
                  </Link></li>
                  <li><Link className='header_link' to="projects"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}>
                        PROJECTS
                  </Link></li>
                  <li><Link className='header_link' to="contact"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}>
                        CONTACT
                  </Link></li>
                  </nav>
            </div>
      </div>
      )
}

export default Header;