import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import FormContainer from './FormContainer'

const SignUp = (props) => {

  const [formObj, setFormObj] = useState({})

  const [inputKey, setInputKey] = useState(0)

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
    const objectCopy = {...formObj};
    objectCopy[currentKey].className = event.currentTarget.value
  }

  const handleClear = (event, keyToRemove) => {
    console.log(keyToRemove);
    const objectCopy = {...formObj};
    console.log(objectCopy)
    delete objectCopy[keyToRemove]
    console.log(objectCopy)
    setFormObj(objectCopy)
  }

  return (
    <div>
      <div>
        Sign Up
    </div>
      <div>
        <FormContainer formObj={formObj} handleClear={handleClear} handleChange={handleChange} />
      </div>
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Add Class or Group
      </Button>
    </div>
  )
}

export default SignUp;