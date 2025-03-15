import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import OrderPage from "./pages/OrderPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="p-4 flex gap-4 bg-gray-100">
        <Link to="/" className="text-blue-600 hover:underline">
          주문 페이지
        </Link>
        <Link to="/dashboard" className="text-blue-600 hover:underline">
          대시보드
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<OrderPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
