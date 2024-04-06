import React, { useEffect, useState } from "react";
import { Box, InputBase, List, ListItem, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
  background: #ffffff;
  width: 38%;
  border-radius: 2px;
  margin-left: 20px;
  display: flex;
`;

const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background: #ffffff;
  color: #000;
  margin-top: 36px;
`;

const Search = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.getProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const [text, setText] = useState("");
  console.log("text", text);

  const getText = (text) => {
    setText(text);
  };

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products, brands and more"
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && (
        <ListWrapper>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link to={`/product/${product.id}`} style={{textDecoration:'none', color:'inherit'}} onClick={()=>setText('')}>
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
