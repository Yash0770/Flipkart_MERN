import { Box, Button, styled } from "@mui/material";
import React, { useContext, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/actions/cartActions";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";
import LoginDialog from "../login/LoginDialog";
import { DataContext } from "../../context/DataProvider";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",

  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")(({theme})=>({
  padding: '15px',

  [theme.breakpoints.down("md")]: {
    width: '100%'
  },
}))

const StyledButton = styled(Button)(({ theme }) => ({
  //   width: 48%;
  width: "44%",
  height: "50px",
  borderRadius: "2px",

  [theme.breakpoints.down("lg")]: {
    width: "38%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "44%",
  },
}));

const ActionItem = ({ product }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const {id} = product;

  const addItemToCart = ()=>{
    dispatch(addToCart(id, quantity));
    navigate('/cart')
  }

  // const buyNow = async ()=>{
  //   let response = await payUsingPaytm({amount: 500, email: 'yash7@gmail.com'});
  //   let information = {
  //     action: 'https://securegw-stage.paytm.in/order/process',
  //     params: response,
  //   }
  //   post(information);
  // }

  let [open, setOpen] = useState(false);

  const { account } = useContext(DataContext);  
  
const buyNow = async () => {

  if (account.length>0) {
    let response = await payUsingPaytm({ amount: 500, email: 'yash7@gmail.com'});
    if (!response || typeof response !== 'object') {
      console.error('Invalid response from payUsingPaytm');
      return;
    }
    
    var information = {
        action: 'https://securegw-stage.paytm.in/order/process',
        params: response    
    }
    post(information);
  }else{
    setOpen(true)
  }

}

  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #bfbfc0",
          width: "90%",
        }}
      >
        <Image src={product.detailUrl} alt="product-image" />
      </Box>

      <StyledButton
        variant="contained"
        style={{ marginRight: "10px", background: "#ff9f00" }}
        onClick={addItemToCart}
      >
        <ShoppingCartIcon />
        Add to cart
      </StyledButton>
      <StyledButton variant="contained" style={{ background: "#fb541b" }} onClick={()=> buyNow()}>
        <FlashOnIcon />
        Buy now
      </StyledButton>
      <LoginDialog open={open} setOpen={setOpen} />
    </LeftContainer>
  );
};

export default ActionItem;
