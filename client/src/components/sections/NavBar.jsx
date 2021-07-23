import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../actions/auth_actions';
const NavBar = (props) => {
  const location = useLocation();
  const { currentUser, logout } = props
  return (
    <nav id="NavBar" className="nav-bar bg-white">
      <div className="nav-content pg-max-width">
        <div className="nav-left">
          HomeBar
        </div>
        <div className="nav-right">
          {currentUser ? <Fragment>
             <Link className={(location.pathname === "/cocktails" ? "current" : "")} to="/cocktails">
              Cocktails
             </Link>
             <Link className={(location.pathname === "/shelf" ? "current" : "")} to="/shelf">
              Shelf
             </Link>

             <Link onClick={() => logout()} >Logout</Link>
          </Fragment> : <Link to="/register">Sign Up</Link>}
          
        </div>
      </div>
    </nav>
  )
}
const mapStateToProps = (state) => ({
  currentUser: state.auth.user
})
export default connect(mapStateToProps, { logout })(NavBar)
