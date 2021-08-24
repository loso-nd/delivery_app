import React from "react";
import { NavBar } from "./styled";
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <NavBar>
        {/* <h1  style={{color: "red", textAlign:'center', marginRight: 30}}>{user.username}</h1> */}
      <NavLink
        exact
        activeClassName="active"
        to="/"
      > Home
      </NavLink>

      <NavLink
        exact
        activeClassName="active"
        to="/users/:id"
      >View Profile
      </NavLink>

      <NavLink
        exact
        activeClassName="active"
        to="/bookings/new"
      >Book Transport
      </NavLink>

      <NavLink
        exact
        activeClassName="active"
        to="/bookings"
      >Booking History
      </NavLink>

      <NavLink
        exact
        activeClassName="active"
        to="/login"
      >
        Log in
      </NavLink>
    </NavBar>
  );
}

export default Navbar;