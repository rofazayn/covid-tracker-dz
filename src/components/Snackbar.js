import React from 'react';
import { ReactComponent as SnackbarSvg } from '../assets/svg/snackbar.svg';

const Snackbar = ({ children }) => {
  return (
    <div className='snackbar'>
      <div className='snackbar__inner'>
        <div className='snackbar__icon'>
          <SnackbarSvg className='snackbar__svg' />
        </div>
        <div className='snackbar__message'>
          <span>{children}</span>
        </div>
      </div>
    </div>
  );
};

export default Snackbar;
