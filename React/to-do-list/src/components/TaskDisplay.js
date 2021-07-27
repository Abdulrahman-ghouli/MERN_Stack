import React,{ useState } from 'react'

const TaskDisplay = (props) => {
    const {todos, setTodos} =props
    
    const clickhadler = (e)  =>{
        let ewarray=[...todos]
        let idex = e.target.value
        console.log(idex)
        console.log(ewarray[idex])
        console.log(ewarray[idex].status)
        ewarray[idex].status=!ewarray[idex].status
        setTodos(ewarray)
        

      }
    return (
        <div>
           {
                todos.map((eachtodo,i)  => {
                    return(<p key= {i}>{eachtodo.name}
                      <input type ="checkbox" value= {i} onChange = {(e)=>clickhadler(e)}   checked  = {eachtodo.status}></input></p>
                        )
                    

                })
                } 
        </div>
    )
}

export default TaskDisplay
