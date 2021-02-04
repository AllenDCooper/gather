import React, { useState } from 'react';
import { Button, Container, AppBar, Toolbar, IconButton, Typography, StylesProvider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import FormContainer from './FormContainer'

const styles = {
  appBar: {
    backgroundColor: '#A41E34'
  },
  header: {
    color: 'white'
  },
  submitButton: {
    backgroundColor: 'rgb(164, 30, 52)',
    width: '200px',
    marginTop: '40px',
    color: 'white',
    textTransform: 'none',
    fontFamily: 'Merriweather Sans, sans-serif',
    position: 'absolute',
    right: '24px'
  }
}

const SignUp = (props) => {

  const [formObj, setFormObj] = useState({ 1: { className: '', key: 1 } })

  const [inputKey, setInputKey] = useState(2)

  const handleAdd = (event) => {
    const objectCopy = { ...formObj };
    console.log(inputKey)
    setInputKey(inputKey + 1)
    objectCopy[inputKey] = { className: '', key: inputKey };
    setFormObj(objectCopy);
    console.log(formObj)
  }

  const handleChange = (event, currentKey) => {
    console.log(currentKey)
    console.log(event.target.value)
    const objectCopy = { ...formObj };
    objectCopy[currentKey].className = event.currentTarget.value
  }

  const handleClear = (event, keyToRemove) => {
    console.log(keyToRemove);
    const objectCopy = { ...formObj };
    console.log(objectCopy)
    delete objectCopy[keyToRemove]
    console.log(objectCopy)
    setFormObj(objectCopy)
  }

  return (
    <div>
      <AppBar position="static" style={styles.appBar}>
        <Toolbar>
          {/* <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" >
            <span className='merriweather-sans'><strong>Gather</strong></span>
            <span className='merriweather' >@Muhlenberg</span>
        </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <Container style={{position: 'relative'}}>
        <div>
          <h1 style={styles.header} className='merriweather'>Sign Up</h1>
        </div>
        <div>
          <FormContainer formObj={formObj} handleClear={handleClear} handleChange={handleChange} />
        </div>
        <Button variant="contained" color="primary" onClick={handleAdd}>
          <AddIcon fontSize="small" /> Add
      </Button>
      <Button size="large" style={styles.submitButton} className='merriweather-sans' >
        Submit <NavigateNextIcon />
      </Button>
      </Container>
    </div>
  )
}

export default SignUp;