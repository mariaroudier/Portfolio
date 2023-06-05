import React, { useState } from 'react';
import chevronLeft from '../../assets/icons/chevron-left.png'
import chevronRight from '../../assets/icons/chevron-right.png'

function Slideshow({images, title}) {
      const [index, setIndex] = useState(0);
      const sumImg = images.length;

      return (

            <div className="slideshow">
                  { sumImg > 1 ? (
                        <>
                              <img className="chevron-left" src={chevronLeft} alt="Icon chevron right" aria-label="Previous image" tabIndex={0} onKeyPress={() => setIndex(index - 1)} onClick={() => setIndex(index - 1)} />
                              <img className="chevron-right" src={chevronRight} alt="Icon chevron left" aria-label="Next image" tabIndex={0} onKeyPress={() => setIndex(index + 1)} onClick={() => setIndex(index + 1)} />
                        </>
                  ) : '' }
                  {index < sumImg && index >= 0 ? (
                        <>
                              <img className="slideshow-img" src={images[index]} alt={title} />
                              { sumImg > 1 ? <span className="slideshow-text" key={sumImg}>{`${index + 1}/${sumImg}`}</span> : ''}
                        </>
                  ) : setIndex(index - sumImg) && (
                        <>
                              <img className="slideshow-img" src={images[index]} alt={title} />
                              <span className="slideshow-text" key={sumImg}>{`${index + 1}/${sumImg}`}</span>
                        </>
                  )}
                  {index < 0 ? setIndex(index + sumImg) && (
                        <>
                              <img className="slideshow-img" src={images[index + sumImg]} alt={title} />
                              <span className="slideshow-text" key={sumImg}>{`${index + sumImg + 1}/${sumImg}`}</span>
                        </>
                  ) : '' }
            </div>
      )
}

export default Slideshow;