import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { formatNumber } from '../utils/numbers';
import Card from './Card';

const DataDisplay = () => {
  const { nationalCovData, covData } = useContext(DataContext);

  if (!nationalCovData && !covData) {
    return <div>Loading data...</div>;
  }

  return (
    <div className='data'>
      <Card title='Algeria'>
        <div className='card__block --v-centered'>
          <div className='typography__large --v-center'>
            {formatNumber(nationalCovData.confirmed)}
          </div>
          <div className='typography__regular --badge'>
            +{formatNumber(nationalCovData.newConfirmed)}
          </div>
        </div>
        <div className='card__block'>
          <div className='national'>
            <div className='national__cases'>
              <div className='info'>
                <div className='dot --active'></div>
                <div className='typography__regular'>Active cases</div>
              </div>
              <div className='typography__regular value'>
                {formatNumber(nationalCovData.treatment)}
              </div>
            </div>
            <div className='national__cases'>
              <div className='info'>
                <div className='dot --recovered'></div>
                <div className='typography__regular'>Recovered cases</div>
              </div>
              <div className='typography__regular value'>
                {formatNumber(nationalCovData.recovered)}
              </div>
            </div>
            <div className='national__cases'>
              <div className='info'>
                <div className='dot --fatal'></div>
                <div className='typography__regular'>Fatal cases</div>
              </div>
              <div className='typography__regular value'>
                {formatNumber(nationalCovData.deaths)}
              </div>
            </div>
            <div className='national__illustration'>
              <div className='wrapper'>
                <div
                  className='active'
                  style={{
                    width: `${
                      (nationalCovData.treatment * 100) /
                      nationalCovData.confirmed
                    }%`,
                  }}
                ></div>
                <div
                  className='recovered'
                  style={{
                    width: `${
                      (nationalCovData.recovered * 100) /
                      nationalCovData.confirmed
                    }%`,
                  }}
                ></div>
                <div
                  className='fatal'
                  style={{
                    width: `${
                      (nationalCovData.deaths * 100) / nationalCovData.confirmed
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DataDisplay;
