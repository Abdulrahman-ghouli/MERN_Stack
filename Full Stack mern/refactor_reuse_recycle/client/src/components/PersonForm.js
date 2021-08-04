import React, { useState } from 'react'
import axios from 'axios';
const PersonForm = (props) => {
    //keep track of what is being typed via useState hook
    const { initialTitle, initialPrice,initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        onSubmitProp({title, price, description});
        //make a post request to create a new person
        // axios.post('http://localhost:8000/api/products', {
        //     title,
        //     price,
        //     description

        // })
        //     .then(res=>console.log(res))
        //     .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label> Title </label><br/>
                <input 
                type="text"
                name = "title" value={title}
                onChange={(e) => { setTitle(e.target.value) }}/>
                
            </p>
            <p>
                <label>Price </label><br/>
                <input
                 type="number" 
                 onChange={(e) => { setPrice(e.target.value) }}
                 name = "price"
                 value={price}/>
            </p>
            <p>
                <label> Description </label><br/>
                <input 
                type="text" 
                onChange={(e) => { setDescription(e.target.value) }}
                name = "description"value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default PersonForm;