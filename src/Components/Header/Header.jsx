import React, { useState } from 'react';


function Header(){
      return (
      <div className='header'>
            <div className='header_logo-box'>
                  <img />
                  <span>MARIA ROUDIER</span>
            </div>
            <div className='header_links'>
                  <a className='header_link' href='#about'>ABOUT</a>
                  <a className='header_link' href="#projects">PROJECTS</a>
                  <a className='header_link' href='#contact'>CONTACT</a>
            </div>
            <div className='header_mob-nav'>
                  <div className='header_mob-nav-links'>
                        <a className='header_link' href='#about'>ABOUT</a>
                        <a className='header_link' href="#projects">PROJECTS</a>
                        <a className='header_link' href='#contact'>CONTACT</a>
                  </div>
            </div>
      </div>
      )
}

export default Header;