import React,{useState} from 'react'
import  Button from '@material-ui/core/Button';

const MyComponent=()=> {
    const taps = ["tap1","tap2","tap3"]
    const [msg,setMsg]=  useState("");
    const clickhandler = (e,value,i)=>{
        e.preventDefault();
        setMsg(value+ " was tapped");
    }

    
    return (
        <div>
            {
                taps.map((value,i) =>{
                    return <Button variant="contained" color="primary" key = {i} onClick = {(e)=>clickhandler(e,value,i)} >
                        {value}
                        </Button>

                } )
            }
            <p>{msg}</p>
            
        </div>
    )
}

export default MyComponent
