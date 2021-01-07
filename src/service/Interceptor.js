import Axios from "axios";
import {
  responseSuccess,
  responseError,
  requestSuccess,
  requestError,
} from "./InterceptorHelper";

const defaultInterceptor = {
  requestSuccess,
  responseError,
  responseSuccess,
  requestError,
};

/**
 * Base class for all interceptors
 * Provide all necesarry methods and default interceptors for request and response handling
 */
class Interceptor {
  /**
   * Contructor for base value initialisations
   * @param {domain url} baseURL - API domain URL
   * @param {object} interceptors - object of interceptor functions for request and response handler if provided overrided defaultFunctions
   */
  constructor(baseURL, interceptors = defaultInterceptor) {
    this.baseURL = baseURL;
    this.instance = Axios.create({
      baseURL: this.baseURL,
    });
    this.instance.interceptors.request.use(
      interceptors.requestSuccess,
      interceptors.requestError
    );
    this.instance.interceptors.response.use(
      interceptors.responseSuccess,
      interceptors.responseError
    );
  }

  /**
   * Standerd HTTP GET method
   * @param {string} url - API endpoint for get method
   * @param {object} config - Configuration object, cancel token, time out etc
   */
  _GET(url, config) {
    return this.instance.get(url, config);
  }

  /**
   * Standerd HTTP POST method
   * @param {string} url - API endpoint for post method
   * @param {object} payload -
   * @param {object} config -
   */
  _POST(url, payload, config) {
    return this.instance.post(url, payload, config);
  }

  _UPDATE(url, payload, config) {
    this.instance.put(url, payload, config);
  }

  _DELETE(url, payload, config) {
    this.instance.delete(url, payload, config);
  }
}
export default Interceptor;
