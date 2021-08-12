import React, { useContext, useState } from 'react';
import Event_Tasks from '../Event_Tasks/Event_Tasks';
import logo from '../../volunteer-network-main/logos/Group 1329.png';
import google from '../../volunteer-network-main/logos/google.png'
import Button from 'react-bootstrap/Button';
import {Link,Redirect,useLocation,useHistory} from "react-router-dom";
import "./Login.css";
import { UserContext } from '../../App';
import { handleGoogleSignIn, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

initializeLoginFramework();

    const [user,setUser] = useState({
        isSignedIn:false,
        name:'',
        email:'',
        password:'',
        photo:'',
        error:'',
        success:false
    });  



   
const handleBlur = (e) =>{
    let isFieldValid = false;
        if(e.target.name === 'email')
        {
            isFieldValid = true;
        }
        if(e.target.name === 'password'){
            isFieldValid = true;
        }
        if(isFieldValid)
        {
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
        else{
            document.getElementById('login').textContent = 'Please provide a valid email & password';
        }
}

const handleSubmit =(e)=>{
    console.log(user.email, user.password);
    if(user.email!="" && user.password!="")
    {
            signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);
            })
    }
    else{
        document.getElementById('login').textContent = 'Please provide a valid email & password';
        document.getElementById('login').style.color = "red";
    }
    e.preventDefault();
}

const googleSignIn = () => {
    handleGoogleSignIn()
    .then(res=>{
    setUser(res);
    setLoggedInUser(res);
    history.replace(from);
    })
}


    return (
            <div>
                <div>
                <Link to="/">
                <img src={logo} alt="" style={{height:"100px",width:"400px",marginTop:"50px",marginBottom:"150px"}}/>
                </Link>
                </div>
                
                <div className="LoginBox">
                    <form>
                    <h2>Login With</h2><br/>
                    <label htmlFor="email"><strong>Email</strong>  </label><br />
                    <input  type="text" onBlur={handleBlur} className="inText" name="email"className="inText" placeholder="Enter your email" required />
                    <br />
                    <label htmlFor="password"><strong>Password</strong>  </label><br />
                    <input  type="password" className="inPass" onBlur={handleBlur} name="password" className="inPass" placeholder="Enter your password" required />
                    <br />
                    <br />
                    <span id="login"></span>
                    <br />
                    <br />
                    <Button type="submit" onClick={handleSubmit} style={{borderRadius:"20px",width:"450px"}} variant="primary">Login</Button>
                    <br />
                    <br />
                    <Button onClick={googleSignIn}  variant="light"  style={{borderRadius:"20px",width:"450px",backgroundColor:"#f1f1f1"}}><img style={{height:"25px", width:"25px"}} src={google} alt=""/>  Continue With Google</Button>
                    </form>
                    <br/><br/> <p>Don't have an account? <Link to="/register">create an account</Link></p>
                    {(user.email && user.password) && <p style={{color:'red'}}>{user.error}</p>}
                </div>
            </div>
    );
};

export default Login;