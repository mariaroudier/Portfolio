import React, { useState, useRef, useEffect } from 'react';
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from "three"


function Vanta() {
      const [vantaEffect, setVantaEffect] = useState(null)
      const myRef = useRef(null)
      useEffect(() => {
        if (!vantaEffect) {
          setVantaEffect(NET({
            el: myRef.current,
            THREE:THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 400.00,
            minWidth: 200.0,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xff9800,
            backgroundColor: 0xf6f6f6,
            maxDistance: 15.00,
            spacing: 26.00

          }))
        }
        return () => {
          if (vantaEffect) vantaEffect.destroy()
        }
      }, [vantaEffect])

      return (
            <div ref={myRef} className='vanta'></div>
      )
}

export default Vanta;