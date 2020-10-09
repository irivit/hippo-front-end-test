import React from 'react';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


//Style
import './NavBar.scss';

export default function ButtonAppBar() {
  return (
    <>
      <div className="hearder-backg" />
      <AppBar className="navbar">
        <div className="navbar-container">
          <div className="navbar-header">
            <a href="https://www.hippoed.com/" className="navbar-brand">
              HIPPO <span className="navbar-brand-span">EDUCATION</span>
            </a>{' '}
          </div>
          <div className="navbar-menu-mobile">
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div className="navbar-header-mobile">
            <a href="https://www.hippoed.com/" className="navbar-brand">
              HIPPO <span className="navbar-brand-span">EDUCATION</span>
            </a>{' '}
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="navbar-education">
              <a href="https://www.hippoed.com/" className="nav-products">
                Products{' '}
                <span className="navbar-hippo-products">From Hippo</span>
              </a>
            </li>
            <li className="navbar-sign-in">
              <a href="https://www.hippoed.com//signin">Sign In</a>
            </li>
          </ul>
        </div>
      </AppBar>
    </>
  );
}
