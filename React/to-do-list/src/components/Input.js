import React, {useState} from 'react';

const Input = (props) => {
    const [newTodo, setNewTodo] = useState("");
    const {todos, setTodos} =props
    const handleSubmit = (e) => {
        e.preventDefault();
        let newobject= {name:newTodo, status : false}
        setTodos([...todos,newobject ])
        console.log(todos)
      }
    
    
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input onChange= {(e) => {
                setNewTodo(e.target.value)

                }} type ="text"  />
                <button>Add </button>
                </form>
                
      
            
        </div>
    )
}

export default Input
