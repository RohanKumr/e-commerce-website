import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import React from "react";
// import { useRouter } from "next/router";

export const UserContext = React.createContext();

function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  // if (router.pathname === "/404") return <Component {...pageProps} />;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
