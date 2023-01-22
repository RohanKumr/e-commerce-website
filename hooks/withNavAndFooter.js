import React from "react";
import Footer from "../page-assets/Footer";
import Navbar from "../page-assets/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function withNavAndFooter(Wrapper, footer = true) {
  return function (props) {
    return (
      <>
        <Navbar />
        <Wrapper {...props} />
        {/* {footer ? <Footer /> : null} */}
        <Footer />
        <ToastContainer position="bottom-left" />
      </>
    );
  };
}

export default withNavAndFooter;
