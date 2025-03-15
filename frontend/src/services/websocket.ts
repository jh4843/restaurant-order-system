import { useOrderStore } from "../stores/orderStore";
import { Order } from "../types/order";

let ws: WebSocket | null = null;

export const initWebSocket = () => {
  // ✅ 이미 연결된 WebSocket이면 재연결하지 않음
  if (
    ws &&
    (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)
  ) {
    return;
  }

  ws = new WebSocket(import.meta.env.VITE_WS_URL);
  const addOrder = useOrderStore.getState().addOrder;

  ws.onmessage = (event) => {
    const data: Order = JSON.parse(event.data);
    addOrder(data);
  };

  ws.onerror = (e) => {
    console.error("WebSocket Error:", e);
  };

  ws.onclose = () => {
    console.warn("WebSocket 연결 종료됨.");
    // 필요 시 재연결 로직도 여기 넣을 수 있음
  };
};
