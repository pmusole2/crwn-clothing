import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header-component/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);

      return () => unsubscribeFromAuth();
    }); // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </Router>
  );
};

export default App;

/* unsubscribeFromAuth = null

componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({currentUser: user})
  })
}

componentWillUnmount() {
  this.unsubscribeFromAuth()
} */
