import React, { useState } from 'react';
import Slideshow from '../Slideshow/Slideshow'
import Skill from '../Skill/Skill'

function Lightbox({ lightbox, images, closeModal, title, tools }) {
      return (
            <div className={lightbox === true ? 'modal-wrapper-show' : 'modal-wrapper'} >
                  <div className='lightbox'>
                        <div className='cross' onClick={() => closeModal()}>
                              <b>X</b>
                        </div>
                        <Slideshow images={images} title={title} />
                        <div className='technologies'>
                              {tools.map(tool => {
                                    return (
                                    <Skill text={tool} />
                                    )
                              })}
                              
                        </div>
                  </div>
            </div>
      )
}

export default Lightbox;