import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./signin.css"
class Signin extends Component {
   
        constructor(props) {
          super(props);
          this.state = {
            verifymail:localStorage.getItem("Mail") ,
            verifypassword: localStorage.getItem("password"),
            mail:"",
            password:""
          };
        }
       
       //login
mailchange=(e)=>{
  let entredmail=e.target.value
 
  this.setState({mail:entredmail})
  localStorage.setItem("mailverification",entredmail)
 }
 passwordchange=(e)=>{
  let entredpassword=e.target.value
  
  this.setState({password:entredpassword})
  localStorage.setItem("passwordverification",entredpassword)
 }

    render() {
       
        return (
        
            <div className="sign">
            <form className="sign-inform" action={((this.state.mail===this.state.verifymail)&&(this.state.password===this.state.verifypassword))? "/home":"/thank"} method="get" onSubmit={this.register}>
            
            <label for="lname">E-mail:</label><br/>
            <input className="sign-input" type="text" onChange={this.mailchange} pattern="\w+@\w+\.\w{1,4}" required /><br/><br/>
            <label for="lname">Password:</label><br/>
            <input className="sign-input" type="text" onChange={this.passwordchange} pattern="\w{8,}" required /><br/><br/>
            <input type="submit" value="Submit"/>
          </form>
          </div>
            
        );
    }
}

export default Signin;