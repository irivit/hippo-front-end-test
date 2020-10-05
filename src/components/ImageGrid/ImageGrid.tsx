import React from 'react';

import Grid from '@material-ui/core/Grid';

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
      <Grid container spacing={0}>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <img className="image-grid__image" alt="product 1" src={grid1} />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <img className="image-grid__image" alt="product 2" src={grid2} />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <img className="image-grid__image" alt="product 3" src={grid3} />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <img className="image-grid__image" alt="product 1" src={grid4} />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <img className="image-grid__image" alt="product 2" src={grid5} />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <img className="image-grid__image" alt="product 3" src={grid6} />
        </Grid>
      </Grid>
    </div>
  );
}

export default ImageGrid;
