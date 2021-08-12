import React from 'react';
import Header from '../Header/Header';

const Admin = () => {
    return (
        <div>
            <Header></Header>
            <h1>This is an admin page</h1>
            <iframe src="https://8x8.vc/mycompany/mymeeting" allow="camera;microphone;fullscreen;display-capture" style={{height:"800px", width:"1500px",border:"100px"}} frameborder="50"></iframe>
        </div>
    );
};

export default Admin;