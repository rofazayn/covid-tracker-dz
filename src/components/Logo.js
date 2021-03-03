import React from 'react';
import { ReactComponent as LogoSvg } from '../assets/svg/logo.svg';

const Logo = () => {
  return (
    <div className='logo'>
      <div className='logo__inner'>
        <LogoSvg className='logo__svg' />
      </div>
    </div>
  );
};

export default Logo;
