import React from 'react'

const Page = (props) => {
    return (
        <div style = {{color:props.textcolor, backgroundColor: props.backcolor}}>
            {
                isNaN(props.id) ? <h2> the word : {props.id} </h2> : <h2> your Number : {props.id} </h2> 
            }
        </div>
    )
}

export default Page
