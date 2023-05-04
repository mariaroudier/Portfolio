import React, { useState } from 'react';
import { NavLink } from "react-router-dom";


function Header(){
      return (
      <div>
            <NavLink to="/#about">About</NavLink>
            <NavLink to="/#projects">Projects</NavLink>
            <NavLink to="/#contact">Contact</NavLink>
      </div>
      )
}

export default Header;