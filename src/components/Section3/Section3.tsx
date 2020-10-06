import React from 'react';

import Grid from '@material-ui/core/Grid';


import home3 from '../../images/Homepage-Images/home3.png';
import OurProductsButton from '../Button/Button';

import './Section3.scss';

function Section3() {
  return (
    <Grid container spacing={0} className="section3_mainContainer">
      <Grid item xs={12} sm={5}>
        <img className="section-images" alt="home3" src={home3} />
      </Grid>
      <Grid item xs={false} sm={2} />

      <Grid
        item
        xs={12}
        sm={5}
        className="page-content-paddingRight section3_textBlock"
      >
        <h1 className="section-headers2">
          Unrivaled Educational Excellence
          <hr />
        </h1>
        <p>
          Our physician-led education is carefully designed and presented by
          some of the most qualified and passionate faculty in the world. It
          makes the most of your investment, energy, and intellect and delivers
          a lasting impact far beyond CME credit.
        </p>

        <OurProductsButton />
      </Grid>
    </Grid>
  );
}

export default Section3;
