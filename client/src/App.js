// import './App.css';
import React, { useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import BookTransport from './pages/Profile'
import Profile from './pages/Profile'
import Login from './components/Login'


function App() {
  const [user, setUser] = useState(null)
  
  if(!user) return <Login onLogin={setUser}/> 

  return (

    <>
    <Router>
      <Navbar user={user} setUser={setUser}/>
      <Switch>

      <Route path="/login">
        <Login user={user}/>  
      </Route>

        <Route exact path="/">
          <Home user={user}/> 
        </Route>

        <Route path="/user/:id">
          <Profile />
        </Route>

        <Route path="/bookings/new">
          <BookTransport user={user}/> 
        </Route>

      </Switch>
    </Router>
    </>
  );
}

export default App;
