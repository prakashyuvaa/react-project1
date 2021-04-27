import './App.css';
import './form.css';
//import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Feed from './Feed';
import About from './About';
import Contact from './Contact';
import Signup from './Signup';



function App() {
      // const[name,setName]= useState("yuvaa")
  return (
    <Router>
      <Header/>
        <Switch>
          <Route path="/Home">
           <Home />
          </Route>
          <Route path="/Feed">
           <Feed />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
