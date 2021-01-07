const { default: Interceptor } = require("./Interceptor");

// to override base url pass url while creating class instance. new Client(newURL)
class Client extends Interceptor {
  constructor(baseURL) {
    super(baseURL || "https://reqres.in/");
  }
  GET(url, config) {
    return this._GET(url, config);
  }
}

export default Client;
