import React from 'react';
import logo from '../volunteer-network-main/logos/Group 1329.png';
import google from '../volunteer-network-main/logos/google.png'
import Button from 'react-bootstrap/Button';
import '../App.css';

const Login = () => {
    return (
        <div className="App">
            <img src={logo} alt=""/>
            <div className="App" style={{border: '1px solid black',height:"200px", width:"500px"}}>
                <h2>Login With</h2>
                <Button variant="light" style={{borderRadius:"20px",width:"450px"}}><img style={{height:"25px", width:"25px"}} src={google} alt=""/>  Continue With Google</Button>
                <p>Don't have an account? <a href="#">create an account</a></p>
            </div>
        </div>
    );
};

export default Login;