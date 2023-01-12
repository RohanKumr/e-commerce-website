import React from "react";
import Login from "../../page-assets/Login";
import withNavAndFooter from "../../hooks/withNavAndFooter";
import { WindowContainer } from "../../components/commonStyles/styles";

function index() {
  return (
    <WindowContainer>
      <Login />
    </WindowContainer>
  );
}

// export default withNavAndFooter(index);
export default index;
