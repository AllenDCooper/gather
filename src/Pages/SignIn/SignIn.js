import React, { useState, useEffect } from 'react';
// import { Container, Jumbotron, Form, Button } from 'react-bootstrap';
import { Button, Container, TextField, AppBar, Toolbar, IconButton, Typography, StylesProvider, Grid } from '@material-ui/core';
import './SignIn.css';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../../firebase'
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

const SignIn = (props) => {
  const [{ typed, i }, setTyped] = useState({ typed: '', i: 0 })
  const [userInput, setUserInput] = useState(
    {
      email: "",
      password: "",
      error: null,
    })
  const subtitleStr = 'Hey! You want to umm... study???'

  useEffect(() => {
    if (typed.length === subtitleStr.length) return
    setTimeout(() => {
      setTyped({ typed: typed + subtitleStr[i], i: i + 1 })
    }, Math.random() * 200 + 50)
  }, [typed])

  const handleSubmit = (event) => {
    event.preventDefault()
    firebase.auth()
      .signInWithEmailAndPassword(userInput.email, userInput.password)
      .catch(function (error) {
        setUserInput({ ...userInput, error: 'Incorrect username or password. Please try again.' })
      });
  }

  //function to handle form change
  const handleChange = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setUserInput({
        ...userInput,
        email: value
      })
    } else if (name === 'userPassword') {
      setUserInput({
        ...userInput,
        password: value
      })
    }
  }

  return (
    <div>

      <Container style={{ backgroundColor: 'white' }}>

        <div>
          <h1 style={styles.header} className='merriweather'>Sign In</h1>
        </div>

        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          {userInput.error && <p style={{ color: 'red' }}>{userInput.error}</p>}
          <form onSubmit={handleSubmit}>
            <Grid container>
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
                  Sign In
                </Button>
              </Grid>
              <Grid item xs={12} sm={12} style={styles.formCol} justify="center">
                <div style={{ margin: '40px 0px' }}>
                  <p className="ride-line"><span className="ride-line-span">or</span></p>
                  <Button variant="contained"
                    color="primary"
                    block
                    onClick={signInWithGoogle}>
                    Sign in with Google
                  </Button>
                </div>
              </Grid>
            </Grid>
          </form>
          <Grid container>
            <Grid item xs={12} sm={12} style={styles.formCol} justify="center" >
              <p style={{ paddingBottom: '100px' }}>
                Don't have an account? Sign up <Link to="/">here</Link>
              </p>
            </Grid>
          </Grid>

        </div>

      </Container >

    </div >
  )
}

export default SignIn;