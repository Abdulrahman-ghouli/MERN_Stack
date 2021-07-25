import React,{useState} from 'react'

const Api = () => {
    const [pokee,setPokee] = useState([]);
    const poke = () =>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807' )
            .then(response => response.json())
            .then(response => setPokee(response.results))
    };
    
    return (
   <>
       <button onClick = {()=> poke() }>fetch pokemon</button>
   <div>
            {pokee.map((pokee,x)  => {
                return (<div key = {x} >{pokee.name}</div>)
            })}
            
        </div>
</>
        )
}

export default Api
