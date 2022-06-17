import axios from "axios";

const client = {
  async getProducts() {
    return axios.get("https://fakestoreapi.com/products")
      .catch((error) => console.log(JSON.stringify(error)));
  }
};

export default client;