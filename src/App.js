import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

// import components
import ClassForm from './Components/ClassForm';
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'
import Main from './Pages/Main/Main'
import About from './Pages/About/About'
import NavigationBar from './Components/NavigationBar/NavigationBar'

// import firebase auth
import { auth, database } from './firebase';


const theme = createMuiTheme({
  typography: {
    "fontFamily": 'Merriweather Sans, sans-serif',
  }
});

class App extends Component {

  state = {
    user: null,
    displayNameFromForm: null,
  }

  componentDidMount() {
    auth.onAuthStateChanged(userAuth => {
      if (!userAuth) {
        this.setState({
          user: null
        })
      } else {
        console.log(userAuth.uid)
        const userId = userAuth.uid

        database.ref('/users/' + userId).once('value')
          .then((snapshot) => {
            const userProfile = snapshot.val() || userAuth;
            console.log(userProfile)
            this.setState({ user: userProfile })
            //   console.log(this.state))
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    })
  }

  updateDisplayNameFromForm = (displayName) => {
    console.log(displayName)
    this.setState({
      displayNameFromForm: displayName,
    })
  }

  updateUserInState = (user) => {
    console.log(`UpdateUserInState run`)
    this.setState({
      user: user
    })
  }

  updateDisplayNameFromForm = (displayName) => {
    console.log(displayName)
    this.setState({
      displayNameFromForm: displayName,
    })
  }

  render() {
    console.log(process.env.PUBLIC_URL)
    return (
      <ThemeProvider theme={theme}>
        <div className="Application">
          <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
            <NavigationBar user={this.state.user} displayName={this.state.displayNameFromForm} updateUserInState={this.updateUserInState} />
            <Switch>
              <Route exact path="/">
                {this.state.user ? <Redirect to="/main" /> : <SignUp updateDisplayNameFromForm={this.updateDisplayNameFromForm} />}
              </Route>
              <Route exact path="/signIn"
                render={props => (
                  this.state.user ? <Redirect to="/main" /> : <SignIn updateDisplayNameFromForm={this.updateDisplayNameFromForm} />
                )}
              />
              <Route exact path="/main">
                {!this.state.user ? <Redirect to="/" /> : <Main />}
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
