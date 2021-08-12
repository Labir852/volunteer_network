import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, Link
  } from "react-router-dom";
import Header from '../Header/Header';
import './Error.css';

const Error = () => {
    return (
        <div className="bg-Color">
          <Header></Header>
          <div className="bg-Color bg-sizing">
            <h1 alignItems="center">404 Error!</h1>
              <h2>Page not Found</h2>
            </div>
        </div>
    );
};

export default Error;