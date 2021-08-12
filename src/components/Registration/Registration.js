import React, { useState } from 'react';
import logo from '../../volunteer-network-main/logos/Group 1329.png';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import './Registration.css';
  import firebase from "firebase/app";
import "firebase/auth";


const Registration = () => {

    const [user,setUser] = useState({
        isSignedIn:false,
        name:'',
        email:'',
        password:'',
        error:'',
        success:false,
        photo:''
    });

    const updateUserName =(name)=>{
        const user = firebase.auth().currentUser;
        user.updateProfile({
        displayName: name,
        photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
        // Update successful
        console.log('user updated');
        // ...
        }).catch((error) => {
        // An error occurred
        console.log(error.message);
        // ...
        });  
    }

    const handleSubmit = (e) => {
        console.log( user.email , user.password);
        if(user.email && user.password)
        {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                // Signed in 
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                updateUserName(user.name);
                // ...
            })
            .catch((error) => {
                var errorMessage = error.message;
                const newUserInfo = {...user};
                newUserInfo.error = errorMessage;
                newUserInfo.success = false;
                setUser(newUserInfo);
                // ..
            });
            console.log("submitting");

            
        }
        e.preventDefault();

    }
    const handleBlur=(e)=>{
        let isFieldValid = false;
        if(e.target.name === 'email')
        {
            const validEmail = document.getElementById("email");
            const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            isFieldValid = isEmailValid;
            
            if(isEmailValid === false)
            {
                validEmail.textContent = "Please enter a valid email";
                validEmail.style.color = "red";
            }
            else{
                    validEmail.textContent = "";
            }
        }
        if(e.target.name === 'password')
        {
            const validPassword = document.getElementById("password");
            const isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(e.target.value);
            isFieldValid = isPasswordValid;
            if(isPasswordValid === false)
            {
                validPassword.textContent = "Please enter a valid password, Use at least one from each (a-z), (A-Z),(0-9),(!,@ ,# ,$ ,% ,^ ,& ,*)"
                validPassword.style.color = "red";
            }
            else{
                validPassword.textContent = "";
            }
        }
        if(e.target.name === 'name')
        {
            isFieldValid = true;
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    return (
        <div>
            <div>
            <Link to="/">
            <img src={logo} alt="" style={{height:"100px",width:"400px",marginTop:"50px",marginBottom:"150px"}}/>
            </Link>
            </div>
            <div>
                <h2>Volunteer Registration</h2>
                <br />
                <p style={{color:'red'}}>{user.error}</p>
                {user.success && <p style={{color:'green'}}>New User Created, Now Login.</p> }
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name"><strong>Name</strong>  </label><br />
                    <input className="inText" onBlur={handleBlur} name="name" type="text" placeholder='Enter your name' required/>
                    <br />
                    <br />
                    <label htmlFor="email"><strong>Email</strong>  </label><br />
                    <input  type="text" onBlur={handleBlur} name="email"className="inText" placeholder="Enter your email" required />
                    <br />
                    <span id="email"></span>
                    <br /><br />
                    <label htmlFor="password"><strong>Password</strong>  </label><br />
                    <input  type="password" onBlur={handleBlur} name="password" className="inPass" placeholder="Enter your password" required />
                    <br />
                    <span id="password"></span>
                    <br />
                    <br />
                    <Button type="submit" onSubmit={handleSubmit}   style={{borderRadius:"20px",width:"50%",variant:"primary"}}>Register</Button>
                    <br />
                    <p>Have an Account? <Link to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Registration;