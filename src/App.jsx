import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import SellerDashboard from "./pages/SellerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Auctions from "./pages/Auctions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/seller" element={<SellerDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/auctions" element={<Auctions />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
