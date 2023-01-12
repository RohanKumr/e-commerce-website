import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser, loginUser } from "../../redux/slices/userSlice";

import { LoginContainer, LoginWrapper, SignUpContainer } from "./style";

export default function Login() {
  const { userData } = useSelector((state) => state.user);
  const [page, setPage] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    userName: "johnd",
    password: "m38rmF$",
  });

  const signUp = () => {
    const { firstName, lastName, userName, password } = inputData;
    dispatch(
      createNewUser({
        username: userName,
        password: password,
        name: {
          firstname: firstName,
          lastname: lastName,
        },
      })
    );
  };

  const login = (e) => {
    e.preventDefault();
    dispatch(
      loginUser({
        username: loginData.userName,
        password: loginData.password,
      })
    );
  };

  const changeInputData = (e) => {
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const changeLoginData = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (userData.isLogged) router.push("/");
  }, [userData.isLogged]);

  return (
    <LoginWrapper>
      {page ? (
        <LoginContainer>
          <h1>Login</h1>
          <input
            name="userName"
            type="text"
            placeholder="Username"
            onChange={changeLoginData}
            value={loginData.userName}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={changeLoginData}
            value={loginData.password}
            autoComplete="on"
          />
          <button onClick={login}> Login</button>
          <div className="switch-states" onClick={() => setPage(!page)}>
            Create a new Account.
          </div>
        </LoginContainer>
      ) : (
        <SignUpContainer>
          <h1>Sign Up</h1>
          <input
            name="firstName"
            value={inputData.firstName}
            type="text"
            placeholder="First Name"
            onChange={changeInputData}
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={inputData.lastName}
            onChange={changeInputData}
          />
          <input
            name="userName"
            type="text"
            onChange={changeInputData}
            placeholder="Username"
            value={inputData.userName}
          />
          <input
            name="password"
            type="password"
            onChange={changeInputData}
            placeholder="Password"
            value={inputData.password}
            autoComplete="on"
          />
          <button onClick={signUp}> Create New Account</button>
          <div className="switch-states" onClick={() => setPage(!page)}>
            Have an Account? Login here.
          </div>
        </SignUpContainer>
      )}
    </LoginWrapper>
  );
}
