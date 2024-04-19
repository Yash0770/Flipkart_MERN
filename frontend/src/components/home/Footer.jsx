import { Box, Typography, styled } from "@mui/material";
import React from "react";

const Footer = () => {
  const Component = styled(Box)`
    background: #232325;
    user-select: none;
    padding: 0;
  `;

  const Container = styled(Box)`
    padding: 10px 0px 10px 0px;
  `;

  const Heading = styled(Typography)`
    text-transform: uppercase;
    font-size: 0.8rem;
    margin-bottom: 10px;
  `;

  const UnorderedList = styled("ul")({
    padding: 0,
  });

  const List = styled("li")({
    fontSize: "0.8rem",
    listStyle: "none",
    width: "120px",
    marginTop: "0px",
  });

  const Paragraph = styled(Typography)`
  font-size: 0.8rem;
  color: white;
  `;

  const CopyRight = styled('span')({
    color:'white',
    fontSize: "0.8rem",
    fontWeight: 400,
    marginRight: '30px'
  })

  return (
    <>
      <Component className="container-fluid">
        <Container className="container">
          <div className="row d-flex">
            {/* <div className="col-lg-7 col-md-12 col-sm-12 d-flex"> */}
              <div className="col-lg-3 col-md-6 d-flex flex-column mt-3">
                <Heading style={{ color: "#8c8c8c" }}>About</Heading>
                <UnorderedList>
                  <List>
                    <a className="custom-anchor-tag" href="https://google.com">
                      Contact Us
                    </a>
                  </List>
                  <List>
                    {" "}
                    <a className="custom-anchor-tag" href="https://google.com">
                      About Us
                    </a>
                  </List>
                  <List>
                    {" "}
                    <a className="custom-anchor-tag" href="https://google.com">
                      Careers
                    </a>
                  </List>
                  <List>
                    {" "}
                    <a className="custom-anchor-tag" href="https://google.com">
                      Flipkart Stories
                    </a>
                  </List>
                  <List>
                    {" "}
                    <a className="custom-anchor-tag" href="https://google.com">
                      Press
                    </a>
                  </List>
                </UnorderedList>
              </div>
              <div className="col-lg-3 col-md-6 d-flex flex-column mt-3">
                <Heading style={{ color: "#8c8c8c" }}>Group Companies</Heading>
                <UnorderedList>
                  <List>
                    <a className="custom-anchor-tag" href="https://google.com">
                      Myntra
                    </a>
                  </List>
                  <List>
                    {" "}
                    <a className="custom-anchor-tag" href="https://google.com">
                      Flipkart Wholesale
                    </a>
                  </List>
                  <List>
                    {" "}
                    <a className="custom-anchor-tag" href="https://google.com">
                      Cleartrip
                    </a>
                  </List>
                  <List>
                    {" "}
                    <a className="custom-anchor-tag" href="https://google.com">
                      Shopsy
                    </a>
                  </List>
                </UnorderedList>
              </div>
            {/* </div> */}
            {/* <div className="vertical-line"></div> */}
            {/* <div className="col-lg-5 col-md-12 col-sm-12 text-white d-flex"> */}
              <div className="col-lg-3 col-md-6 d-flex flex-column mt-3">
              <Heading style={{ color: "#8c8c8c" }}>Mail Us:</Heading>
                
                <Paragraph>Flipkart Internet Private Limited, </Paragraph>
                <Paragraph> Buildings Alyssa, Begonia &  </Paragraph>
                <Paragraph> Clove Embassy Tech Village,  </Paragraph>
                <Paragraph> Outer Ring Road, Devarabeesanahalli Village,  </Paragraph>
                <Paragraph> Bengaluru, 560103,  </Paragraph>
                <Paragraph> Karnataka, India </Paragraph>

              </div>
              <div className="col-lg-3 col-md-6 mt-3">
              <Heading style={{ color: "#8c8c8c" }}>Registered Office Address:</Heading>

              <Paragraph>Flipkart Internet Private Limited, </Paragraph>
                <Paragraph> Buildings Alyssa, Begonia &  </Paragraph>
                <Paragraph> Clove Embassy Tech Village,  </Paragraph>
                <Paragraph> Outer Ring Road, Devarabeesanahalli Village,  </Paragraph>
                <Paragraph> Bengaluru, 560103,  </Paragraph>
                <Paragraph> Karnataka, India </Paragraph>
                <Paragraph>  CIN : U51109KA2012PTC066107  </Paragraph>
                <Paragraph>  Telephone: &nbsp;
                <a href="tel:044-45614700">044-45614700</a>
                   </Paragraph>

              </div>
            {/* </div> */}
          </div>
        </Container>
        <div className="horizontal-line mt-4"></div>
        <Container className="container">
        <div className="d-flex justify-content-center mt-3">
            <CopyRight className="text-white">© 2007-2024 &nbsp;
            <CopyRight className="text-white">Flipkart.com</CopyRight>
            </CopyRight>
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="card"/>
          </div>
        </Container>
      </Component>
    </>
  );
};

export default Footer;
