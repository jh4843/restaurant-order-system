import { updateOrderStatus } from "../services/api";
import { useOrderStore } from "../stores/orderStore";

const OrderTable = () => {
  const orders = useOrderStore((state) => state.orders);
  const updateOrder = useOrderStore((state) => state.updateOrder); // 상태 갱신 함수 (store에 추가 필요)

  const handleStatusClick = async (orderId: number) => {
    try {
      const updated = await updateOrderStatus(orderId);
      updateOrder(updated); // 상태 업데이트
    } catch (e) {
      console.error("상태 변경 실패", e);
    }
  };

  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th className="border p-2">주문ID</th>
          <th className="border p-2">음식명</th>
          <th className="border p-2">수량</th>
          <th className="border p-2">상태</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.order_id}>
            <td className="border p-2">{order.order_id}</td>
            <td className="border p-2">{order.food_name}</td>
            <td className="border p-2">{order.quantity}</td>
            <td className="border p-2">
              <button
                onClick={() => handleStatusClick(order.order_id)}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                {order.status}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
