/**
 * Custome config success handler interceptor method
 * @param {object} config
 */
export const requestSuccess = (config) => {
  // set headers and jwt tokens
  config = {
    ...config,
    headers: {
      ...config.headers,
      "Content-Type": "application/json",
    },
  };
  return config;
};

/**
 * Custome config error handler interceptor method
 * @param {object} response
 */
export const requestError = (error) => {
  return Promise.reject(error);
};

/**
 * Custome response success handler interceptor method
 * @param {object} response
 */
export const responseSuccess = (response) => {
  return response;
};

/**
 * Custome response error handler interceptor method
 * @param {object} response
 */
export const responseError = (error) => {
  // TODO
  // HANDLE ALL HTTP CODES
  // const {
  //   response: { status: statusCode }
  // } = error;
  // if (statusCode && statusCode === 401) {
  //    logout user if status code is 401
  // }
  return error;
};
