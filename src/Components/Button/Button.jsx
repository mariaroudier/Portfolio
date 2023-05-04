import React, { useState } from 'react';
import { NavLink } from "react-router-dom";


function Button({hash,text}) {
      return (
            <div>
                  <NavLink to={hash}>{text}</NavLink>
            </div>
      )
}

export default Button;