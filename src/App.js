import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header-component/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrectUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

const App = ({ setCurrentUser, currentUser }) => {
  let unsubscribeFromAuth = null;

  useEffect(() => {
    // eslint-disable-next-line
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }

      return () => unsubscribeFromAuth();
    }); // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </Router>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrectUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

/* import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header-component/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      createUserProfileDocument(user);
    });
  }

  render() {
    return (
      <Router>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </Router>
    );
  }
}

export default App; */
