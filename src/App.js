import { BrowserRouter } from 'react-router-dom';
import Routes from './routes-nav/Routes';
import './App.css';
import Nav from './routes-nav/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
