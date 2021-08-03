import React, { useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const ProductsList = (props) => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return (
        <div>
            {props.products.map((product, idx)=>{
                return <><Link to = {"/products/"+product._id}><p key={idx}>{product.title}</p></Link> 
                <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                </>
                
            })}
            
        </div>
    )
}
export default ProductsList

