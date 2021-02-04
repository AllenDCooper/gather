import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core'
// import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import './FormContainer.css'
import FormField from './FormField';

const styles = {
  textField: {
    margin: '0px'
  },
  clearButton: {
    backgroundColor: 'white'
    // backgroundColor: '#f48fb1',
    // position: 'absolute',
    // top: '50%'
  },
  formRow: {
    backgroundColor: 'lightgray',
    padding: '15px'
  }
}

const FormContainer = (props) => {
  console.log(props);


  return (
    <div style={styles.formRow}>
      {Object.values(props.formObj).map((formItem, index) =>
        <FormField
        formItem={formItem}
        index={index}
        handleClear={props.handleClear}
        handleChange={props.handleChange}
        styles={styles}
        handleAddMeChange={props.handleAddMeChange}
        handlePodsChange={props.handlePodsChange}
        isError={props.isError}
        />
      )}
    </div >
  )
}

export default FormContainer