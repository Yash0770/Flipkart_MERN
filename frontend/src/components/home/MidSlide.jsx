import React from "react";
import { Box, styled } from "@mui/material";
import Slide from "./Slide";

const Component = styled(Box)`
  display: flex;
`;

const LeftComponet = styled(Box)(({ theme }) => ({
  width: "83%",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const RightComponet = styled(Box)(({ theme }) => ({
  background: "#ffffff",
  padding: "5px",
  marginTop: "10px",
  marginLeft: "10px",
  width: "17%",
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MidSlide = ({ products, title, timer }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  return (
    <Component>
      <LeftComponet>
        <Slide products={products} title={title} timer={timer} />
      </LeftComponet>
      <RightComponet>
        <img src={adURL} alt="ad" style={{ width: "217px" }} />
      </RightComponet>
    </Component>
  );
};

export default MidSlide;
