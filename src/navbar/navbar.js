import React, { useState } from 'react';


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
const Navigationbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
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
          
              <Link to="/signin"><NavLink >Sign-in</NavLink></Link>
            
          
              <Link to="/signup"><NavLink >Sign-up</NavLink></Link>
            
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigationbar;
