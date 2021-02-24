import './app.scss';
import Logo from './components/Logo';
import MapCanvas from './components/MapCanvas';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className='App'>
      <Logo />
      <DataProvider>
        <MapCanvas />
      </DataProvider>
    </div>
  );
}

export default App;
