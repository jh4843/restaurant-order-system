import { useOrderStore } from "../stores/orderStore";

const OrderTable = () => {
  const orders = useOrderStore((state) => state.orders);

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
            <td className="border p-2">{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
