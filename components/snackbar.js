// import React, { useState, useEffect }  from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


SimpleSnackbar.defaultProps = {text: 'Post Failed.',openSnacker:false }

export default function SimpleSnackbar({text,openSnacker}) {
//   const [open, setOpen] = React.useState(false);
  // const [open, setOpen] = React.useState(openSnacker);
//   const [sText, setText] = React.useState(text);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
  
      <Snackbar 
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        // open={open}
        open={openSnacker}
        autoHideDuration={6000}
        onClose={handleClose}
        message={text}        
        action={
          <>
            <Button  size="small" onClick={handleClose}>
              Close
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />    

    </div>
  );
}
