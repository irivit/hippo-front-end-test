import React from 'react';

//Material UI
import Button from '@material-ui/core/Button';

import './Button.scss';

interface Props {
  displayNoneOnXs?: boolean;
}

function ContainedButtons(props: Props)  {
  return (
    <Button
      variant="contained"
      className={`page-content-ourProductsButton ${
        props.displayNoneOnXs ? 'displayNoneOnXs' : ''
      }`}
      size="large"
      href="https://www.hippoed.com/"
    >
      Explore our products
    </Button>
  );
}

export default ContainedButtons;