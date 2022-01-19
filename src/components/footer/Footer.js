import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WebIcon from '@mui/icons-material/Web';
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
            <Heading>Services</Heading>
            <FooterLink href="#">
            <WebIcon style={{ padding:'1px'}}/> Web Page</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
           
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="https://www.linkedin.com/in/steven-rodriguez-dev13/" target="_blank">
               <LinkedInIcon style={{ padding:'1px'}}/> 
               LinkedIn  
            </FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.instagram.com/stevendev13/?hl=es" target="_blank">
            <InstagramIcon style={{ padding:'1px'}}/> 
            Instagram</FooterLink>
            <FooterLink href="https://github.com/Steven-Rodriguez-git" target="_blank">
                <GitHubIcon style={{ padding:'1px'}}/> 
                 Git Hub 
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;