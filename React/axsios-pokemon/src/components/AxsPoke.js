import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxsPoke = (props) => {
    const [pokemon,setPokemon]=useState([]);
    const  pokedisplay=() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response=>{setPokemon(response.data.results)})
    }
    return (
        <div>
             <button  onClick={pokedisplay}> Fetech Pokemon</button>
            <ul>
            {pokemon.length > 0 && pokemon.map(
                (pokemon,index)=>{
                    return (<li key={index}>{pokemon.name}</li>)
                }
            )}
            </ul>
            
        </div>
    )
}

export default AxsPoke
