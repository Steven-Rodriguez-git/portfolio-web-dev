import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyle";

const Footer = () => {
  return (
    <Box botton={0}>
      <Container>
        <Row>
          <Column>
            <Heading>  <FormattedMessage id="footer.repository"/></Heading>
            <FooterLink
              href="https://github.com/Steven-Rodriguez-git"
              target="_blank"
            >
              Git Hub
              <GitHubIcon style={{ padding: "1px" }} />
            </FooterLink>
  
          </Column>
          <Column>
            <Heading> <FormattedMessage id="footer.contact"/></Heading>
            <FooterLink
              href="https://www.linkedin.com/in/steven-rodriguez-dev13/"
              target="_blank"
            >
              LinkedIn
              <LinkedInIcon style={{ padding: "1px" }} />
            </FooterLink>
            
          </Column>
          <Column>
            <Heading> <FormattedMessage id="footer.social"/></Heading>
            <FooterLink
              href="https://www.instagram.com/stevendev13/?hl=es"
              target="_blank"
            >
              Instagram
              <InstagramIcon style={{ padding: "1px" }} />{" "}
            </FooterLink>
       
          </Column>
        </Row>
        <Typography
          variant="h7"
          style={{ textAlign: "center", color: "#fafafa" }}
        >
           <FormattedMessage id="footer.footer"/>
        </Typography>
        <Typography
          variant="h7"
          style={{ textAlign: "center", color: "#fafafa" }}
        >
          2022 Steven Developer
        </Typography>
      </Container>
    </Box>
  );
};
export default Footer;
