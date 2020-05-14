import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class signUp extends Component {
    firtsnamechange=(e)=>{
       let firstname=e.target.value
       localStorage.setItem("Firstname",firstname)
    }
    lastnamechange=(e)=>{
     let lastname=e.target.value
     localStorage.setItem("Lastname",lastname)
    }
    mailchange=(e)=>{
        let mail=e.target.value
        localStorage.setItem("Mail",mail)
       }
       passwordchange=(e)=>{
        let password=e.target.value
        localStorage.setItem("password",password)
       }
    render() {
        return (
            
            <form action="/signin" method="get">
            <label for="fname">First name:</label>
            <input type="text" onChange={this.firtsnamechange} pattern="^[A-Za-z]+$" required /><br/><br/>
            <label for="lname">Last name:</label>
            <input type="text" onChange={this.lastnamechange} pattern="^[A-Za-z]+$" required /><br/><br/>
            <label for="lname">E-mail:</label>
            <input type="text" onChange={this.mailchange} pattern="\w+@\w+\.\w{1,4}" required /><br/><br/>
            <label for="lname">Password:</label>
            <input type="text" onChange={this.passwordchange} pattern="\w{8,}" required /><br/><br/>
            <input type="submit" value="Submit"/>
          </form>
            
        );
    }
}

export default signUp;