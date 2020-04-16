import React from "react";

import Logo from "../../components/logo/logo.component";

import visa from "../../assets/icons/payments/visa.svg";
import express from "../../assets/icons/payments/express.svg";
import mastercard from "../../assets/icons/payments/mastercard.svg";
import facebook from "../../assets/icons/social/facebook.svg";
import twitter from "../../assets/icons/social/twitter.svg";
import linkedin from "../../assets/icons/social/linkedin.svg";

import {
  Container,
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
} from "./footer.styles";

const Footer = () => {
  console.log(visa);

  return (
    <Container>
      <Categories>
        <Title>CATEGORIES</Title>
        <Link>Women</Link>
        <Link>Men</Link>
        <Link>Girls</Link>
        <Link>Boys</Link>
      </Categories>
      <LogoContainer color="white">
        <Logo />
      </LogoContainer>
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
          <FollowIcons src={facebook} alt="social" />
          <FollowIcons src={linkedin} alt="social" />
          <FollowIcons src={twitter} alt="social" />
        </IconsContainer>
      </Follow>

      <About>
        <Title>ALL ABOUT US</Title>
        <Link>Contact Us</Link>
        <Link>About Us</Link>
        <Link>Our Location</Link>
        <Link>FAQ</Link>
      </About>
      <Rights>
        Designed & Developed by{" "}
        <Link>
          <strong>Abdallah Abis</strong>
        </Link>
      </Rights>
    </Container>
  );
};

export default Footer;
