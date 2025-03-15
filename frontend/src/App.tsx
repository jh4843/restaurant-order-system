import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import OrderPage from "./pages/OrderPage";

const App = () => {
  return (
    <BrowserRouter>
      <header className="bg-white shadow-md mb-6">
        <nav className="flex justify-start items-center gap-6">
          <Link
            to="/"
            className="inline-block px-5 py-2 font-semibold hover:text-blue-600 transition-colors"
          >
            주문 페이지
          </Link>
          <Link
            to="/dashboard"
            className="inline-block px-5 py-2 font-semibold ml-5 hover:text-blue-600 transition-colors"
          >
            대시보드
          </Link>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<OrderPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
