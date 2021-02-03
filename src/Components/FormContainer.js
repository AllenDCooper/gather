import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core'
// import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import './FormContainer.css'
import FormField from './FormField';

const styles = {
  textField: {
    margin: '0px 10px'
  },
  clearButton: {
    backgroundColor: '#f48fb1',
    position: 'absolute',
    top: '50%'
  }
}

const FormContainer = (props) => {
  console.log(props);


  return (
    <div>
      {Object.values(props.formObj).map((formItem, index) =>
        <FormField
        formItem={formItem}
        index={index}
        handleClear={props.handleClear}
        handleChange={props.handleChange}
        styles={styles}
        />
      )}
    </div >
  )
}

export default FormContainer