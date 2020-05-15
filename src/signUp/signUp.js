import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../sign-in/signin.css"
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
            <div className="sign">
            <form className="sign-inform" action="/signin" method="get">
            <label  for="fname">First name:</label><br/>
            <input className="sign-input" type="text" onChange={this.firtsnamechange} pattern="^[A-Za-z]+$" required /><br/><br/>
            <label  for="lname">Last name:</label><br/>
            <input className="sign-input" type="text" onChange={this.lastnamechange} pattern="^[A-Za-z]+$" required /><br/><br/>
            <label  for="lname">E-mail:</label><br/>
            <input className="sign-input" type="text" onChange={this.mailchange} pattern="\w+@\w+\.\w{1,4}" required /><br/><br/>
            <label  for="lname">Password:</label><br/>
            <input className="sign-input" type="text" onChange={this.passwordchange} pattern="\w{8,}" required /><br/><br/>
            <input  type="submit" value="Submit"/>
            
          </form>
          </div>
            
        );
    }
}

export default signUp;