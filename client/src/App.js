import logo from './logo.svg';
import './App.css';
import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';
import LoginPage from './components/pages/LoginPage';
import LandingPage from './components/pages/LandingPage';
import PrivateRoute from './components/routing/PrivateRoute';
import { loadUser } from './actions/auth_actions';
import setAuthToken from './util/setAuthToken';
import NavBar from './components/sections/NavBar';
import ShelfPage from './components/pages/ShelfPage';
import Modal from './components/snippets/Modal';
import CocktailPage from './components/pages/CocktailPage';
import IndividualCocktail from './components/pages/IndividualCocktail';
function App() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  useEffect(() => {
    store.dispatch(loadUser());
  }, [store]);
  return (
    <div className="App">
      <NavBar/>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={LoginPage} />
        <Switch>
          <PrivateRoute exact path="/shelf" component={ShelfPage} />
          <PrivateRoute exact path="/cocktails" component={CocktailPage} />
          <PrivateRoute exact path="/cocktails/:id" component={IndividualCocktail} />


        </Switch>
        <Modal />
    </div>
  );
}

export default App;
