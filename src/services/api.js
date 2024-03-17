import axios from "axios";

const pharmacyInstance = axios.create({
  baseURL: "http://localhost:3001/pharmacy",
});

export const fetchDrugsAll = async () => {
  const { data } = await pharmacyInstance.get(`/drugs`);

  return data;
};

export const addToOrder = async (orderData) => {
  const { data } = await pharmacyInstance.post(`/cart`, orderData);
  return data;
};
