import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Input from './components/Input';
import TaskDisplay from './components/TaskDisplay';

function App() {
  const [todos, setTodos] = useState([]);

  
  return (
    <div className="App">
     <Input todos={todos} setTodos={setTodos} />
     <TaskDisplay todos={todos} setTodos={setTodos} />
      
    </div>
  );
}

export default App;
