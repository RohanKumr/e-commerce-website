import next from "next";
import React, { useCallback, useEffect, useState } from "react";
import Test2 from "./test2";
const link = `https://jsonplaceholder.typicode.com/todos/1`;
// const link = `https://jsonplaceholder.typicode.com/posts`;

export default function index(props) {
  const [counterOne, setCounter1] = useState(0);
  const [counterTwo, setCounterTwo] = useState("hi");

  return (
    <>
      {/* <input type="text"  value={value} /> */}
      <button onKeyUp={() => debounce(func, 300)}>DEBOUNCE </button>
      <div>{value}</div>
      <div>{counterTwo}</div>
      {/* <div>{data?.title}</div> */}
      {/* <Test2 counterOne={counterOne} /> */}
      {/* <button onClick={() => setCounter1(counterOne + 1)}>
        Parent Button | {counterOne}
      </button> */}
    </>
  );
}
