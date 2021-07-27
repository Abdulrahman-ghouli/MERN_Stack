import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [copassword, setCoPassword] = useState("");  
    //const [user, setUser] = useState(""); "to show all data once not while u writtig"
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password,lastname,copassword};
        //setUser(newUser);
        console.log("Welcome", newUser);
    };
    
    return(
    <section>
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) } />
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
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
                <input type="text" onChange={ (e) => setCoPassword(e.target.value) } />
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