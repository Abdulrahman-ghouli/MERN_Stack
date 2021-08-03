import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import ProductsList from '../components/ProductsList';




const Main  = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
      axios.get('http://localhost:8000/api/products')
          .then(res=>{setProducts(res.data);
              setLoaded(true);
             
          }).catch(res => console.log(res.json.status(400)) );
  },[])
    return (
        <div>
        <PersonForm/>
        <hr/>
        {loaded && <ProductsList products={products}/>}
     </div>

    )
}

export default Main

