import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () =>{
    if (firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}
}


export const handleGoogleSignIn= (e) =>{
     const provider = new firebase.auth.GoogleAuthProvider();
   return firebase.auth().signInWithPopup(provider)
    .then(res =>{
        const {displayName,email,photoURL}=res.user;
    const signedInUser ={
        isSignedIn:true,
        displayName: displayName,
        email: email,
        photo: photoURL

    }
    return signedInUser;

})
e.preventDefault();
}

export const handleSignOut = ()=> {
    return firebase.auth().signOut()
    .then(res => {
        const signedOutUser = {
            isSignedIn:false,
            name:'',
            email:'',
            photo:'',
            error:'',
            success:false
        }
        return signedOutUser;
    }).catch(err => {
        //An error occurred
    })
}

export const signInWithEmailAndPassword = (email,password) => {
    
    return firebase.auth().signInWithEmailAndPassword(email,password)
    .then((res) => {
        // Signed in
        const newUserInfo = res.user;
        newUserInfo.error = '';
        newUserInfo.success = true;
        newUserInfo.isSignedIn =true;

        console.log(res);
        return newUserInfo;
        // ...
    })
    .catch((error) => {
        var errorMessage = error.message;
        const newUserInfo = {};
        newUserInfo.error = errorMessage;
        newUserInfo.success = false;
        newUserInfo.isSignedIn = false;
        return newUserInfo;
    });
    console.log("logged in");
    document.getElementById('login').textContent = '';
}
