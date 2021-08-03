import React, { useState } from 'react';
import { Link } from '@reach/router';


const ProductsList = (props) => {
    return (
        <div>
            {props.products.map((product, idx)=>{
                return <Link to = {"/products/"+product._id}><p key={idx}>{product.title}</p></Link> 
            })}
        </div>
    )
}
export default ProductsList