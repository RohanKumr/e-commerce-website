import { fetchWithRetryAndTimeOut, fetchWithTimeout } from "../helpers/fetch";

const getCustomHeaders = () => ({
  "Content-type": "application/json; charset=UTF-8",
  // 'x-country-viewer': fetchCountryCodeFromUrl()
});

const getRequestWithTimeOutAsync = async ({
  url,
  retry = false,
  timeout = 10000,
}) => {
  const functionCall = retry ? fetchWithRetryAndTimeOut : fetchWithTimeout;
  const requestOptions = {
    method: "GET",
    headers: getCustomHeaders(),
  };
  return functionCall(url, requestOptions, timeout)
    .then((res) => res.json())
    .catch((error) => error);
};

const postRequestWithTimeOutAsync = async ({
  url,
  body,
  retry = false,
  timeout = 10000,
  retryCount = 0,
}) => {
  const functionCall = retry ? fetchWithRetryAndTimeOut : fetchWithTimeout;
  const requestOptions = {
    method: "POST",
    headers: getCustomHeaders(),
    body: JSON.stringify(body),
  };
  return functionCall(url, requestOptions, timeout, retryCount)
    .then((res) => res.json())
    .catch((error) => error);
};

const getRequestAsync = async ({ url }) => {
  const requestOptions = {
    method: "GET",
    headers: getCustomHeaders(),
  };
  return fetch(url, requestOptions)
    .then((res) => res.json())
    .catch((error) => error);
};

const postRequestAsync = async ({ url, body }) => {
  const requestOptions = {
    method: "POST",
    headers: getCustomHeaders(),
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions)
    .then((res) => res.json())
    .catch((error) => error);
};

const putRequestAsync = async ({ url, body }) => {
  const requestOptions = {
    method: "PUT",
    headers: getCustomHeaders(),
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions)
    .then((res) => res.json())
    .catch((error) => error);
};

export {
  getRequestAsync,
  postRequestAsync,
  putRequestAsync,
  getRequestWithTimeOutAsync,
  postRequestWithTimeOutAsync,
};
