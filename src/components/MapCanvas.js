import { useEffect, useState } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';
import axios from 'axios';

const MapCanvas = () => {
  const [covData, setCovData] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.corona-dz.live/province/latest')
      .then((d) => {
        let fetchedData = d.data;
        fetchedData[24].latitude = 36.357;
        fetchedData[24].longitude = 6.639;
        return fetchedData;
      })
      .then((fetchedData) => {
        setCovData(fetchedData);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (covData !== null) {
      setSelectedProvince(covData[4]);
    }
  }, [covData]);

  const [viewport, setViewport] = useState({
    latitude: 28.143566700425612,
    longitude: 3.661734466259734,
    zoom: 4.6,
    width: '100vw',
    height: '100vh',
  });
  return (
    <ReactMapGl
      {...viewport}
      mapStyle='mapbox://styles/rofazayn/ckldp21y54b2i17nuq4el5er9'
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {covData !== null && selectedProvince !== null ? (
        covData.map((province) => (
          <Marker
            className='marker'
            key={province.provinceId}
            longitude={province.longitude}
            latitude={province.latitude}
          >
            <button
              className={`marker__button 
              ${
                province.provinceId === selectedProvince.provinceId &&
                '--selected'
              }`}
              style={{
                width: `${
                  (province.data[0].confirmed / 619 + 3) * viewport.zoom
                }px`,
                height: `${
                  (province.data[0].confirmed / 619 + 3) * viewport.zoom
                }px`,
              }}
              onClick={(e) => {
                e.preventDefault();
                return setSelectedProvince(province);
              }}
            >
              <div className='marker__inner'></div>
            </button>
          </Marker>
        ))
      ) : (
        <p>Fetching data...</p>
      )}
      {/* {selectedProvince && (
        <p style={{ color: 'white' }}>
          {JSON.stringify(selectedProvince, null, 2)}
        </p>
      )} */}
    </ReactMapGl>
  );
};

export default MapCanvas;
