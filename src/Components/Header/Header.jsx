import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from '../../assets/img/logo.png'
import hamburger from '../../assets/icons/hamburger.png'
import cross from '../../assets/icons/cross.png'

function Header(){

      const [mobNav, setMobNav] = React.useState('')
      const openNav = (mobNav) => {
            
            setMobNav(true)
            return mobNav
      }

      const closeNav = (mobNav) => {
            setMobNav(false)
            return mobNav
      }


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
            <div className='header-mob'>
                  <img src={hamburger} className={mobNav == true ? 'icon-hidden' : 'header-mob-icon'} onClick={() => openNav()} alt='menu'/>
                  <img src={cross} className={mobNav == false ? 'icon-hidden' : 'header-mob-icon'} onClick={() => closeNav()} alt='close'/>
            </div>
            {mobNav && (
                  <div className='header_mob-nav' >
                        <nav className='header_mob-nav-box'>
                              <li className='header_mob-nav-list'><Link className='header_link' to="about" onClick={() => closeNav()}
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}>
                                    ABOUT
                              </Link></li>
                              <li className='header_mob-nav-list'><Link className='header_link' to="projects" onClick={() => closeNav()}
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}>
                                    PROJECTS
                              </Link></li>
                              <li className='header_mob-nav-list'><Link className='header_link' to="contact" onClick={() => closeNav()}
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}>
                                    CONTACT
                              </Link></li>
                        </nav>
                  </div>)}
      </div>
      )
}

export default Header;