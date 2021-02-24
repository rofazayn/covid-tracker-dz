import './app.scss';
import MapCanvas from './components/MapCanvas';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className='App'>
      <DataProvider>
        <MapCanvas />
      </DataProvider>
    </div>
  );
}

export default App;
