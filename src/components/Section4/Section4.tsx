import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Section4.scss';
import home4 from '../../images/Homepage-Images/home4.png';
import ifInViewportChangeTranslAndOpac from '../../util/functions/ifInViewportChangeTranslAndOpac';

function Header2AndText(cN?: string) {
  return (
    <div className={`${cN ? cN : ''} floatEffectBase`}>
      <h1 className="section-headers2">
        However and Whenever Your Need It
        <hr />
      </h1>
      <p>
        Get education that seamlessly fits into your busy life with convenient,
        tech-forward podcasts, video lectures, and articles, all on the go from
        your phone or tablet.
      </p>
    </div>
  );
}

function Section4() {
  document.addEventListener(
    'scroll',
    function () {
      ifInViewportChangeTranslAndOpac('.section4_mainContainer');
      ifInViewportChangeTranslAndOpac('.section4_textBlock-1');
      ifInViewportChangeTranslAndOpac('.section4_textBlock-2');
    },
    {
      passive: true
    }
  );

  return (
    <Grid
      container
      spacing={0}
      className="section4_mainContainer floatEffectBase"
    >
      <Grid
        item
        xs={false}
        sm={5}
        className="page-content-paddingLeft section4_grind1  nonShowOnXs"
      >
        {Header2AndText('section4_textBlock-1')}
      </Grid>

      <Grid item xs={false} sm={2} />

      <Grid item xs={12} sm={5}>
        <img className="section-images" alt="home4" src={home4} />
        {Header2AndText('showOnXs section4_textBlock-2')}
      </Grid>
    </Grid>
  );
}

export default Section4;
