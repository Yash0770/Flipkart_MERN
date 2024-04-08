import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";

import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const BoxComponent = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Header = () => {
  // const logoUrl = 'https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg'
  const logoUrl =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subUrl =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: "55px" }}>
        <MenuButton color="inherit" onClick={handleOpen}>
          <MenuIcon />
        </MenuButton>
        <Drawer open={open} onClose={handleClose}>
          <Box style={{ width: "200px" }} onClick={handleClose}>
            <List>
              <ListItem button>
                <CustomButtons />
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <BoxComponent to="/">
          <img src={logoUrl} alt="flipkart-logo" style={{ width: "75px" }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </SubHeading>
            <img
              src={subUrl}
              alt="sub-logo"
              style={{ width: "10px", height: "10px", marginLeft: "4px" }}
            />
          </Box>
        </BoxComponent>
        <Search />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
