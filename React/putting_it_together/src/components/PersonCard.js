import React, { Component } from 'react';


class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {age : this.props.age};
    }
    AddAge= () => this.setState({age:this.state.age + 1});
    render(){
        const { firstName, lastName, haircolor } = this.props;
        return(
            <div className= "a1">
               <h1>{firstName} ,{lastName}</h1>
               <h5>Age: {this.state.age}</h5>
               <h5>Hair Color: {haircolor}</h5>
               <button onClick= {this.AddAge}>Birthday Button for {firstName}{lastName}</button>
            </div>
        );
    }
}
export default PersonCard;