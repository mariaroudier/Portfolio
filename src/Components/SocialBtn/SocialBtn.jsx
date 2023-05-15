import React, { useState } from 'react';

function SocialBtn({ img, alt, url}){
      return (
            <div className="home-hero__social">
                  <a href={url} className="home-hero_social-icon-link" rel="noreferrer" target="_blank">
                        <img src={img} className="home-hero_social-icon"/>
                  </a>
            </div>
      )
}

export default SocialBtn;