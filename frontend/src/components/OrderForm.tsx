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
      <div>
        <label htmlFor="foodName" className="block text-sm font-medium mb-1">
          음식 이름
        </label>
        <input
          id="foodName"
          type="text"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          placeholder="예: 김치찌개, 피자"
          className="border p-2 w-full"
          required
        />
      </div>

      <div>
        <label htmlFor="quantity" className="block text-sm font-medium mb-1">
          수량
        </label>
        <input
          id="quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border p-2 w-full"
          min={1}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        주문
      </button>

      {message && <div className="text-green-600 font-medium">{message}</div>}
    </form>
  );
};

export default OrderForm;
