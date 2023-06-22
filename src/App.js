import { BrowserRouter } from 'react-router-dom';
import Routes from './routes-nav/Routes';
import './App.css';
import Nav from './routes-nav/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <main>
        <Routes />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
