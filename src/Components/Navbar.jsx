import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div>
      <Link to="/"> <h1>React Books</h1></Link>
        
      </div>
     <Link to="/favourites"> <h3>Your Favourites</h3></Link>
    </div>
  );
}

export default Navbar;
