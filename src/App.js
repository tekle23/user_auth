import React,{useState} from 'react';
import Nav from './Nav';
import Blog from './Blog';
import Login from './Login';
import './App.css';
import Register from './Register';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { UserContext } from './UserContext';
function App() {

const [user,setUser] = useState([{username:'admin',role:'admin'}]);
const [logged,setLogged] = useState(false);
  return (
    
    <Router>
   <UserContext.Provider value={[user,setUser],[logged, setLogged]}>
    <div className="App">   
       <Nav />
    <Switch>
       <Route path="/" exact>
         <Blog />
       </Route>
       <Route path="/login">
         <Login />
       </Route>      
      <Route path="/register">
        <Register />
      </Route>
       </Switch>
    </div>
    </UserContext.Provider>
    </Router>
  );
}

export default App;
