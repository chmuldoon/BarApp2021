import React, { Fragment, useState } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login, register } from "../../actions/auth_actions";
import history from "../../history";
const LoginForm = ({register, login, version, children, isAuthenticated}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  if(version === "register"){
    setFormData({ ...formData, password2: "" })
    
  }
  const { email, password, password2 } = formData;


  const onChange = (e) => {
    return setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    let fn = version === "login" ? login : register
    if(version === "register" && password2 === password){
      return;
    }
    fn(email, password)
    .then(() => {
      history.push("/shelf")
    })
  };
  
  return (
    <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label for="email" >Email: <br/></label>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label for="password" >Password: <br/></label>

          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        {version === "register" &&
        <div className="form-group">
          <label for="password" >Confirm Password: <br/></label>

          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={(e) => onChange(e)}
          />
        </div>}
        <input type="submit" className="btn my-btn btn-primary" value={version === "login" ? "Login" : "Sign Up"} />
      </form>
  )
}
LoginForm.propType = {
  register: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,


};
const mapStateToProps = (state) => {
  return {
}};

export default withRouter(connect(mapStateToProps, { register, login })(LoginForm));
