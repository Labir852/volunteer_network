import React from 'react';
import {Navbar,Nav,Button} from 'react-bootstrap';
import logo from '../volunteer-network-main/logos/Group 1329.png';
import {Link} from "react-router-dom";
import './Header.css';
import Login from './Login';


const Header = () => {
  const handleEnterLogin = () =>{
    console.log("button clicked");
    <Link to="/login"/>
  }
    return (
        <div>
            <Navbar >
    <Navbar.Brand href="#home">
      <img
        src={logo}
        width="150"
        height="50"
        className="d-inline-block align-top"
        alt=""
      />
    </Navbar.Brand>
    <Nav className="ml-auto nav-link"> 
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#Donations">Donations</Nav.Link>
      <Nav.Link href="#Events">Events</Nav.Link>
      <Nav.Link href="#Blog">Blog</Nav.Link>
      <Button className="button-gap" onclick={()=>handleEnterLogin()} variant="primary">Register</Button>
      <Button className="button-gap" variant="dark">Admin</Button>
      
    </Nav>
  </Navbar>
        </div>
    );
};

export default Header;