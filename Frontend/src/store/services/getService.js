import axios from "axios";

const GET_ALL_PRODUCTS = "/api/products/";

const getProducts = async () => {
  const resp = await axios.get(
    `${import.meta.env.VITE_BASE_URL}${GET_ALL_PRODUCTS}`
  );
  return resp.data;
};

const getServices = {
  getProducts,
};

export default getServices;
