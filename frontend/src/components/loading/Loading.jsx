import React from "react";
import { Box, Typography, styled } from "@mui/material";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

const Component = styled(Box)`
  height: 60vh;
  width: 80%;
  background: #ffffff;
  margin: 80px 140px;
`;

const Container = styled(Box)`
  text-align: center;
  padding-top: 120px;
`;

const Loading = () => {
  return (
    <Component>
      <Container>
        <HourglassEmptyIcon style={{ width: "40px", height: "40px" }} />
        <Typography className="mt-2">Loading</Typography>
      </Container>
    </Component>
  );
};

export default Loading;
