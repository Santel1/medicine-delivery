import axios from "axios";

const pharmacyInstance = axios.create({
  /*Local url */
  // baseURL: "http://localhost:3001/pharmacy",
  /*Render url */
  baseURL: "https://mediship.onrender.com/pharmacy",
});

export const fetchDrugsAll = async () => {
  const { data } = await pharmacyInstance.get(`/drugs`);

  return data;
};

export const addToOrder = async (orderData) => {
  const { data } = await pharmacyInstance.post(`/cart`, orderData);
  return data;
};

export const fetchOrders = async () => {
  const { data } = await pharmacyInstance.get(`/orders`);

  return data;
};
