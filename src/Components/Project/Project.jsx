import React, { useState } from 'react';
import Lightbox from '../Lightbox/Lightbox'


function Project({ title, description,image, images, tools, url }){

      const [ lightBox , setLightbox] = React.useState(false)
      const closeModal = (lightBox) => {
            setLightbox(false)
            return lightBox
      }
      console.log(lightBox)
      return (
            <>
                  <div className='project'>
                        <div className='img-project_box'>
                              <img className='img-project' src={image}></img>
                        </div>
                        <div className='project_text'>
                              <h3 className='heading-third'>{title}</h3>
                              <span className='sub'>{description}</span>
                              <div className='btn' onClick={() => setLightbox(true)}>
                                    <a className='link'>DETAILS</a>
                              </div>
                              <div className='btn'>
                                    <a className='link' href={url}>PROJECT LINK</a>
                              </div>
                        </div>
                  </div>
                  { lightBox && (
                        <Lightbox lightbox={lightBox} closeModal={closeModal} images={images} title={title} tools={tools}/>
                  )}
            </>
      )
}

export default Project;