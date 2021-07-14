import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login, register } from "../../actions/auth_actions";
const LoginForm = ({register, login, version, children, isAuthenticated}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) => {
    return setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    let fn = version === "login" ? login : register
    fn(email, password).then(() => {
      return <Redirect to="/cocktails" />;
    })
  };

  return (
    <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
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
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value={version === "login" ? "Login" : "Sign Up"} />
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

export default connect(mapStateToProps, { register, login })(LoginForm);
