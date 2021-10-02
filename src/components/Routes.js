import Details from './Details';
import Apple from './Apple';
import Home from './Home';
import Samsung from './Samsung';
import Huawei from './Huawei';
import Oppo from './Oppo';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import List from './List';




export default function Routes() {
  return (
    <Router>
      <div>
      
  
      
       <Navbar bg="dark" fixed="top">
         <div className="nav">
          <Navbar.Brand style={{color:'lightcyan',marginLeft:'40%'}} as={Link} to="/List">Let's Start</Navbar.Brand>
          </div>
        </Navbar>
      
        
        
        <Switch>
         <Route path="/list">
            <List />
          </Route> 
          <Route path="/apple">
            <Apple />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/samsung">
            <Samsung />
          </Route>
          <Route path="/huawei">
            <Huawei />
          </Route>
          <Route path="/oppo">
            <Oppo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}