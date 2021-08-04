import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import ProductsList from '../components/ProductsList';




const Main  = () => {
    const [products, setProducts] = useState([]);
    

  const removeFromDom = productId => {
    setProducts(products.filter(product => product._id !== productId));
}
const createProduct = product => {
    axios.post('http://localhost:8000/api/products', product)
        .then(res=>{
            setProducts([...products, res.data]);
        },)
}
    return (
        <div>
        <PersonForm  onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
        <hr/>
        {products&& <ProductsList products={products} removeFromDom={removeFromDom}/>}
     </div>

    )
}

export default Main

