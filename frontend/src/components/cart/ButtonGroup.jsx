import { ButtonGroup, Button, styled, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React, { useState } from "react";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`

const StyledButton = styled(Button)`
    border-radius: 50%
`

const GroupedButton = ({count, setCount}) => {

  const [openDialog, setOpenDialog] = useState(false);
  
  // const handleIncrement = ()=>{
  //   if (count<5) {
  //     setCount((prev)=> prev +1)
  //   }else{
  //     setOpenDialog(true)
  //   }
  // }
  const handleIncrement = ()=>{
    if (count<1) {
      setCount((prev)=> prev +1)
    }else{
      setOpenDialog(true)
    }
  }
  const handleDecrement = ()=>{
    setCount((prev)=> prev - 1)
  }

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
    <Component>
      <StyledButton disabled={count===1} onClick={handleDecrement}>-</StyledButton>
      <Button disabled>{count}</Button>
      <StyledButton onClick={handleIncrement}>+</StyledButton>
    </Component>

     <Dialog open={openDialog} onClose={handleClose}>
     {/* <DialogTitle>Limit Exceeded</DialogTitle> */}
     {/* <DialogTitle>Alert</DialogTitle> */}
     <DialogContent className="pb-0">
       {/* We're sorry! Only 1 unit(s) allowed in each order. */}
       Cannot place more orders at the moment.
     </DialogContent>
     <DialogActions>
       <Button onClick={handleClose} color="primary">
         OK
       </Button>
     </DialogActions>
   </Dialog>
   </>
  );
};

export default GroupedButton;
