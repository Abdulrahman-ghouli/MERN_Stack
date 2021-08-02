import React , {useState, useEffect} from 'react'
import axios from 'axios';

const Planet = (props) => {

const [data, setData] = useState({});
const {id} = props;


useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}/`)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
}, [id])


    return (
        <div>
            <h2>Climate : {data["climate"]}  </h2>
            <h2>Terrain : {data["terrain"]} </h2>
            <h2>Surface Water : {data["surface_water"]} </h2>  
            <h2>Population :  {data["population"]} </h2>  
        </div>
    )
}

export default Planet
