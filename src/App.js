import './App.css';
import ReactMapGl from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';

function App() {
  const [viewport, setViewport] = useState({
    latitude: 28.143566700425612,
    longitude: 3.661734466259734,
    zoom: 4.6,
    width: '100vw',
    height: '100vh',
  });

  return (
    <div className='App'>
      <ReactMapGl
        {...viewport}
        mapStyle='mapbox://styles/rofazayn/ckldp21y54b2i17nuq4el5er9'
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        marker here
      </ReactMapGl>
    </div>
  );
}

export default App;
