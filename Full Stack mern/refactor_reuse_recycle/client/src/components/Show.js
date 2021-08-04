import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

 const Show = (props) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data))
    }, [])
    // const removeFromDom = productId => {
    //     setProduct(product.filter(product => product._id !== productId))
    // }
    
   
    return (
        <div>
              <h1> Title : {product.title}</h1> 

            <h3> Price : {product.price}</h3>

          <h3>  Description :{product.description}</h3> 
          <Link to={"/products/" + product._id + "/edit"}>
            Edit
        </Link>
        <DeleteButton productId={product._id} 
        // successCallback={()=>removeFromDom(product._id)}
        />
        
        </div>
    )
}
export default Show