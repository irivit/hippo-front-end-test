import React from 'react';

//Material UI
import Button from '@material-ui/core/Button';

import './Button.scss';

export default function ContainedButtons() {
  return (
    <Button
      variant="contained"
      className="page-content-ourProductsButton"
      size="large"
      href="https://www.hippoed.com/"
    >
      Explore our products
    </Button>
  );
}
