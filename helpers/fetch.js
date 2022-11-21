export const fetchWithTimeout = (url, options, timeout = 10000) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), timeout)
    ),
  ]);
};

function timeOut(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchWithRetryAndTimeOut = async (
  url,
  options,
  timeout = 10000,
  retryCount = 2
) => {
  try {
    //wait for 2 sec
    await timeOut(2000);
    const response = await fetch(url, options);
    if (response.ok || retryCount === 1) return response;
    throw Error("Retrying");
    // return response;
  } catch (error) {
    if (retryCount < 1) throw Error(error);
    return await fetchWithRetryAndTimeOut(
      url,
      options,
      timeout,
      retryCount - 1
    );
  }
};
