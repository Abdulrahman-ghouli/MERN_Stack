import React,{useState} from 'react'

const Search = (props) => {

const {setValueId,setValueSelect,submitO} =  props;



    return (
        <form onSubmit={submitO}>
            <p> Search for :</p>
            <select onChange = {(e)=> setValueSelect(e.target.value)}>
                <option value={"people"} >
                    People
                </option>
                <option value={"planets"} >
                    Planet
                </option>
            </select>
            <p>ID: </p>
            <input  onChange = {(e) =>   setValueId(e.target.value)}   type = "number"/>
            <input type  = "submit" value = "Search" />
        </form>
    )
}

export default Search 
