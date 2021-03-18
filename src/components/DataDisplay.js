import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { formatNumber } from '../utils/numbers';
import Card from './Card';

const DataDisplay = () => {
  const { nationalCovData, covData, selectedProvince } = useContext(
    DataContext
  );

  if (!nationalCovData && !covData && !selectedProvince) {
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
                <div className='typography__regular --badge'>
                  +{nationalCovData.newConfirmed}
                </div>
              </div>
            </div>
            <div className='national__cases'>
              <div className='info'>
                <div className='dot --recovered'></div>
                <div className='typography__regular'>Recovered cases</div>
              </div>
              <div className='typography__regular value'>
                {formatNumber(nationalCovData.recovered)}
                <div className='typography__regular --badge'>
                  +{nationalCovData.newRecovered}
                </div>
              </div>
            </div>
            <div className='national__cases'>
              <div className='info'>
                <div className='dot --fatal'></div>
                <div className='typography__regular'>Fatal cases</div>
              </div>
              <div className='typography__regular value'>
                {formatNumber(nationalCovData.deaths)}
                <div className='typography__regular --badge'>
                  +{nationalCovData.newDeaths}
                </div>
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
      {selectedProvince ? (
        <Card
          title='Selected Wilaya'
          info='Select a Wilaya from the map to see the latest coronavius data there.'
        >
          <div className='card__block'>
            <div className='typography__huge'>{selectedProvince.name}</div>
          </div>
          <div className='card__block --v-centered'>
            <div className='typography__large --v-center'>
              {formatNumber(selectedProvince.data[0].confirmed)}
            </div>
            <div className='typography__regular --badge'>
              +{formatNumber(selectedProvince.data[0].newConfirmed)}
            </div>
          </div>
          <div className='card__block'>
            <div className='national'>
              <div className='national__cases'>
                <div className='info'>
                  <div className='dot --fatal'></div>
                  <div className='typography__regular'>Fatal cases</div>
                </div>
                <div className='typography__regular value'>
                  {formatNumber(selectedProvince.data[0].deaths)}
                  <div className='typography__regular --badge'>
                    +{selectedProvince.data[0].newDeaths}
                  </div>
                </div>
              </div>
              <div className='national__illustration --region'>
                <div className='wrapper'>
                  <div
                    className='active'
                    style={{
                      width: `${
                        ((selectedProvince.data[0].confirmed -
                          selectedProvince.data[0].deaths) *
                          100) /
                        selectedProvince.data[0].confirmed
                      }%`,
                    }}
                  ></div>
                  <div
                    className='fatal'
                    style={{
                      width: `${
                        (selectedProvince.data[0].deaths * 100) /
                        selectedProvince.data[0].confirmed
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ) : (
        <Card
          title='No Wilaya selected'
          info='Please select a Wilaya from the map to see the latest coronavius data there.'
        ></Card>
      )}
    </div>
  );
};

export default DataDisplay;
