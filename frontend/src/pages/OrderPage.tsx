import OrderForm from "../components/OrderForm";

const OrderPage = () => {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">주문 페이지</h1>
      <OrderForm />
    </div>
  );
};

export default OrderPage;
