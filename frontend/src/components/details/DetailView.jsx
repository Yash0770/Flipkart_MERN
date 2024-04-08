import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, styled } from "@mui/material";
import { getProductDetails } from "../../redux/actions/productActions";

import { useParams } from "react-router-dom";
import ActionItem from "./ActionItem";
import ProductDetial from "./ProductDetial";

const Component = styled(Box)`
  background: #f2f2f3;
  margin-top: 55px;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: "#ffffff",
  diplay: "flex",

  [theme.breakpoints.down('md')]:{
    margin: 0
  }
}));

const RightContainer = styled(Grid)`
  margin-top: 50px;
  padding-left: 25px;
  & > p {
    // margin-top: 10px
  }
`;

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { product, loading } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);

  console.log("product", product);

  return (
    <Component>
      {product && Object.keys(product).length && (
        <Container container>
          {/* <Grid item lg={4} md={4} sm={8} xs={12}> */}
          <Grid item lg={5} md={6} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          {/* <RightContainer item lg={8} md={8} sm={8} xs={12}> */}
          <RightContainer item lg={7} md={6} sm={8} xs={12}>
            <ProductDetial product={product} />
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default DetailView;
