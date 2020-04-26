import React from "react";
import { connect } from "react-redux";

import {
  googleSignInStart,
  facebookSignInStart
} from "../../redux/user/user.actions";

import {
  FacebookAndGoogleContainer,
  Social,
  Paragraph
} from "./googleAndFacebook.styles";

const GoogleAndFacebook = ({ googleSignInStart, facebookSignInStart }) => (
  <FacebookAndGoogleContainer>
    <Paragraph>Continue with your Facebook or Google!</Paragraph>
    <Social type="facebook" onClick={facebookSignInStart}>
      CONTINUE WITH FACEBOOK
    </Social>
    <Social type="google" onClick={googleSignInStart}>
      CONTINUE WITH GOOGLE
    </Social>
  </FacebookAndGoogleContainer>
);

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  facebookSignInStart: () => dispatch(facebookSignInStart())
});

export default connect(null, mapDispatchToProps)(GoogleAndFacebook);
