import { Box, Button, Grid, Typography, styled } from "@mui/material";
import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";
import { DataContext } from "../../context/DataProvider";
import LoginDialog from "../login/LoginDialog";

const Container = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",

  [theme.breakpoints.down("md")]: {
    padding: "15px 0px",
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #ffffff;
`;

const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background: #ffffff;
  box-shadow: 0px -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #ffffff;
  width: 250px;
  height: 51px;
  border-radius: 2px;

    &:hover {
    background: #f57c00;
  }
`;

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: "15px",

  [theme.breakpoints.down("md")]: {
    marginBottom: "15px",
  },
}));

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  let [open, setOpen] = useState(false);
  const { account } = useContext(DataContext);  

  const buyNow = async ()=>{
    if (account.length>0) {
      let response = await payUsingPaytm({amount: 500, email: 'yash7@gmail.com'});
      let information = {
        action: 'https://securegw-stage.paytm.in/order/process',
        params: response,
      }
      post(information);
    }else{
      setOpen(true)
    }
  }

  return (
    <>
      {cartItems.length ? (
        <Container container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart Items {cartItems.length}</Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} key={item._id} />
            ))}
            <ButtonWrapper>
              <StyledButton onClick={()=> buyNow()}>Place Order</StyledButton>
            </ButtonWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        <LoginDialog open={open} setOpen={setOpen} />
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
