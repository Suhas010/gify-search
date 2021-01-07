import Client from "./Client";

const prismStage = new Client(
  "http://localhost:3001"
);

class Request {
  getTrendData = (payload) => {
    return prismStage.POST("/products", payload);
  };
}

export default new Request();
