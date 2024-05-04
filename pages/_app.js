import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserContext = React.createContext();

function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  // if (router.pathname === "/404") return <Component {...pageProps} />;
  return (
    <Provider store={ store }>
      <ToastContainer
        position="bottom-center"
        autoClose={ 1000 }
        theme="dark"
      />
      <Component { ...pageProps } />
    </Provider>
  );
}

export default MyApp;
