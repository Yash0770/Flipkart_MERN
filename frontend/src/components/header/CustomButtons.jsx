import React, { useState, useContext } from "react";
import { Badge, Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../login/LoginDialog";
import { Link } from "react-router-dom";

import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import CartItem from "../cart/CartItem";
import { useSelector } from "react-redux";

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;

  & > button,
  & > p,
  & > div {
    margin-right: 40px !important;
    font-size: 14px;
    align-items: center;
  }
`;

const Container = styled(Link)`
  display: flex;
  text-decoration: none;
  color: inherit;
`;

// const LoginButton = styled(Button)`
//   color: "#2874f0";
//   background: "#ffffff";
//   text-transform: "none";
//   padding: "5px 40px";
//   border-radius: "2px";
//   box-shadow: "none";
//   font-weight: "600";
//   height: "32px";
// `

const CustomButtons = () => {
  const [open, setOpen] = useState(false);

  const { account, setAccount } = useContext(DataContext);

  const openDialog = () => {
    setOpen(true);
  };

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Wrapper className="wrapper-btn">
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <Button
          className="login-custom-btn"
          variant="contained"
          style={{
            color: "#2874f0",
            background: "#ffffff",
            textTransform: "none",
            padding: "5px 40px",
            borderRadius: "2px",
            boxShadow: "none",
            fontWeight: "600",
            height: "32px",
          }}
          onClick={() => openDialog()}
        >
          Login
        </Button>
      )}
      <Typography
        className="navbar-btn"
        style={{ marginTop: "3px", width: "135px", marginLeft: "10px" }}
      >
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: "3px" }}>More</Typography>
      <Container to="/cart">
        <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{ marginLeft: "10px" }}>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
