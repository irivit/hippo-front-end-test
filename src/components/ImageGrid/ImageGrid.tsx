import React from 'react';
import './ImageGrid.scss';

import grid1 from '../../images/grid1.png';
import grid2 from '../../images/grid2.png';
import grid3 from '../../images/grid3.png';
import grid4 from '../../images/grid4.png';
import grid5 from '../../images/grid5.png';
import grid6 from '../../images/grid6.png';

function ImageGrid() {
  return (
    <div className="image-grid">
      <img className="image-grid__image" alt="product 1" src={grid1} />
      <img className="image-grid__image" alt="product 2" src={grid2} />
      <img className="image-grid__image" alt="product 3" src={grid3} />
      <img className="image-grid__image" alt="product 4" src={grid4} />
      <img className="image-grid__image" alt="product 5" src={grid5} />
      <img className="image-grid__image" alt="product 6" src={grid6} />
    </div>
  );
}

export default ImageGrid;
