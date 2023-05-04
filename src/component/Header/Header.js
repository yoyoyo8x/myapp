import React from "react";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="title">User</div>
      <div className="navbar">
        <div className="navbar-container">
          <ul>
            <li className="nav-item">
              <NavLink to="/">Reputation</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/NewUser">New User</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Voter">Voters</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Editor">Editors</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Moderator">Moderators</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
