import React from "react";

import {
  Container,
  InputField,
  Button,
  FormContainer,
  Title,
  DeveloperContainer,
  SubTitle,
  Detail
} from "./contactUsPage.styles";

const ContactUsPage = () => (
  <Container>
    <FormContainer>
      <Title>CONTACT US</Title>
      <InputField label="Email:" type="text" />
      <InputField label="Message:" type="textArea" />
      <Button to="#">SUBMIT</Button>
    </FormContainer>
    <DeveloperContainer>
      <SubTitle>Developer Details</SubTitle>
      <Detail>Email: Abis.Abdallah@gmail.com</Detail>
      <Detail>Phone: +212(628) 698 152</Detail>
      <Detail>Address: Ait Melloul, Morocco.</Detail>
    </DeveloperContainer>
  </Container>
);

export default ContactUsPage;
