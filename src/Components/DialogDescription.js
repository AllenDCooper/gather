import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button, Badge } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -4,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: 'lightgray'
  },
}))(Badge);

const DialogDescription = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <StyledBadge badgeContent={'i'} color="primary" onClick={handleClickOpen} >
        <Button style={{textTransform: 'none', fontWeight: '900', padding: '6px 8px 6px 0px' }}>
          {props.modalText.clickText}
        </Button>
      </StyledBadge>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.modalText.title}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {props.modalText.text}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

}

export default DialogDescription;

