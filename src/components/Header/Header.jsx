import React from "react";
import { Link, NavLink } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h3 className="text-center mb-6 font-bold">This is header Component</h3>
      <nav className="bg-black text-white px-6 py-4 rounded-2xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mobiles">Mobiles</NavLink>
        <NavLink to="/laptops">Laptops</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to= "/users2">Users 2</NavLink>
        <NavLink to="/new-page">New Page</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;
