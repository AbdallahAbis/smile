import React from "react";

import visa from "../../assets/icons/payments/visa.svg";
import express from "../../assets/icons/payments/express.svg";
import mastercard from "../../assets/icons/payments/mastercard.svg";
import facebook from "../../assets/icons/social/facebook.svg";
import twitter from "../../assets/icons/social/twitter.svg";
import linkedin from "../../assets/icons/social/linkedin.svg";

import {
  Container,
  TopFooter,
  BottomFooter,
  Categories,
  Payments,
  Follow,
  About,
  IconsContainer,
  PaymentIcons,
  FollowIcons,
  Title,
  Link,
  LogoContainer,
  Rights,
  StyledLogo
} from "./footer.styles";

const Footer = () => (
  <Container>
    <TopFooter>
      <Categories>
        <Title>CATEGORIES</Title>
        <Link to="/store/women">Women</Link>
        <Link to="/store/men">Men</Link>
        <Link to="/store/girls">Girls</Link>
        <Link to="/store/boys">Boys</Link>
      </Categories>

      <Payments>
        <Title>PAYMENT METHODS</Title>
        <IconsContainer>
          <PaymentIcons src={visa} alt="payment" />
          <PaymentIcons src={mastercard} alt="payment" />
          <PaymentIcons src={express} alt="payment" />
        </IconsContainer>
      </Payments>
      <Follow>
        <Title>FOLLOW US</Title>
        <IconsContainer>
          <a
            href="https://www.facebook.com/abis.abdellah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FollowIcons src={facebook} alt="social" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdallah-abis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FollowIcons src={linkedin} alt="social" />
          </a>
          <a
            href="https://twitter.com/Dev_abis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FollowIcons src={twitter} alt="social" />
          </a>
        </IconsContainer>
      </Follow>

      <About>
        <Title>ALL ABOUT US</Title>
        <Link to="/contact">Contact Us</Link>
        <Link to="/contact">About Us</Link>
        <Link to="/contact">Our Location</Link>
        <Link to="/contact">FAQ</Link>
      </About>
    </TopFooter>
    <BottomFooter>
      <LogoContainer>
        <StyledLogo color="white" />
      </LogoContainer>
      <Rights>
        Designed & Developed by{" "}
        <Link to="https://twitter.com/Dev_abis">
          <strong>Abdallah Abis</strong>
        </Link>
      </Rights>
    </BottomFooter>
  </Container>
);

export default Footer;
