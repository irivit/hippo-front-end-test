import React from 'react';
import './ImageGrid.scss';
import grid1 from '../../images/grid1.png';
import grid2 from '../../images/grid2.png';
import grid3 from '../../images/grid3.png';
import grid4 from '../../images/grid4.png';
import grid5 from '../../images/grid5.png';
import grid6 from '../../images/grid6.png';
import isCompletelyInViewport from '../../util/functions/isCompletelyInViewport';

function ImageGrid() {
  document.addEventListener(
    'scroll',
    function () {
      var element: any = document.querySelector('.imgSection-header');
      const res: any = isCompletelyInViewport(element);
      if (res) {
        if (element.style.opacity !== '1') element.style.opacity = '1';
        if (element.style.transform !== 'translateX(0)')
          element.style.transform = 'translateX(0)';
      } else {
        if (element.style.opacity !== '0') element.style.opacity = '0';
        if (element.style.transform !== 'translateX(-50px)')
          element.style.transform = 'translateX(-50px)';
      }
    },
    {
      passive: true
    }
  );

  return (
    <>
      <h1 className="section-headlines page-content-paddingLeft imgSection-header">
        See (and Hear) the Hippo Difference for Yourself
      </h1>
      <div className="image-grid">
        <img className="image-grid__image" alt="product 1" src={grid1} />
        <img className="image-grid__image" alt="product 2" src={grid2} />
        <img className="image-grid__image" alt="product 3" src={grid3} />
        <img className="image-grid__image" alt="product 4" src={grid4} />
        <img className="image-grid__image" alt="product 5" src={grid5} />
        <img className="image-grid__image" alt="product 6" src={grid6} />
      </div>
    </>
  );
}

export default ImageGrid;
