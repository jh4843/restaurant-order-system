import { useState } from "react";
import { postOrder } from "../services/api";
import { OrderRequest } from "../types/order";

const OrderForm = () => {
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const order: OrderRequest = { food_name: foodName, quantity };
    try {
      const res = await postOrder(order);
      setMessage(res.message);
      setFoodName("");
      setQuantity(1);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      setMessage("주문 실패");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={foodName}
        onChange={(e) => setFoodName(e.target.value)}
        placeholder="음식 이름"
        className="border p-2 w-full"
        required
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="border p-2 w-full"
        min={1}
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        주문
      </button>
      {message && <div className="text-green-600">{message}</div>}
    </form>
  );
};

export default OrderForm;
