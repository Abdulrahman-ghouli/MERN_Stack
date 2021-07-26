import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import Page from './components/Page';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <Router>
     <Home path = "/home"/>
     <Page path = "/:id"/>
     <Page path = "/:id/:textcolor/:backcolor"/>
     </Router>
    </div>
  );
}

export default App;
