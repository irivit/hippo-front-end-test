import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Section2.scss';
import home2 from '../../images/Homepage-Images/home2.png';
import ifInViewportChangeTranslAndOpac from '../../util/functions/ifInViewportChangeTranslAndOpac';

function Header2AndText(cN: string) {
  return (
    <div className={`${cN} floatEffectBase`}>
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
  document.addEventListener(
    'scroll',
    function () {
      ifInViewportChangeTranslAndOpac('.section2_mainContainer');
      ifInViewportChangeTranslAndOpac('.section2-textBlock-1');
      ifInViewportChangeTranslAndOpac('.section2-textBlock-2');
    },
    {
      passive: true
    }
  );

  return (
    <Grid
      container
      spacing={0}
      className="section2_mainContainer floatEffectBase"
    >
      <Grid item xs={12} sm={5} className="page-content-paddingLeft">
        <h1 className="section-headlines">
          Education Designed for People Like You
        </h1>
        {Header2AndText('nonShowOnXs section2-textBlock-1')}
      </Grid>
      <Grid item xs={false} sm={2} />

      <Grid item xs={12} sm={5}>
        <img className="section-images" alt="home2" src={home2} />

        {Header2AndText('showOnXs section2-textBlock-2')}
      </Grid>
    </Grid>
  );
}

export default Section2;
