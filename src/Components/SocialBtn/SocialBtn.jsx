import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

function SocialBtn({ img, alt, url}){
      return (
            <div class="home-hero__social">
                  <NavLink to={url} class="home-hero_social-icon-link" rel="noreferrer" target="_blank">
                        <img src={img} alt={alt} className="home-hero_social-icon"/>
                  </NavLink>
            </div>
      )
}

export default SocialBtn;