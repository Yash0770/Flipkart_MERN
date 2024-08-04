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
  const [errors, setErrors] = useState({});

  const { setAccount } = useContext(DataContext);

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signUp);
    setErrors({});
  };

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setErrors({});
  };

  const onInputChange = (e) => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value,
    });
  };

  const onValueChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const validateSignup = () => {
    const newErrors = {};

    if (!signup.firstname.trim()) {
      newErrors.firstname = "First name is required";
    } else if (signup.firstname.length < 5) {
      newErrors.firstname = "First name must be at least 5 characters long";
    }

    if (!signup.lastname.trim()) {
      newErrors.lastname = "Last name is required";
    } else if (signup.lastname.length < 5) {
      newErrors.lastname = "Last name must be at least 5 characters long";
    }

    if (!signup.username.trim()) {
      newErrors.username = "Username is required";
    } else if (signup.username.length < 5) {
      newErrors.username = "Username must be at least 5 characters long";
    } else if (!/^[a-zA-Z0-9_]+$/.test(signup.username)) {
      newErrors.username =
        "Username can only contain letters, numbers, and underscores";
    }

    if (!signup.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(signup.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!signup.password) {
      newErrors.password = "Password is required";
    } else if (signup.password.length < 8 || signup.password.length > 14) {
      newErrors.password = "Password must be between 8 and 14 characters long";
    } else if (!/(?=.*[a-z])/.test(signup.password)) {
      newErrors.password = "Password must include a lowercase letter";
    } else if (!/(?=.*[A-Z])/.test(signup.password)) {
      newErrors.password = "Password must include an uppercase letter";
    } else if (!/(?=.*\d)/.test(signup.password)) {
      newErrors.password = "Password must include a number";
    } else if (!/(?=.*[@$!%*?&])/.test(signup.password)) {
      newErrors.password = "Password must include a special character (@$!%*?&)";
    }

    if (!signup.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(signup.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateLogin = () => {
    const newErrors = {};

    if (!login.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!login.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const signupUser = async () => {
    if (!validateSignup()) return;
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname);
  };

  const loginUser = async () => {
    if (!validateLogin()) return;
    let response = await authenticateLogin(login);
    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data.firstname);
    } else {
      setErrors({ general: "Invalid username or password" });
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
                label="Enter Username"
                onChange={(e) => onValueChange(e)}
                name="username"
              />
              {errors.username && <Error>{errors.username}</Error>}

              <TextField
                variant="standard"
                label="Enter Password"
                className="mt-3"
                onChange={(e) => onValueChange(e)}
                name="password"
                type="password"
              />
              {errors.password && <Error>{errors.password}</Error>}
              {errors.general && <Error>{errors.general}</Error>}
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
                // error={!!errors.firstname}
                // helperText={errors.firstname}
              />
              {errors.firstname && <Error>{errors.firstname}</Error>}
              <TextField
                name="lastname"
                variant="standard"
                label="Enter Lastname"
                className="mt-3"
                onChange={(e) => onInputChange(e)}
              />
              {errors.lastname && <Error>{errors.lastname}</Error>}
              <TextField
                name="username"
                variant="standard"
                label="Enter Username"
                className="mt-3"
                onChange={(e) => onInputChange(e)}
              />
              {errors.username && <Error>{errors.username}</Error>}
              <TextField
                name="email"
                variant="standard"
                label="Enter Email"
                className="mt-3"
                onChange={(e) => onInputChange(e)}
              />
              {errors.email && <Error>{errors.email}</Error>}
              <TextField
                name="password"
                variant="standard"
                label="Enter Password"
                className="mt-3"
                onChange={(e) => onInputChange(e)}
                type="password"
              />
              {errors.password && <Error>{errors.password}</Error>}
              <TextField
                name="phone"
                variant="standard"
                label="Enter Phone"
                className="mt-3"
                onChange={(e) => onInputChange(e)}
              />
              {errors.phone && <Error>{errors.phone}</Error>}
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
