import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/LandingPage/Home';
import Login from './components/Login/Login';
import { createContext, useContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Event_Tasks from './components/Event_Tasks/Event_Tasks';
import Registration from './components/Registration/Registration';
import PrivateRoute from './components/Login/PrivateRoute';
import Admin from './components/Admin/Admin';
import Error from './components/Error/Error';
export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
        <div className="App">
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/register'>
            <Registration></Registration>
            </Route>
            {/* <PrivateRoute path="/eventsTasks"> */}
            <Route path="/eventsTasks">
              <Event_Tasks></Event_Tasks>
              </Route>
            {/* </PrivateRoute> */}
            <Route path='/login' >
              <Login></Login>
            </Route>
            <Route path='/admin'>
              <Admin></Admin>
            </Route>
            <Route path='*'>
              <Error></Error>
            </Route>
          </Switch>
        </Router>
        </div>
      </UserContext.Provider>
  
  );
}

export default App;
