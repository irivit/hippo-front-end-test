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
  //   <Grid container spacing={2} className="image-grid">
  //   <Grid item xs={3}>
  //     <a href="https://www.hippoed.com/" className="navbar-brand">
  //       HIPPO <span className="navbar-brand-span">EDUCATION</span>
  //     </a>{' '}
  //     <div className="navbar-menu-mobile">
  //       <IconButton
  //         aria-label="show more"
  //         aria-haspopup="true"
  //         color="inherit"
  //       >
  //         <MenuIcon />
  //       </IconButton>
  //     </div>
  //   </Grid>
  //   <Grid item xs={6}>
  //     <a href="https://www.hippoed.com/" className="navbar-brand-mobile">
  //       HIPPO <span className="navbar-brand-span">EDUCATION</span>
  //     </a>{' '}
  //   </Grid>
  //   <Grid item xs={3}>
  //     <div className="navbar-right">
  //       <ul>
  //         <li className="navbar-products">
  //           <a href="https://www.hippoed.com/" className="nav-products">
  //             Products{' '}
  //             <span className="navbar-hippo-products">From Hippo</span>
  //             <Divider
  //               orientation="vertical"
  //               flexItem
  //               className="something"
  //             />
  //           </a>
  //         </li>
  //         <li>
  //           <Button className="navbar-button_signin">Sign in</Button>
  //         </li>
  //       </ul>
  //     </div>
  //   </Grid>
  // </Grid>


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
