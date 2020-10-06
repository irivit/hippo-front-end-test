import React from 'react';

import Grid from '@material-ui/core/Grid';

import home1 from '../../images/Homepage-Images/home1.png';
import OurProductsButton from '../Button/Button';

import './Section1.scss';

function Section1() {
  return (
    <Grid container spacing={0} className="section1_mainContainer">
      <Grid item xs={12} sm={5}>
        <h1 className="section-headlines page-content-paddingLeft">
          Learn. Grow.
          <br /> Thrive.
        </h1>
        <img className="section-images" alt="home1" src={home1} />
      </Grid>
      <Grid item xs={false} sm={1} />

      <Grid item xs={12} sm={6} className="page-content-paddingRight">
        <h1 className="section-headers2">
          At Hippo Education, we believe that medical education should upgrade
          your practice and your life.
          <hr />
        </h1>

        <p>
          This lifelong learning should be exciting, and something we look
          forward to. It should connect us to our fellow clinicians and remind
          us, as a community, why we practice medicine, not just how. We exist
          not only to change your practice, but to change your mind about what
          truly great education can achieve.
        </p>
        <p>
          If you want to swap CME that merely checks the boxes for a community
          of like-minded people learning, growing, and doing their best work
          together—welcome.
        </p>
        <p className="bold"> You’ve found what you’re looking for. </p>

        <OurProductsButton />
      </Grid>
    </Grid>
  );
}

export default Section1;
