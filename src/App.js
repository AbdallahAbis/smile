import React from "react";

import Header from "./components/header/header.component";

import HomePage from "./pages/homePage/homePage.component";

import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <Header />
      <HomePage />
    </React.Fragment>
  );
}

export default App;
