import React, { useState } from 'react';

import { TextField, Button } from '@material-ui/core'
// import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import './FormContainer.css'

const FormField = (props) => {

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value)
    props.handleChange(e, props.formItem.key)
  }

  return (
    <form noValidate autoComplete="off" className={'input-form'}>
      <TextField
        variant="outlined"
        id={`class-${props.formItem.key}`}
        label={`Class Name ${props.index}`}
        style={props.styles.textField}
        onChange={e => handleChange(e, props.formItem.key)}
        value={props.formItem.className}
      />
      <span style={{ position: 'relative' }} >
        <Button
          onClick={e => props.handleClear(e, props.formItem.key)}
          value={props.formItem.key}
          key={props.formItem.key}
          variant="contained"
          style={props.styles.clearButton}
          startIcon={<ClearIcon />}
        >
          Remove
      </Button>
      </span>
    </form>
  )
}

export default FormField;