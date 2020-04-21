import React from "react";
import { connect } from "react-redux";

import { googleSignInStart } from "../../redux/user/user.actions";

import { Social } from "./googleAndFacebook.styles";

const GoogleAndFacebook = ({ googleSignInStart }) => {
  return (
    <div>
      <Social type="facebook">CONTINUE WITH FACEBOOK</Social>
      <Social type="google" onClick={googleSignInStart}>
        CONTINUE WITH GOOGLE
      </Social>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(null, mapDispatchToProps)(GoogleAndFacebook);
