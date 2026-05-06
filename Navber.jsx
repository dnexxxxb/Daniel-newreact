import React from 'react'
import img from "./assets/mountain.png";

const Navbar = () => {
  return (
    <div>
 <nav className="nava">
      <img src={img} alt="img" />
       <ul>
        <li>Location</li>
        <li>Watch</li>
        <li>Who we are</li>
        <li>Groups</li>
        <li>find your place</li>
        <li>give</li>
        <li>My account</li>
        <li>More</li>
       </ul>
        </nav>
        </div>
  )
}

export default Navber