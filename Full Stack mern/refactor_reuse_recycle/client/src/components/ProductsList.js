import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';


const ProductsList = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data));
    }, [products])
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }
    return (
        <div>
            {products.map((product, idx) => {
                return (
                    <p key={idx}>
                        <Link to={"/products/" + product._id}>
                            {product.title}, {product.price},{product.descrption}
                        </Link>
                        |
                        <Link to={"/products/" + product._id + "/edit"}>
                            Edit
                        </Link> 
                        |
                       <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                    </p>
                )
            })}
        </div>
    )
}
export default ProductsList


