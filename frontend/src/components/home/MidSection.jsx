import { Grid, StyledEngineProvider, styled } from "@mui/material";
import React from "react";
import { imageURL } from "../../constants/data";
import FlipkartBanner from "../../images/new.png";

const Wrapper = styled(Grid)`
  margin-top: 10px;
  justify-content: space-between;
`;

const FlipartBannerImage = styled("img")(({ theme }) => ({
  marginTop: 10,
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  // height:'600px'

  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 120,
  },
  // [theme.breakpoints.up('xs')]:{
  //     objectFit: 'cover',
  //     height: 480,
  //     // overflow: 'hidden',
  // }
}));

const MidSection = () => {
  const url =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";

  return (
    <>
      {/* <FlipartBannerImage src={FlipkartBanner} alt="img" /> */}

      <Wrapper lg={12} sm={12} sm={12} container>
        {imageURL.map((image) => (
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <img src={image} alt="image" style={{ width: "100%" }} />
          </Grid>
        ))}
      </Wrapper>
    </>
  );
};

export default MidSection;
