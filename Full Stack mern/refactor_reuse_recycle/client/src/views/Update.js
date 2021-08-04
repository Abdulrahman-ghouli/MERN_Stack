import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { set } from 'mongoose';
import { navigate } from '@reach/router';
import PersonForm from '../components/PersonForm';
const Update  = (props) => {
    const { id } = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])
    const updateProduct = product => {
        
        axios.put('http://localhost:8000/api/products/' + id, product )
          

        
            .then(res => console.log(res));
            navigate('/products');
    }
    return ( 
        <div>
            {loaded && 
            <PersonForm
                onSubmitProp={updateProduct}
                initialTitle={product.title}
                initialPrice={product.price}
                initialDescription={product.description} />
        
            
        }

        </div>
    );
}

export default Update


