import React, { useState } from 'react'
import LoginForm from '../forms/LoginForm'
const LoginSection = () => {
  const [activeForm, setActiveForm] = useState("login")
  const handleTabChange = (e) => {
    if(!e.currentTarget.classList.contains("active")){
      if(activeForm === "login"){
        setActiveForm("register")
      }else{
        setActiveForm("login")
      }
    }
  }
  return (
    <div className="login-section">
      <div class="login-tabs">
        <div 
          class={`login-tab ${activeForm === "login" ? "active" : ""}`}
          onClick={(e) => handleTabChange(e)}
        >
          Login
        </div>
        <div 
          class={`register-tab ${activeForm === "register" ? "active" : ""}`}
          onClick={(e) => handleTabChange(e)}
        >
          Sign Up
        </div>
      </div>
      <div class="forms-wrapper">
        {activeForm === "login" ?
        <LoginForm classes="active" version="login"/> :
        <LoginForm version="register"/>}
      </div>


    </div>
  )
}

export default LoginSection
