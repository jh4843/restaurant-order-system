import axios from "axios";
import { Order, OrderRequest, OrderResponse } from "../types/order";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const postOrder = async (
  order: OrderRequest
): Promise<OrderResponse> => {
  const res = await api.post("/order", order);
  return res.data;
};

export const updateOrderStatus = async (orderId: number): Promise<Order> => {
  const url = `${
    import.meta.env.VITE_API_BASE_URL
  }/order/${orderId}/processing`;
  const res = await axios.patch(url);
  return res.data;
};

export const fetchAllOrders = async (): Promise<Order[]> => {
  const res = await api.get("/orders");
  return res.data;
};
