import axios from "axios";
import setAuthToken from "../util/setAuthToken";
import { setAlert } from "./alert_actions";
import { USER_LOADED, 
        LOGIN_FAIL, 
        LOGIN_SUCCESS,  
        REGISTER_FAIL,
        REGISTER_SUCCESS,
        AUTH_ERROR,
        LOGOUT
      } from "./types";



//load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/auth/me");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
//register a user
export const register = ( email, password ) => async (dispatch) => {
  //adds headers to request
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //translates to json

  const body = JSON.stringify({ email, password });

  try {

    //makes http request with the body and header
    const res = await axios.post("/api/auth/register", body, config);

    //should return the token
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
//login user
export const login = (email, password) => async (dispatch) => {
  //adds headers to request
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //translates to json
  const body = JSON.stringify({ email, password });
  try {
    //makes http request with the body and header
    const res = await axios.post("/api/auth/login", body, config);
    //should return the token
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    console.log(res.data)
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
export const demoLogin = () => async (dispatch) => {
  //adds headers to request
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //translates to json
  const body = JSON.stringify({ email: "demo@demo.com", password: "password" });
  try {
    //makes http request with the body and header
    const res = await axios.post("/api/auth/login", body, config);
    //should return the token
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
//Logout
export const logout = () => async (dispatch) => {

  try {
    const res = await axios.get("/logout");
    dispatch({ type: LOGOUT });
  } catch (error) {
    dispatch({ type: LOGOUT });
  }
};
