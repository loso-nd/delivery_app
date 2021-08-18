import React from "react";
import { NavBar } from "./styled";
import { NavLink } from "react-router-dom";


function Navbar({user}) {
  return (
    <NavBar>
        {/* <h1  style={{color: "red", textAlign:'center', marginRight: 30}}>{user.username}</h1> */}
      <NavLink
        exact
        activeClassName="active"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        exact
        activeClassName="active"
        to="/bookings/new"
      >
        Booking Form
      </NavLink>
      <NavLink
        exact
        activeClassName="active"
        to="/sign_up"
      >Sign up
      </NavLink>
      <NavLink
        exact
        activeClassName="active"
        to="/log_in"
      >
        Log in
      </NavLink>
    </NavBar>
  );
}

export default Navbar;