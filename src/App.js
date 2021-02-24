import './app.scss';
import Logo from './components/Logo';
import MapCanvas from './components/MapCanvas';
import Snackbar from './components/Snackbar';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className='App'>
      <Logo />
      <Snackbar>
        The app is showing real and live covid data from Algeria.
      </Snackbar>
      <DataProvider>
        <MapCanvas />
      </DataProvider>
    </div>
  );
}

export default App;
