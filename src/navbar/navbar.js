import React, { useState } from 'react';

import "./navbar.css"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';
const loggout={
  display:(localStorage.getItem("Mail")!==localStorage.getItem("mailverification"))?"none":"block",
color:"red",
}
  const sign={
    display:(localStorage.getItem("Mail")===localStorage.getItem("mailverification"))?"none":"block",
  }
 
 
const Navigationbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const Logout=()=>{
    localStorage.setItem("mailverification","c")
    window.location.reload(false);
    
  }
  return (
    <div class="header-navbar">
      <Navbar color="light" light expand="md">
       <Link to="/Home"> <NavbarBrand >Home</NavbarBrand></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/Movie"><NavLink>Movie</NavLink></Link>
            </NavItem>
            <NavItem>
            <Link to="/favoris"><NavLink >Favoris</NavLink></Link>
            </NavItem>
            
          </Nav>
             
              <Link to="/signin"><NavLink style={sign}>Sign-in</NavLink></Link>
              <h1 class="logout" style={loggout} >Welcome  {localStorage.getItem("Firstname")}</h1>
              <button class="logout" style={loggout} type="button" onClick={Logout}>Logout</button>
              <Link to="/signup"><NavLink style={sign} >Sign-up</NavLink></Link>
              
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigationbar;
