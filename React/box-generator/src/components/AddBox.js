import React,{useState} from 'react';
const AddBox=(props)=>{
    const[color,setColor]=useState("");
   
    const handelSubmit=(e)=>{
      
        e.preventDefault();
        props.addDiv(color,color);
        setColor("")
        

    }
    
    const addcolor=(e)=>
    {
        setColor(e.target.value);
    }
    return(
        <form onSubmit={handelSubmit}>
            <input type="text" value={color} onChange={addcolor}/>
           
            <input type="submit" value="Add Box Color"/>
        </form>
    );
};
export default AddBox;