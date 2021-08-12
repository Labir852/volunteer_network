import React, { useContext } from 'react';
import {Navbar,Nav,Button} from 'react-bootstrap';
import logo from '../../volunteer-network-main/logos/Group 1329.png';
import {Link} from "react-router-dom";
import './Header.css';
import Login from '../Login/Login';
import { UserContext } from '../../App';
import { handleSignOut } from '../Login/LoginManager';


const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const signedOutUser = () => {
    handleSignOut().
    then((res) =>{
        setLoggedInUser(res);
    })
  }
    return (
        <div>
            <Navbar >
    <Navbar.Brand>
      <Link to="/">
      <img
        src={logo}
        width="150"
        height="50"
        className="d-inline-block align-top"
        alt=""
      />
      </Link>
    </Navbar.Brand>
    <Nav className="ml-auto nav-link"> 
      <Nav.Link><Link to="/">Home</Link></Nav.Link>
      <Nav.Link ><Link to="/">Donations</Link></Nav.Link>
      <Nav.Link ><Link to="/eventsTasks">Events</Link></Nav.Link>
      <Nav.Link ><Link to="/">Blog</Link></Nav.Link>
      {loggedInUser.isSignedIn?
      <Button className="button-gap" onClick={signedOutUser} variant="primary">Sign Out <br /> {loggedInUser.displayName}</Button>  
        :
        <Link to="/login">
      <Button className="button-gap" variant="primary">Login</Button>
      </Link>}
      <Link to="/admin">
      <Button className="button-gap" variant="dark">Admin</Button>
      </Link>
      
      
    </Nav>
  </Navbar>
        </div>
    );
};

export default Header;