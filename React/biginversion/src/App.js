import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <div>
      <PersonCard firstName = "Doe" lastName  = "jane" age="45" haircolor = "Black"  />
      <PersonCard firstName = "Smith" lastName  = "John" age="88" haircolor = "Brown"  />
      <PersonCard firstName = "Fillmore" lastName  = "Millard" age="50" haircolor = "Brown"  />
      <PersonCard firstName = "Smith" lastName  = "Maria" age="62" haircolor = "Brown"  />

     
    </div>
    </div>
  );
}

export default App;
