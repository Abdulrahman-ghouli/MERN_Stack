import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
// import MyComponent from './components/MyComponent';
import TapsShow from './components/TapsShow';
import TapsDisplay from './components/TapsDisplay';

function App() {
  const [data,setData] = useState("");
  //Value Passed from the form --> data = value+ " was taped"

  const newContent = (content) => {
    setData(content);
  }

  return (
    <div className="App">
      <header className="App-header">

        {/* All in one Component */}
        {/* <MyComponent/>  */}

        {/*Lifting Components*/}
        <TapsShow data={newContent}/>
        <TapsDisplay content={data}/>
        
      </header>
    </div>
  );
}

export default App;
