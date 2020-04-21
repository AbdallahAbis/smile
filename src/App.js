import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ScrollToTop from "./utils/scrollTop";

import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import HomePage from "./pages/homePage/homePage.component";
import StorePage from "./pages/storePage/storePage.component";
import SignUpPage from "./pages/signupPage/signupPage.component";
import ContactUsPage from "./pages/contactUsPage/contactUsPage.component";
import CheckoutPage from "./pages/checkoutPage/checkoutPage.component";
import ProductPage from "./pages/productPage/productPage.component";
import CategoryPage from "./pages/categoryPage/categoryPage.component";

import "./App.scss";
import LoginPage from "./pages/loginPage/loginPage.component";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <React.Fragment>
      <ScrollToTop />
      <Route path="/" component={Header} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/store/:categoryName/:name"
          component={ProductPage}
        />
        <Route exact path="/store" component={StorePage} />
        <Route
          exact
          path="/log-in"
          render={() => (currentUser ? <Redirect to="/" /> : <LoginPage />)}
        />
        <Route
          exact
          path="/sign-up"
          render={() => (currentUser ? <Redirect to="/" /> : <SignUpPage />)}
        />
        <Route exact path="/contact" component={ContactUsPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/store/:categoryName" component={CategoryPage} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
