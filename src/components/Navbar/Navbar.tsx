import React from 'react';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

//Style
import './NavBar.scss';

export default function ButtonAppBar() {
  return (
    <>
      <div className="hearder-backg" />
      <AppBar className="navbar">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <a href="https://www.hippoed.com/" className="navbar-brand">
              HIPPO <span className="navbar-brand-span">EDUCATION</span>
            </a>{' '}
            <div className="navbar-menu-mobile">
              <IconButton
                aria-label="show more"
                aria-haspopup="true"
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={6}>
            <a href="https://www.hippoed.com/" className="navbar-brand-mobile">
              HIPPO <span className="navbar-brand-span">EDUCATION</span>
            </a>{' '}
          </Grid>
          <Grid item xs={3}>
            <div className="navbar-right">
              <ul>
                <li className="navbar-products">
                  <a href="https://www.hippoed.com/" className="nav-products">
                    Products{' '}
                    <span className="navbar-hippo-products">From Hippo</span>
                    <Divider
                      orientation="vertical"
                      flexItem
                      className="something"
                    />
                  </a>
                </li>
                <li>
                  <Button className="navbar-button_signin">Sign in</Button>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
}
