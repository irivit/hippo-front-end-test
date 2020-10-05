import React from 'react';

//Material UI
import Button from '@material-ui/core/Button';

import './Button.scss';

export default function ContainedButtons() {
  return (
    <div className="header-div-products">
    <Button variant="contained" color="primary" className="header-div-products-button" size="large">
      Explore our products
    </Button>

    </div>
  );
}
