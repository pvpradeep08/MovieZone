import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/search/${search}`); 
    }
  };

  return (
    <nav className="navbar">
      <h2 className="logo">
        <Link to="/">🎬 Movie Zone</Link>
      </h2>

     

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
