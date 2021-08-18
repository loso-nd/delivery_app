// import './App.css';
import React, { useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar'
//import Header from './components/Header'
import Home from './pages/Home'
import BookingForm from './pages/BookingForm'
import Profile from './pages/Profile'
import Auth from './components/Auth'
import Login from './components/Login'


function App() {
  const [user, setUser] = useState(null)
  if(!user) return <Login onLogin={setUser}/> 
  return (

    <>
    <Router>
      <Navbar user={user} setUser={setUser}/>
      <Switch>

      <Route path="/sign_up">
          <Auth user={user} setUser={setUser}/>  
      </Route>

      <Route path="/log_in">
        <Login user={user}/>  
      </Route>

        <Route exact path="/">
          <Home user={user}/> 
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/bookings/new">
          <BookingForm user={user}/> />  
        </Route>

      </Switch>
    </Router>
    </>
  );
}

export default App;
