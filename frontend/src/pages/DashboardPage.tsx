import { useEffect } from "react";
import OrderTable from "../components/OrderTable";
import { fetchAllOrders } from "../services/api";
import { initWebSocket } from "../services/websocket";
import { useOrderStore } from "../stores/orderStore";

const DashboardPage = () => {
  const setAllOrders = useOrderStore((state) => state.setOrders);

  useEffect(() => {
    // ✅ 1. 최초 전체 주문 불러오기
    const loadOrders = async () => {
      const orders = await fetchAllOrders();
      setAllOrders(orders);
    };
    loadOrders();

    // ✅ 2. WebSocket 연결
    initWebSocket();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">실시간 주문 대시보드</h1>
      <OrderTable />
    </div>
  );
};

export default DashboardPage;
