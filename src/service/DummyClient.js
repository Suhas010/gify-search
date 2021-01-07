import Interceptor from "./Interceptor";
import { PRODUCTS } from '../utils/constants';
import { getProductDetails } from '../utils/helper';

class Client extends Interceptor {
  constructor(props) {
    super(props || "http://localhost:3001");
  }
  GET(url, config) {
    return this._GET(url, config);
  }
  getProducts(callback) {
    setTimeout(() => {
      callback(PRODUCTS);
    }, 3000);
  }

  getProductByID(id, callback) {
    setTimeout(() => {
      callback(getProductDetails(id));
    }, 1000);
  }
}

const DummyClient = new Client();

export default DummyClient;
