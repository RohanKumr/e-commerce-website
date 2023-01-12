import React, { useCallback, useEffect, useState, memo, useMemo } from "react";

function Test2({ change, changeHandler, parentFunction }) {
  const [counter1, setcounter1] = useState(0);
  const [counter2, setcounter2] = useState(0);

  const buttonStyle = {
    padding: "20px",
    margin: "20px",
    display: "block",
    margin: "auto",
    maxWidth: "150px",
  };

  // console.log(result);
  return (
    <div>
      {/* {console.log("CHILD COMPONENT")} */}
      {/* <button style={buttonStyle} onClick={() => setcounter1(counter1 + 1)}>
        {" "}
        Counter1 {counter1}{" "}
      </button>
      <div style={buttonStyle}>{isEven ? "EVEN" : "ODD"}</div>
      <button style={buttonStyle} onClick={() => setcounter2(counter2 + 1)}>
        {" "}
        Counter2 {counter2}{" "}
      </button> */}
    </div>
  );
}
export default memo(Test2);
