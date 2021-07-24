import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const handleUsername = (e) => {
        setUsername(e.target.value);
        if(e.target.value.length < 1) {
            setUsernameError("first name  is required!");
        } else if(e.target.value.length < 2) {
            setUsernameError("first name be 2 characters or longer!");
        }
    }
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const handleLastname = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 1) {
            setLastnameError("last name  is required!");
        } else if(e.target.value.length < 2) {
            setLastnameError("last must be 5 characters or longer!");
        }
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [copassword, setCoPassword] = useState("");  
    const [copasswordError, setCoPasswordError] = useState("");
    //const [user, setUser] = useState(""); "to show all data once not while u writtig"
    const handleCoPassword = (e)=>{
        setCoPassword(e.target.value);
        if(e.target.value.length<8){
            setCoPasswordError("confirm password must be at least 8 charecters ")
        }
        else if (e.target.value!==password){
            setCoPasswordError("confirm password must match ")

        }
        else{

            setCoPasswordError("")
        }
    }
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password,lastname,copassword};
        //setUser(newUser);
        console.log("Welcome", newUser);
    };
    
    return(
    <section>
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ handleUsername } />
{
                    usernameError ?
                    <p style={{color:'red'}}>{ usernameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Lastname: </label> 
               <input type="text" onChange={ handleLastname } />
{
                    lastnameError ?
                    <p style={{color:'red'}}>{ lastnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={  handleCoPassword } />
{
                    copasswordError ?
                    <p style={{color:'red'}}>{ copasswordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
<h2> your form </h2>
<h3>First Name :{username}</h3>
<h3>Last Name :{lastname}</h3>
<h3>Email :{email}</h3>
<h3>Password :{password}</h3>
<h3>Confirm Paswword :{copassword}</h3>
{/* <h2> your form </h2>
<h3>First Name :{user.username}</h3>
<h3>Last Name :{user.lastname}</h3>
<h3>Email :{user.email}</h3>
<h3>Password :{user.password}</h3>
<h3>Confirm Paswword :{user.copassword}</h3> */}
</section>
    );

};


    
export default UserForm;