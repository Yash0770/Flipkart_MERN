import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  styled,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p{
    margin-top:10px
    font-size: 14px;
    }
`;

const StyledBadge = styled(LocalOfferIcon)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 20px;
`;

const ColumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;

  & > td {
    font-size: 14px;
    margin-top: 10px;
    border: none;
  }
`;

const ProductDetial = ({ product }) => {
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography
        style={{ marginTop: "5px", color: "#878787", fontSize: "14px" }}
      >
        102 Rating & 12 Review
        <Box component="span">
          <img src={fassured} style={{ width: "77px", marginLeft: "20px" }} alt="assured" />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: "28px" }}>
          ₹{product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388e3c" }}>
          {product.price.discount}
        </Box>
      </Typography>
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography>
          <StyledBadge /> Get extra 25% off upto ₹100 on 1 item(s) T&C
        </Typography>
        <Typography>
          <StyledBadge /> 5% Cashback on Flipkart Axis Bank Card T&C
        </Typography>
        <Typography>
          <StyledBadge /> Offer₹750 Off On UPI Transaction
        </Typography>
        <Typography>
          <StyledBadge /> Get extra ₹14901 off (price inclusive of
          cashback/coupon) T&C
        </Typography>
      </SmallText>
      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: "600" }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <Box component="span" style={{ color: "#2874f0" }}>
                SuperConNet
              </Box>
              <Typography>GST invoice available</Typography>
              <Typography>
                View more seller starting from ₹{product.price.cost}
              </Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell colSpan={2}>
              <img src={adURL} style={{ width: "390px" }} alt="ad" />
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetial;
