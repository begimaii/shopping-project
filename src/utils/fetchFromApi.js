import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products/";

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}${url}`);
  return data;
};
