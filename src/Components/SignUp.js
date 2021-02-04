import React, { useState } from 'react';
import { Button, Container, AppBar, Toolbar, IconButton, Typography, StylesProvider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import FormContainer from './FormContainer'

const styles = {
  appBar: {
    backgroundColor: '#A41E34'
  },
  header: {
    color: 'white'
  }
}

const SignUp = (props) => {

  const [formObj, setFormObj] = useState({ 1: { className: '', key: 1 }})

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
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            App
        </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <Container>
        <div>
          <h1 style={styles.header} className='merriweather'>Sign Up</h1>
        </div>
        <div>
          <FormContainer formObj={formObj} handleClear={handleClear} handleChange={handleChange} />
        </div>
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Add Class or Group
      </Button>
      </Container>
    </div>
  )
}

export default SignUp;