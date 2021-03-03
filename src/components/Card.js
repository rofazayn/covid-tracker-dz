import React from 'react';
import { ReactComponent as InfoIconSvg } from '../assets/svg/info.svg';

const Card = ({ title }) => {
  return (
    <div className='card'>
      <div className='card__header'>
        <div className='card__title'>{title}</div>
        <div className='card__icon'>
          <InfoIconSvg />
        </div>
      </div>
    </div>
  );
};

export default Card;
