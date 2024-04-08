import { Box, Button, Typography, styled } from "@mui/material";
import { addEllipsis } from "../../utils/common-utils";
import React from "react";
import ButtonGroup from "./ButtonGroup";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background: #ffffff;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const RightComponent = styled(Box)`
  margin: 20px;
`;

const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000000;
  font-weight: 600;
`;

const CartItem = ({ item }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Component>
      <LeftComponent>
        <img
          src={item.url}
          alt="product"
          style={{ height: "110px", width: "110px" }}
        />
        <ButtonGroup />
      </LeftComponent>
      <RightComponent>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <SmallText>
          Seller : RetailJio
          <Box component="span">
            <img
              src={fassured}
              alt="flipkart"
              style={{ width: "50px", marginLeft: "10px" }}
            />
          </Box>
        </SmallText>
        <Typography style={{ margin: "20px 0px" }}>
          <Box component="span" style={{ fontWeight: "600", fontSize: "18px" }}>
            ₹{item.price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#878787" }}>
            <strike>₹{item.price.mrp}</strike>
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#388e3c" }}>
            {item.price.discount}
          </Box>
        </Typography>
        <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
      </RightComponent>
    </Component>
  );
};

export default CartItem;
