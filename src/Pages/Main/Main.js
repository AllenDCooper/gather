import React, { useState } from 'react';
import { Button, Container, AppBar, Toolbar, IconButton, Typography, StylesProvider, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import FormContainer from '../../Components/FormContainer';

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
  submitButton: {
    backgroundColor: 'rgb(164, 30, 52)',
    width: '200px',
    // marginTop: '40px',
    color: 'white',
    textTransform: 'none',
    fontFamily: 'Merriweather Sans, sans-serif',
    position: 'absolute',
    right: '24px'
  }
}

const Main = (props) => {

  const [formObj, setFormObj] = useState({ 1: { className: '', key: 1, podsChecked: true, addMeChecked: true } })
  const [inputKey, setInputKey] = useState(2)
  const [isError, setIsError] = useState(false)

  const handleAdd = (event) => {
    const objectCopy = { ...formObj };
    setInputKey(inputKey + 1)
    objectCopy[inputKey] = { className: '', key: inputKey, podsChecked: true, addMeChecked: true };
    setFormObj(objectCopy);
  }

  const handleChange = (event, currentKey) => {
    const objectCopy = { ...formObj };
    objectCopy[currentKey].className = event.currentTarget.value
    setFormObj(objectCopy)
  }

  const handleClear = (event, keyToRemove) => {
    const objectCopy = { ...formObj };
    delete objectCopy[keyToRemove]
    setFormObj(objectCopy)
  }

  const handlePodsChange = (value, keyToUpdate) => {
    const objectCopy = { ...formObj };
    objectCopy[keyToUpdate].podsChecked = value
    setFormObj(objectCopy)
  }

  const handleAddMeChange = (value, keyToUpdate) => {
    const objectCopy = { ...formObj };
    objectCopy[keyToUpdate].addMeChecked = value
    setFormObj(objectCopy)
  }

  const handleSubmit = () => {
    const objectCopy = { ...formObj };
    let findError = false
    Object.values(objectCopy).forEach((formItem, index) => {
      if (formItem.className === "") {
        formItem.error = true
        findError = true
      } else {
        formItem.error = false
      }
    })
    setFormObj(objectCopy);
    setIsError(findError)
    if (!findError) {
      alert(JSON.stringify(formObj))
    }
  }

  return (
    <div>
      <Container style={{ position: 'relative', backgroundColor: 'white', paddingBottom: '60px' }}>
        <div>
          <h1 style={styles.header} className='merriweather'>Gather your classes</h1>
        </div>
        <div>
          <FormContainer
            formObj={formObj}
            handleClear={handleClear}
            handleChange={handleChange}
            handleAddMeChange={handleAddMeChange}
            handlePodsChange={handlePodsChange}
            isError={isError}
          />
        </div>
        <Grid container justify='center'>
          <Grid>
            <Button variant="contained" color="primary" onClick={handleAdd}>
              <AddIcon fontSize="small" /> Add
              </Button>
          </Grid>
        </Grid>
        <Button
          size="large"
          style={styles.submitButton} className='merriweather-sans'
          onClick={handleSubmit}
        >
          <span>Submit</span>
          <NavigateNextIcon />
        </Button>
      </Container>
    </div>
  )
}

export default Main;