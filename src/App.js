import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { createContext, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Event_Tasks from './components/Event_Tasks';
//export const UserContext = createContext();


function App() {
  //const [loggedInUser,setLoggedInUser] = useContext({});
  return (
    //<UserContext.Provider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* <PrivateRoute path="/eventsTasks">
              <Event_Tasks></Event_Tasks>
            </PrivateRoute> */}
            <Route path="/*">
              <h2 alignItems="center">404 Error!</h2>
              <h4>Page not Found</h4>
            </Route>
          </Switch>
        </Router>
      </div>
  // </UserContext.Provider>
  );
}

export default App;
