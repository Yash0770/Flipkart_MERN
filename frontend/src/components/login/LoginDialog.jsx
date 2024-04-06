import React, { useState, useContext } from "react";
import { Button, Dialog, TextField, Typography, styled } from "@mui/material";

import { authenticateLogin, authenticateSignup } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Error = styled(Typography)`
  margin-top: 10px;
  font-weight: 600;
  font-size: 10px;
  line-height: 0;
  color: #ff6161;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signUp: {
    view: "signup",
    heading: "Looks like you are new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);

  const { setAccount } = useContext(DataContext);

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signUp);
  };

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false);
  };

  const onInputChange = (e) => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value,
    });
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    console.log("res", response);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname);
  };

  const onValueChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: [e.target.value],
    });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    console.log("res", response);
    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data.firstname);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <div className="row" style={{ height: "70vh", width: "90vh" }}>
        <div className="d-flex" style={{ height: "100%" }}>
          <div
            className="col-lg-4"
            style={{
              background: "#2874f0",
              height: "100%",
              //   width: "40%",
              width: "35%",
              padding: "45px 35px",
            }}
          >
            <h3 className="text-white" style={{ fontWeight: "600" }}>
              {account.heading}
            </h3>
            <div className="mt-4 text-white" style={{ fontWeight: "600" }}>
              {account.subHeading}
            </div>
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
              style={{ marginTop: "20vh", marginRight: "40px", height: "26%" }}
              alt="login-dialog-img"
            />
          </div>
          {account.view === "login" ? (
            <div
              className="colg-lg-8 d-flex mt-3"
              style={{
                flexDirection: "column",
                padding: "25px 35px",
                flex: "1",
              }}
            >
              <TextField
                variant="standard"
                // label="Enter Email/Mobile Number"
                label="Enter Username"
                onChange={(e) => onValueChange(e)}
                name="username"
              />
              {error && <Error>Please enter valid username or password</Error>}
              <TextField
                variant="standard"
                label="Enter Password"
                className="mt-3"
                onChange={(e) => onValueChange(e)}
                name="password"
              />
              <p
                className="mt-3"
                style={{ fontSize: "12px", color: "#878787" }}
              >
                By continuing, you agree to Flipkart's Terms of use and Privacy
                Policy.
              </p>
              <Button
                className="mt-3 text-white"
                style={{
                  textTransform: "none",
                  background: "#fb641b",
                  height: "48px",
                  borderRadius: "2px",
                }}
                onClick={() => loginUser()}
              >
                Login
              </Button>
              <p className="mt-3 text-center">OR</p>
              <Button
                className="mt-3"
                style={{
                  textTransform: "none",
                  background: "#ffffff",
                  color: "#2874f0",
                  height: "48px",
                  borderRadius: "2px",
                  boxShadow: "0 2px 4px 0 rgb(0 0 0/ 20%)",
                }}
              >
                Request OTP
              </Button>
              <p
                className="mt-3"
                style={{
                  fontSize: "14px",
                  textAlign: "center",
                  color: "#2874f0",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
                onClick={() => toggleSignup()}
              >
                New to Flipkart? Create an account
              </p>
            </div>
          ) : (
            <div
              className="colg-lg-8 d-flex mt-3"
              style={{
                flexDirection: "column",
                padding: "25px 35px",
                flex: "1",
              }}
            >
              <TextField
                name="firstname"
                variant="standard"
                label="Enter Firstname"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="lastname"
                variant="standard"
                label="Enter Lastname"
                className="mt-3"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="username"
                variant="standard"
                label="Enter Username"
                className="mt-3"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="email"
                variant="standard"
                label="Enter Email"
                className="mt-3"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="password"
                variant="standard"
                label="Enter Password"
                className="mt-3"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="phone"
                variant="standard"
                label="Enter Phone"
                className="mt-3"
                onChange={(e) => onInputChange(e)}
              />
              <Button
                className="mt-4 text-white"
                style={{
                  textTransform: "none",
                  background: "#fb641b",
                  height: "48px",
                  borderRadius: "2px",
                }}
                onClick={() => signupUser()}
              >
                Continue
              </Button>
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default LoginDialog;
