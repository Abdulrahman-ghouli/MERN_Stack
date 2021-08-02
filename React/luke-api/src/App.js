import React, { useState } from 'react'
import './App.css';
import Search from './components/Search';
import { Router , navigate } from '@reach/router';
import People from './components/People';
import Planet from './components/Planet';




function App() {

  const [id, setId] = useState("");
  const [select, setSelect] = useState("")
  const [data, setData] = useState({})

  const setValueId = (id) => {
    setId(id);
  }

  const setValueSelect = (select) => {
    setSelect(select);
  }

  const submitO = (e) => {
    e.preventDefault();

      
    if (select === "planets") {
      navigate(`/planets/${id}`)
    } else if (select === "people") {
      navigate(`/people/${id}`)
    }

    

  }





  return (
    <>
      <div className="App">
        <Search submitO={submitO} setValueId={setValueId} setValueSelect={setValueSelect} />
      </div>
      <Router>
        <People path={'/people/:id'} />
        <Planet path={'/planets/:id'} />
      </Router>
    </>



  );
}

export default App;
