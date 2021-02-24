import './app.scss';
import Container from './components/Container';
import Logo from './components/Logo';
import MapCanvas from './components/MapCanvas';
import Snackbar from './components/Snackbar';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className='App'>
      <DataProvider>
        <Container>
          <div className='aside'>
            <Logo />
            <Snackbar>
              The app is showing real and live covid data from Algeria.
            </Snackbar>
          </div>
          <MapCanvas />
        </Container>
      </DataProvider>
    </div>
  );
}

export default App;
