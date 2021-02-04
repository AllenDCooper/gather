import React, { useState } from 'react';
import { TextField, Button, Grid, FormControlLabel, Switch, FormHelperText} from '@material-ui/core'
// import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import './FormContainer.css'
import DialogDescription from './DialogDescription';

const styles = {
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

const modalText = {
  podsChecked: {
    clickText: 'Create Pods',
    title: 'About Pods',
    text: 'Students will be grouped into learning pods of 4 students based on compatability upon registration. Each pod will be given their own communication channel.'
  },
  addMe: {
    clickText: 'Add Me',
    title: 'About Adding Me',
    text: 'By selecting this option, you will be added to the open communication channel for your group. If you are an instructor or leader and would like to be able to send messages to your membership, moderate conversation, and/or make yourself available for direct messages, then select this option.'
  }
}

const FormField = (props) => {

  const [value, setValue] = useState('');
  const [podsChecked, setPodsChecked] = useState(true);
  const [addMeChecked, setAddMeChecked] = useState(true);

  const handleChange = (e) => {
    setValue(e.target.value);
    props.handleChange(e, props.formItem.key);
  }

  const handlePodsChange = (e) => {
    props.handlePodsChange(!podsChecked, props.formItem.key);
    setPodsChecked(!podsChecked);
  }

  const handleAddMeChange = () => {
    props.handleAddMeChange(!addMeChecked, props.formItem.key)
    setAddMeChecked(!addMeChecked);
  }

  return (
    <form noValidate autoComplete="off" className={'input-form'}>
      <Grid container >
        <Grid item xs={12} sm={12} style={styles.formCol} >
          <TextField
            variant="outlined"
            fullWidth='true'
            id={`class-${props.formItem.key}`}
            label={`Class / Group Name ${props.index + 1}`}
            style={props.styles.textField}
            onChange={e => handleChange(e, props.formItem.key)}
            value={props.formItem.className}
            error={props.formItem.error}
            helperText={props.formItem.error ? 'Please enter a class name': null}
          />
          {/* {props.formItem.error ?
            <FormHelperText id="helper-text" style={{ marginTop: '20px', color: 'red' }} >
              {"Please enter a class name"}
            </FormHelperText>
            : null} */}
        </Grid>
        <Grid item xs={6} sm={3} style={styles.formCol} >
          <Switch
            checked={podsChecked}
            onChange={handlePodsChange}
            name="checkedB"
            color="primary"
          />
          <DialogDescription modalText={modalText.podsChecked} />
        </Grid>
        <Grid item xs={6} sm={2} style={styles.formCol} >

          <Switch
            checked={addMeChecked}
            onChange={handleAddMeChange}
            name="checkedB"
            color="primary"
          />
          <DialogDescription modalText={modalText.addMe} />
        </Grid>
        {props.index === 0
          ?
          null
          :
          <Grid item xs={6} sm={1} style={styles.formColButton} >
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
          </Grid>
        }
      </Grid>
    </form>
  )
}

export default FormField;