import apiConfig from "../../config/apiConfig";
import { getRequestAsync, postRequestAsync } from "../apiInstance";

export const createUserAsync = (body) => {
  const url = `${apiConfig.api_endpoint}/users`;
  return postRequestAsync({ url, body });
};

export const loginUserAsync = (body) => {
  const url = `${apiConfig.api_endpoint}/auth/login`;
  return postRequestAsync({ url, body });
};

export const getUserInfoAsync = ({ id }) => {
  const url = `${apiConfig.api_endpoint}/users/${id}`;
  return getRequestAsync({ url, body });
};

export const getAllUsersAsync = () => {
  const url = `${apiConfig.api_endpoint}/users`;
  return getRequestAsync({ url });
};
