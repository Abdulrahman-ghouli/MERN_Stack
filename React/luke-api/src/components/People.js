
import React , {useState, useEffect} from 'react'
import axios from 'axios';



    const People = (props) => {

        const [data, setData] = useState({});
        const {id} = props;
        
        
        useEffect(() => {
            axios.get(`https://swapi.dev/api/people/${id}/`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
        }, [id])
        
        
    return (
        <div>
            <h2>Height :{data["height"]} cm </h2>
            <h2>Mass :{data["mass"]} kg </h2>
            <h2>Hair Color :{data["hair_color"]}</h2>
            <h2>Skin Color :{data["skin_color"]}</h2>
        </div>
    )
}

export default People
