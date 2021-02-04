import React, { useState, useEffect } from 'react';
// import { Container, Jumbotron, Button, Form } from 'react-bootstrap';
import { Button, Container, TextField, AppBar, Toolbar, IconButton, Typography, StylesProvider, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { signInWithGoogle, updateUserProfile } from '../../firebase';
import firebase from "firebase/app";

const styles = {
  appBar: {
    backgroundColor: '#A41E34'
  },
  header: {
    textAlign: 'center',
    color: 'black',
    margin: '0px',
    padding: '30px'
  },
  formCol: {
    margin: '10px 0px',
    display: 'flex'
  },
  formColButton: {
    margin: '10px 0px',
    textAlign: 'left',
    paddingLeft: '20px'
  }
}

const SignUp = props => {
  const [{ typed, i }, setTyped] = useState({ typed: '', i: 0 })
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    displayName: "",
    error: null,
  })
  const subtitleStr = 'Hey! You want to umm... study???'

  useEffect(() => {
    if (typed.length === subtitleStr.length) return
    setTimeout(() => {
      setTyped({ typed: typed + subtitleStr[i], i: i + 1 })
    }, Math.random() * 200 + 50)
  }, [typed])

  const createUserWithEmailAndPasswordHandler = () => {
    // adds displayName immediately to state on Application.js to display on navigation bar
    props.updateDisplayNameFromForm(userInput.displayName)

    firebase.auth()
      .createUserWithEmailAndPassword(userInput.email, userInput.password)
      .then(function () {
        console.log('Successfully created new user');
        const user = firebase.auth().currentUser;
        console.log(user);
        console.log(userInput)
        updateUserProfile(user, userInput)
        // .catch(function (error) {
        //   setUserInput({ ...userInput, error: error.message })
        //   console.log(`Error updating user with displayName:`, error)
        // });
      })
      .catch(function (error) {
        setUserInput({ ...userInput, error: error.message })
        console.log('Error creating new user:', error)
      });
  };

  //function to handle form change
  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'userEmail') {
      setUserInput({ ...userInput, email: value })
    } else if (name === 'userPassword') {
      setUserInput({ ...userInput, password: value })
    } else if (name === 'displayName') {
      setUserInput({ ...userInput, displayName: value })
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    createUserWithEmailAndPasswordHandler()
  }
  return (
    <div>
      <Container style={{ backgroundColor: 'white' }}>
        <div>
          <h1 style={styles.header} className='merriweather'>Sign Up</h1>
        </div>

        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          {userInput.error && <p style={{ color: 'red' }}>{userInput.error}</p>}
          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={12} sm={12} style={styles.formCol} >
                <TextField
                  variant="outlined"
                  fullWidth='true'
                  label="Enter name"
                  name="displayName"
                  value={userInput.displayName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} style={styles.formCol} >
                <TextField
                  variant="outlined"
                  fullWidth='true'
                  name="userEmail"
                  label="Enter email"
                  value={userInput.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} style={styles.formCol}  >
                <TextField
                  type="password"
                  variant="outlined"
                  fullWidth='true'
                  name="userPassword"
                  label="Enter password"
                  value={userInput.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} style={styles.formCol} justify="center">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  block
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid item xs={12} sm={12} style={styles.formCol} justify="center">
                <div style={{ margin: '40px 0px' }}>
                  <p className="ride-line"><span className="ride-line-span">or</span></p>
                  <Button
                    variant="contained"
                    color="primary"
                    block
                    onClick={signInWithGoogle}
                  >
                    Sign up with Google
              </Button>
                </div>
              </Grid>
            </Grid>
          </form>
          <Grid container>
            <Grid item xs={12} sm={12} style={styles.formCol} justify="center" >
              <p style={{ paddingBottom: '100px' }}>
                Already have an account? Sign in <Link to="/signIn">here</Link>
              </p>
            </Grid>
          </Grid>
        </div>

      </Container>
    </div >
  )
}



export default SignUp;