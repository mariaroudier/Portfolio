import React, { useState } from 'react';


function Button({hash,text}) {
      return (
            <div className='btn'>
                  <a href={hash}>{text}</a>
            </div>
      )
}

export default Button;