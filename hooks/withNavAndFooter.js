import React from "react";
import Footer from "../page-assets/Footer";
import Navbar from "../page-assets/Navbar";

function withNavAndFooter(Wrapper, footer = true) {
  return function (props) {
    return (
      <>
        <Navbar />
        <Wrapper { ...props } />
        {/* {footer ? <Footer /> : null} */ }
        <Footer />
      </>
    );
  };
}

export default withNavAndFooter;
