import React from 'react';

import Grid from '@material-ui/core/Grid';


import home2 from '../../images/Homepage-Images/home2.png';

import './Section2.scss';

function Header2AndText(cN: string) {
  return (
    <div className={cN}>
      <h1 className="section-headers2">
        Authentic, Engaging, and Human
        <hr />
      </h1>
      <p>
        We’re obsessed with making education that respects your time, attention
        span, and humanity. Every piece of education we produce is made with
        intention for a consistently rewarding learning experience.
      </p>
    </div>
  );
}

function Section2() {
  return (
    <Grid container spacing={0} className="section2_mainContainer">
      <Grid item xs={12} sm={5} className="page-content-paddingLeft">
        <h1 className="section-headlines">
          Education Designed for People Like You
        </h1>
        {Header2AndText('nonShowOnXs')}
      </Grid>
      <Grid item xs={false} sm={2} />

      <Grid item xs={12} sm={5}>
        <img className="section-images" alt="home2" src={home2} />

        {Header2AndText('showOnXs')}
      </Grid>
    </Grid>
  );
}

export default Section2;
