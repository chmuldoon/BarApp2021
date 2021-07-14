import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav id="NavBar" className="nav-bar bg-white">
      <div className="nav-content pg-max-width">
        <div className="nav-left">
          HomeBar
        </div>
        <div className="nav-right">
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
