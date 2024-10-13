import React from 'react'
import "../navbar/navbar.css"

const Navbar = () => {
  return (
    <div className="navbar-main">

      <div className="left-bar">Furniture</div>

      <div className="riht-bar">
        <p>Home</p>
        <p>Services</p>
        <p>Doctors</p>
        <p>Products</p>
        <p>Gallery</p>
      </div>
    </div>
  );
}

export default Navbar