import { create } from "zustand";
import { Order } from "../types/order";

interface OrderState {
  orders: Order[];
  setOrders: (orders: Order[]) => void;
  addOrder: (order: Order) => void;
  updateOrder: (updatedOrder: Order) => void;
}

export const useOrderStore = create<OrderState>((set) => ({
  orders: [],
  setOrders: (orders: Order[]) =>
    set({
      orders: [...orders].sort((a, b) => a.order_id - b.order_id),
    }),
  addOrder: (order: Order) =>
    set((state) => ({
      orders: [
        order,
        ...state.orders.filter((o) => o.order_id !== order.order_id),
      ],
    })),
  updateOrder: (updatedOrder: Order) =>
    set((state) => {
      const updatedOrders = state.orders
        .map((o) => (o.order_id === updatedOrder.order_id ? updatedOrder : o))
        .sort((a, b) => a.order_id - b.order_id); // ✅ 정렬 추가

      return { orders: updatedOrders };
    }),
}));
