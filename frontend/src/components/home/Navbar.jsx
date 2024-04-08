import React from "react";
import { Box, styled } from "@mui/material";
import { navData } from "../../constants/data";

const Navbar = () => {
  const Component = styled(Box)(({ theme }) => ({
    display: "flex",
    margin: "55px 130px 0 130px",
    justifyContent: "space-between",
    // overflow: 'overlay',
    overflow: "hidden",

    [theme.breakpoints.down("lg")]: {
      margin: 0,
    },
  }));

  return (
    <Box style={{background: '#ffffff'}}>
    <Component
    // className="d-flex justify-content-between"
    >
      {navData.map((data) => (
        <div className="pt-3 px-1 text-center">
          <img src={data.url} alt="nav-img" style={{ width: "64px" }} />
          <p
            className=""
            style={{
              fontSize: "14px",
              fontWeight: "600",
              fontFamily: "inherit",
            }}
          >
            {data.text}
          </p>
        </div>
      ))}
    </Component>
    </Box>
  );
};

export default Navbar;
