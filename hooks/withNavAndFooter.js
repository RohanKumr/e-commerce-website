import React from "react";
import Footer from "../page-assets/Footer";
import Navbar from "../page-assets/Navbar";

function withNavAndFooter(Wrapper) {
  return function (props) {
    return (
      <>
        <Navbar />
        <Wrapper {...props} />
        <Footer />
      </>
    );
  };
}

export default withNavAndFooter;
