import styled from "styled-components";

export const LoginWrapper = styled.div`
  min-height: 85vh;
  display: grid;
  place-items: center;
  h1 {
    margin: auto;
  }
  button,
  input {
    padding: 16px;
  }
  button {
    background: #000000;
    color: #ffffff;
    font-weight: bold;
  }
  .switch-states {
    margin: auto;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;
export const LoginContainer = styled.form`
  max-width: 500px;
  width: 100%;
  padding: 80px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const SignUpContainer = styled.form`
  max-width: 500px;
  width: 100%;
  padding: 80px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
